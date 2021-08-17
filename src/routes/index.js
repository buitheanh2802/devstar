import siteRoute from './site.route';
import authRoute from './auth.route';
import postRoute from './post.route';
import questionRoute from './question.route';

const rootRoute = (app) => {
    // route auth
    app.use('/auth',authRoute);
    // route question
    app.use('/questions',questionRoute);
    // post route
    app.use('/posts',postRoute);
    // site route 
    app.use('/',siteRoute);
}

export default rootRoute;