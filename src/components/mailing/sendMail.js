// "use strict";
const nodemailer = require("nodemailer");
const {google} = require('googleapis');

const CLIENT_ID = '351684500881-6kjjab649ukd0cs1r3booej83dt2k0hm.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04Q7s6rrbDPPuCgYIARAAGAQSNwF-L9IrHH1UcdK-MsPbIeE4Z672xlTpmaS1yw-sgkrfONhRehletHenRxGtbXDYXdMBQC6juWE';

 const  oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

 oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN});

 class SendQR {

  constructor(){
    
  }

  async sendEMail () {
    try{
      const accessToken = await oAuth2Client.getAccessToken();

      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'vilogsys@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken
        }
      })

      const mailOptions = {
        from: 'ViLog System <vilogsys@gmail.com>',
        to: 'manasseh.sarfo@amalitech.org',
        subject: 'Testing the send Mail function',
        text: 'Hello there',
        html: '<h1><code>Welcome to the page</code></h1>'
      }

      const result = await transport.sendMail(mailOptions);
      return result;
    }catch(error){
      return error;
    }
 }


 async sendQRMail() {
    try{
      const result = await this.sendEMail();
      return result;
    }catch(err){
      return err;
    }
 }
 }

 const sendVisitorQR = new SendQR();
 let testing = sendVisitorQR.sendQRMail();
 console.log(testing);