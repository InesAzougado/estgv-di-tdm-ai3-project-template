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
            SendEmailRequest.email || 'inessousa898@gmail.com',
            SendEmailRequest.destinatario,
            SendEmailRequest.assunto,
            SendEmailRequest.mensagem);
        res.status(200);
    } catch(err) {res.status(INTERNAL_SERVER_ERROR);}
    
    res.status(INTERNAL_SERVER_ERROR)
        .send(buildApiErrorMessage('Not implemented'));

}
// Register routes
router.post('/SendEmail', handleSendEmail);

export default router;