const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,  
    auth: {
      user: "3de397a6316823",
      pass: "c1a55a0a69b156"
    }
};
const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error,info) =>{
        if(error) {
            console.log(error)
        }else{
            console.log(info);
            return info.response;
        }
    });    
};

let email_data = {
    from: 'vyrjsgml@naver.com',
    to: 'vyrjsgml@naver.com',
    subject : '메일 테스트입니당',
    text: '히히'
}
send(email_data);