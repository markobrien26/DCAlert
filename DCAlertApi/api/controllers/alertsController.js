'use strict';


var mongoose = require('mongoose'),
  Alert = mongoose.model('Alerts');

exports.list_all_alerts = function(req, res) {
  Alert.find({}, function(err, alert) {
    if (err)
      res.send(err);
    res.json(alert);
  });
};


exports.create_a_alert = function(req, res) {
  var new_alert = new Alert(req.body);
  new_alert.save(function(err, alert) {
    if (err)
      res.send(err);
    res.json(alert);
  });
};


exports.read_a_alert = function(req, res) {
  Alert.findById(req.params.alertId, function(err, alert) {
    if (err){
      return res.send();
     }
    res.json(alert);
  });
};


exports.update_a_alert = function(req, res) {
  Alert.findOneAndUpdate(req.params.alertId, req.body, {new: true}, function(err, alert) {
    if (err)
      res.send(err);
    res.json(alert);
  });
};


exports.delete_a_alert = function(req, res) {


  Alert.remove({
    _id: req.params.alertId
  }, function(err, alert) {
    if (err)
      res.send(err);
    res.json({ message: 'Alert successfully deleted' });
  });
};

exports.delete_all_alerts = function(req, res) {


  Alert.remove({}, function(err, alert) {
    if (err)
      res.send(err);
    res.json({ message: 'Alert successfully deleted' });
  });
};
