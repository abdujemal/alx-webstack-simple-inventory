import NotificationService from '../../Notification/service/notificationService.js';
import Activity from '../models/activity.js';

export const createActivity = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    NotificationService.sendToAll("New Sale happened", `${activity.customerName} has bought ${activity.pName}`)
    res.status(201).json(activity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getActivities = async (req, res) => {
  try {
    const { page , limit = 10 } = req.query;

    let activities;
    if(!page){
      activities = await Activity
        .find({}, { pPrice: 1, date: 1, _id: 0 })
        .sort({ date: 1 });
       
    }else{
      const skip = (page - 1) * limit;
  
      activities = await Activity.find()
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit);
    }

    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getActivitiesByPid = async (req, res) => {
    try {
      const { pid } = req.params;
      const activities = await Activity.find({ pid });
      res.json(activities);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

export const getActivitiesByCid = async (req, res) => {
  try {
    const { customerId } = req.params;
    const activities = await Activity.find({ customerId });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    Object.assign(activity, req.body);
    await activity.save();
    res.json(activity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    await activity.deleteOne();
    res.json({ message: 'Activity deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};