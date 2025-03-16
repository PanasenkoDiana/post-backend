import { authTokenMiddleware } from '../middlewares/authTokenMiddleware';
import userControllers from './userController';
import { Router } from 'express';

const router = Router();

router.post('/login', userControllers.userController.authUser)
router.post('/register', userControllers.userController.registerUser)

router.get("/me", authTokenMiddleware, userControllers.userControllerApi.getUserById)

export default router;
