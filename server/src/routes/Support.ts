import { Request, Response, Router } from 'express';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status-codes';
import { sendEmail } from '../email';

const router = Router();

/**
 * Send email on behalf of the logged in user
 * @param req Request
 * @param res Response
 */
async function handleCreateSupportTicket(req: Request, res: Response) {
        // TODO: Handle creation of a support ticket => Just send email via SendGrid to admin
        const supportRequest = req.body as Api.SupportRequest; // TODO: Validate expected data
        const supportEmail = process.env.SUPPORT_EMAIL as string; // TODO: Validate email

    try{
        sendEmail(
            supportRequest.email,
            supportEmail || 'inessousa898@gmail.com',
            supportRequest.subject,
            supportRequest.message);
        res.status(200);
    } catch(err) {res.status(INTERNAL_SERVER_ERROR);}
    
}
// Register routes
router.post('/ticket', handleCreateSupportTicket);

export default router;