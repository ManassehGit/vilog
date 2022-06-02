// "use strict";
const nodemailer = require("nodemailer");
const {google} = require('googleapis');
const QRCode = require('qrcode');

const CLIENT_ID = '351684500881-6kjjab649ukd0cs1r3booej83dt2k0hm.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04Q7s6rrbDPPuCgYIARAAGAQSNwF-L9IrHH1UcdK-MsPbIeE4Z672xlTpmaS1yw-sgkrfONhRehletHenRxGtbXDYXdMBQC6juWE';

 const  oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

 oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN});

 class SendQR {

  constructor(){
    this.dataLink = "";
  }



   async generateQR (text) {
     try{
        const url = await QRCode.toDataURL(text);
       
        return url;
      }catch(err) {
        console.error(err)
    }
  }

  async sendVisitorMail (visitorMail, dataURL) {
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

      // const mailOptions = {
      //   from: 'ViLog System <vilogsys@gmail.com>',
      //   to: 'manasseh.sarfo@amalitech.org',
      //   subject: 'Visitor login QR Code',
      //   text: 'Kindly use the QR code given to login at the premise at the next visit',
      //   html: `<h1>Visitor QR Login</h1><hr /><p>Kindly use the QR code given to login at the premise at the next visit</p><img src=`
      // }

      const result = await transport.sendMail(
        {
          from: 'ViLog System <vilogsys@gmail.com>',
          to: visitorMail,
          subject: 'Visitor login QR Code',
          text: 'Kindly use the QR code given to login at the premise at the next visit',
          attachDataUrls: true, //to accept base64 content in messsage
          html: `<h1>Visitor QR Login</h1><hr /><p>Kindly use the QR code given to login at the premise at the next visit</p><img src="${dataURL}" alt="QR Code">`
        }
      );
      return result;
    }catch(error){
      return error;
    }
 }


 async sendQRMail(visitorMail) {
   let imgSrc = await this.generateQR(visitorMail);
  //  let test = this.load(imgSrc);
   
    try{
      const result = await this.sendVisitorMail(visitorMail, imgSrc);
      return result;
    }catch(err){
      return err;
    }
 }
 }

 export const sendVisitorQR = new SendQR();
//  let testing = sendVisitorQR.sendQRMail('manasseh.sarfo@amalitech.org');
//  console.log("testing",testing);