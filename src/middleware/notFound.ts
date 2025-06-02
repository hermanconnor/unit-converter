import { Request, Response } from 'express';

const notFound = (req: Request, res: Response) => {
  res.status(404).render('notFound', {
    title: 'Page Not Found',
    url: req.originalUrl,
  });
};

export default notFound;
