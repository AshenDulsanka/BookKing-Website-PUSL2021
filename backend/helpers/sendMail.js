import nodeMailer from 'nodemailer'
const { SMTPMAIL, SMTPPASS } = process.env

const sendMail = async (email, mailSubject, content) => {
  try {
    const transport = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: SMTPMAIL,
        pass: SMTPPASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions = {
      from: SMTPMAIL,
      to: email,
      subject: mailSubject,
      html: content
    }

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Mail sent successfully!' + info.response)
      }
    })
  } catch (error) {
    console.log(error.message)
  }
}

export { sendMail }
