'use strict';


var mongoose = require('mongoose'),
  Ssh = mongoose.model('Ssh');

exports.list_all_ssh = function(req, res) {
  Ssh.find({}, function(err, ssh) {
    if (err)
      res.send(err);
    res.json(ssh);
  });
};


exports.create_a_ssh = function(req, res) {
  var new_ssh = new Ssh(req.body);
  new_ssh.save(function(err, ssh) {
    if (err)
      res.send(err);
    res.json(ssh);
  });
};


exports.read_a_ssh = function(req, res) {
  Ssh.findById(req.params.sshId, function(err, ssh) {
    if (err){
      return res.send();
     }
    res.json(ssh);
  });
};


exports.update_a_ssh = function(req, res) {
  Ssh.findOneAndUpdate(req.params.sshId, req.body, {new: true}, function(err, ssh) {
    if (err)
      res.send(err);
    res.json(ssh);
  });
};

exports.delete_a_ssh = function(req, res) {


  Ssh.remove({
    _id: req.params.sshId
  }, function(err, ssh) {
    if (err)
      res.send(err);
    res.json({ message: 'Ssh successfully deleted' });
  });
};

exports.delete_all_ssh = function(req, res) {


  Ssh.remove({}, function(err, ssh) {
    if (err)
      res.send(err);
    res.json({ message: 'Ssh successfully deleted' });
  });
};
