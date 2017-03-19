import express from 'express';
import passport from 'passport';
import { ROLE_MEMBER, ROLE_CLIENT, ROLE_OWNER, ROLE_ADMIN } from './constants';

import AuthenticationController from './controllers/authentication';
import UserController from './controllers/user';
import passportService from './services/passport';

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

export default function (app) {

  const apiRoutes = express.Router(),
    authRoutes = express.Router(),
    userRoutes = express.Router();

  // Auth Routes
  apiRoutes.use('/auth', authRoutes);
  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  // User Routes
  apiRoutes.use('/user', userRoutes);
  userRoutes.get('/:userId', requireAuth, UserController.viewProfile);

  // protected route
  apiRoutes.get('/protected', requireAuth, (req, res) => {
    res.send({ content: 'The protected test route is functional!' });
  });

  apiRoutes.get('/admins-only', requireAuth, AuthenticationController.roleAuthorization(ROLE_ADMIN), (req, res) => {
    res.send({ content: 'Admin dashboard is working.' });
  });

  // Set url for API group routes
  app.use('/api', apiRoutes);
};
