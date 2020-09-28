const mailer = require("nodemailer");
require('dotenv/config');


const sendEmail = (email, name, message) => {
    const smtpTransport = mailer.createTransport({
     host: 'smtp.umbler.com',
     port: 587,
     secure: false, //SSL/TLS
     service: "Gmail",
     auth: {
      user: "",
      pass: ""
  }
 })

 const mail = {
  from: email,
  to: "rafa.santa11@gmail.com, claudiozanelatto@gmail.com, mosias.melo@gmail.com, rickboto10@gmail.com",
  subject: `Broken Out`,
  text: `De: ${name}\nEmail: ${email}\nMensagem: ${message}`,
  html: `
  <div style="height: 10vh;">
      <center>
        <h1 style="color: #e10f4c">Broken Out</h1>
        <center>
      </div>
      <div>
        <h2>Contato Broken Out</h2>
      </div>
      <div>
        <fieldset>
          <legend>${email}</legend>
          <p>${message}</p>
          <p>Atensiosamente, ${name}</p>
        </fieldset>
      </div>
  `
}

return new Promise((resolve, reject) => {
  smtpTransport.sendMail(mail)
      .then(response => {
          smtpTransport.close();
          return resolve(response);
      })
      .catch(error => {
          smtpTransport.close();
          return reject(error);
      });
})
}

module.exports = { sendEmail }