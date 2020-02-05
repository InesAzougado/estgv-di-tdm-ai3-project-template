import { Request, Response, Router } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { buildApiErrorMessage } from '../shared/index';
import { sendEmail } from '../email';

const router = Router();

/**
 * Send email on behalf of the logged in user
 * @param req Request
 * @param res Response
 */
async function handleSendEmail(req: Request, res: Response) {
    // TODO: Handle sending of email via SendGridconst SendEmailRequest = req.body as Api.SendEmailRequest;
    const SendEmailRequest = req.body as Api.SendEmailRequest;
    try{
        sendEmail(
            SendEmailRequest.from || 'inessousa898@gmail.com',
            SendEmailRequest.to,
            SendEmailRequest.subject,
            SendEmailRequest.message);
        res.status(200);
    } catch(err) {res.status(INTERNAL_SERVER_ERROR);}
    

}
// Register routes
router.post('/send_email', handleSendEmail);

export default router;