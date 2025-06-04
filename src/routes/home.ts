import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('home', { currentPage: 'home' });
});

export default router;
