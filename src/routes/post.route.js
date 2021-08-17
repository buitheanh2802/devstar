import express from 'express';
import postController from './../app/controllers/post.controller';
const route = express.Router();

route.get('/*-:id.html',postController.renderPostDetailPage)
route.get('/',postController.renderPostPage)

export default route;