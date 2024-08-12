import express from 'express';
const activityRoutes = express.Router();
import * as activityController from '../controllers/activityController.js';

activityRoutes.post('/', activityController.createActivity);
activityRoutes.get('/', activityController.getActivities);
activityRoutes.get('/pid/:pid', activityController.getActivitiesByPid);
activityRoutes.get('/:id', activityController.getActivityById);
activityRoutes.put('/:id', activityController.updateActivity);
activityRoutes.delete('/:id', activityController.deleteActivity);

export default activityRoutes;