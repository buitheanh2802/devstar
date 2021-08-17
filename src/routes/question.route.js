import express from 'express';
import questionController from './../app/controllers/question.controller';
const route = express.Router();

route.get('/',questionController.renderQuestionPage)

export default route;