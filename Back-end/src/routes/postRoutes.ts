import { Router } from 'express';
import { getAllPosts, getPostById } from '../controllers/postController';

const router = Router();
router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
export default router;