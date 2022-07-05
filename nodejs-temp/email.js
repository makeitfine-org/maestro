/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2022
 */

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.i.ua',
    port: 465,
    auth: {
        user: 'jsendmsg@i.ua',
        pass: '_MailtrapJsendermail899'
    }
});

// send email
let v = await transporter.sendMail({
    from: 'jsendmsg@i.ua',
    to: 'keyerid@gmail.com',
    subject: 'Test Email Subject',
    html: '<h1>Example HTML Message Body</h1>'
});

console.log(v.valueOf())

// mail:
//     protocol: smtp
// host: smtp.i.ua
// port: 465
// username: ${EMAIL_USERNAME}
//     password: ${EMAIL_PASSWORD}
//         properties:
//             mail:
//                 smtp:
//                     auth: true
// starttls:
//     enable: true
// connectiontimeout: 5000
// timeout: 5000
// writetimeout: 5000