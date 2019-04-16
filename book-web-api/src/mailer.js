import nodemailer from "nodemailer";

const from = '"Bookweb" <info@bookweb.com>';

function setup() {
    return nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "59fcf5e281ea33",
            pass: "843dffc3bcc7d9"
        }
    });
}

export function sendConfirmationEmail(user) {
    const tranport = setup();
    const email = {
        from,
        to: user.email,
        subject: "Welcome to Bookweb",
        text: `
    Welcome to Bookweb. Please, confirm your email.
    ${user.generateConfirmationUrl()}
    `
    };

    tranport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
    const tranport = setup();
    const email = {
        from,
        to: user.email,
        subject: "Reset Password",
        text: `
    To reset password follow this link

    ${user.generateResetPasswordLink()}
    `
    };

    tranport.sendMail(email);
}
