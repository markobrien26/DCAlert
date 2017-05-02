'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AlertSchema = new Schema({
  src_ip: {
    type: String,
    Required: 'Kindly enter the source ip of the alert'
  },
  country: {
    type: String,
    Required: 'Kindly enter the country of the alert'
  },
  city: {
    type: String,
    Required: 'Kindly enter the city of the alert'
  },
  type: {
    type: String,
    Required: 'Kindly enter the type of the alert'
  },
  host: {
    type: String,
    Required: 'Kindly enter the host of the alert'
  },
  temperature: {
    type: String,
    Required: 'Kindly enter the temparature of the alert'
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

module.exports = mongoose.model('Alerts', AlertSchema);
