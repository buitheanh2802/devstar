import express from 'express';
import SiteController from './../app/controllers/site.controller';
const router = express.Router();

router.get('/register',SiteController.renderRegisterPage);
router.get('/login',SiteController.renderLoginPage);
router.get('/',SiteController.renderHomePage);

export default router;