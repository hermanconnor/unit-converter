import path from 'node:path';
import express from 'express';
import { engine } from 'express-handlebars';
import homeRoutes from './routes/home';
import lengthRoutes from './routes/length';
import errorHandler from './middleware/errorMiddleware';
import notFound from './middleware/notFound';

const app = express();

app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    extname: '.handlebars',
    helpers: {
      isActive: (
        currentPage: string,
        targetPage: string,
        options: Handlebars.HelperOptions,
      ) => {
        return currentPage === targetPage
          ? options.fn(this)
          : options.inverse(this);
      },
    },
  }),
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.year = new Date().getFullYear();
  next();
});

app.use('/', homeRoutes);
app.use('/length', lengthRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
