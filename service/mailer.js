const nodemailer = require("nodemailer");
require("dotenv").config();

const wellcomeMail = async (to, nm) => {
  const transporter = await nodemailer.createTransport({
    host : "srv76.niagahoster.com",
    port : 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = await {
    from: process.env.SENDER, // sender address
    to: to, // list of receivers
    subject: `Hello ${nm}`, // Subject line
    html: `
      <h1>Selamat datang ${nm} di Arofest</h1>
      <p>
      Terimakasih sudah bergabung bersama kami, <br />
      silakan melakukan verifikasi account dengan click button dibawah ini.
      <br>
      <img src="https://picsum.photos/seed/13/300"/>
      <br>
      Terimakasih
      </p>

      <a href="https://dutadropship.vercel.app/verificationpage/${to}" style="
          text-decoration : none;
          color : inherit;
      ">
        <button style="
        border : none;
        outline : none;
        padding : 5px 10px;
        background-color : orange;
        color : white;
        font-size : 1rem;
        ">Verifikasi acount Arofest</button>
      </a>
    
    `, // plain text body
  };

  return transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

module.exports = { wellcomeMail };