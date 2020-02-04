 
/**
 * @param from: string,
 * @param to: string,
 * @param subject: string,
 * @param message: string
**/

export function sendEmail(
    from: string,
    to: string,
    subject: string,
    message: string){
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
        to: to,
        from: from,
        subject: subject,
        text: message,
        html: '<strong>'+message+'</strong>',
        };
        return sgMail.send(msg);
    }