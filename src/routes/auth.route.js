import express from 'express';
import AuthController from './../app/controllers/auth.controller';
const router = express.Router();

router.post('/login',AuthController.login);


export default router;