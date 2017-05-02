'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SshSchema = new Schema({
  src_ip: {
    type: String,
    Required: 'Kindly enter the IP'
  },
  country: {
    type: String,
    Required: 'Kindly enter the Country'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Ssh', SshSchema);
