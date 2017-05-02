'use strict';
module.exports = function(app) {
  var alerts = require('../controllers/alertsController');
  var ssh = require('../controllers/sshController');

  // alerts Routes
  app.route('/alerts')
    .get(alerts.list_all_alerts)
    .post(alerts.create_a_alert)
    .delete(alerts.delete_all_alerts);


  app.route('/alerts/:alertId')
    .get(alerts.read_a_alert)
    .put(alerts.update_a_alert)
    .delete(alerts.delete_a_alert);

  app.route('/ssh')
    .get(ssh.list_all_ssh)
    .post(ssh.create_a_ssh)
    .delete(ssh.delete_all_ssh);


  app.route('/ssh/:sshId')
    .get(ssh.read_a_ssh)
    .put(ssh.update_a_ssh)
    .delete(ssh.delete_a_ssh);

};
