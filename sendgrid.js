
const sgMail = require('@sendgrid/mail')

module.exports = (mail,name,check)=>{
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg1 = {
  to: mail, 
  from: {
    name: 'Visitor tracking system',
    email: 'abhishekgautam388@gmail.com'
  }, 
  subject: 'Greetings of the day!',
  text: `Hey ${name},You just have checked ${check} to the premises`,
  html: `<h2>Hey ${name},</h2> <h3>You just have checked ${check} to the premises.</h3><p>We hope you enjoy your visit. Have a nice day!<br>Regards</p>`,
}

const msg2 = {
  to: mail, 
  from: {
    name: 'Visitor tracking system',
    email: 'abhishekgautam388@gmail.com'
  }, 
  subject: 'Greetings of the day!',
  text: `Hey ${name},You just have checked ${check} the premises. Thanks for visiting. Have a nice day!`,
  html: `<h2>Hey ${name},</h2> <h3>You just have checked ${check} the premises.</h3><p>Thanks for visiting. Have a nice day!<br>Regards</p>`,
}

let msg;
if(check=="in"){
  msg=msg1
}
else{
  msg=msg2
} 

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}