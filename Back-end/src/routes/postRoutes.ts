import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { asyncHandler } from '../utils/asyncHandler';
import * as postController from '../controllers/postController';

const router = Router();
router.get('/posts', asyncHandler(postController.getAllPosts));
router.get('/posts/:id', asyncHandler(postController.getPostById));
router.post('/posts', authenticate, asyncHandler(postController.createPost));
router.put('/posts/:id', authenticate, asyncHandler(postController.updatePost));
router.delete('/posts/:id', authenticate, asyncHandler(postController.deletePost));

export default router;