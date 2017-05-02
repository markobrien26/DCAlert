var gcm = require('node-gcm');
 
// Set up the sender with your GCM/FCM API key (declare this once for multiple messages) 
var sender = new gcm.Sender('AIzaSyCZMtNU1nAgy_-_6RrObP6MpMT37zhUVc8');
 
// Prepare a message to be sent 
var message = new gcm.Message({
    data: { key1: 'msg1' }
});
 
// Specify which registration IDs to deliver the message to 
var regTokens = ['ek5d8FicHAo:APA91bGthVBHInoIH_Zg_LkuqGP9pmykRyEXfFpD1sy3uIPYR0cpLd25RBwcGcsu42uvPG1a1Vvyu5_sF8Dq4HjyZNkJIHv01Hb9IZA30opox9oWO65EhjcWWEiEd68f6Ly6qDDQ1aY8'];
 
// Actually send the message 
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if (err) console.error(err);
    else console.log(response);
});
