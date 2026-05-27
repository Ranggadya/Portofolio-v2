// api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

interface ContactPayload {
    operatorName: string;
    emailAddress: string;
    messageContent: string;
}

function validatePayload(body: unknown): body is ContactPayload {
    if (!body || typeof body !== "object") return false;
    const b = body as Record<string, unknown>;
    return (
        typeof b.operatorName === "string" && b.operatorName.trim().length > 0 &&
        typeof b.emailAddress === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.emailAddress) &&
        typeof b.messageContent === "string" && b.messageContent.trim().length >= 10
    );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // Validate payload
    if (!validatePayload(req.body)) {
        return res.status(400).json({ error: "Invalid payload" });
    }

    const { operatorName, emailAddress, messageContent } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_APP_PASSWORD, // Gmail App Password
        },
    });

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: emailAddress,
            subject: `[Portfolio] New message from ${operatorName}`,
            html: `
        <div style="font-family: monospace; padding: 24px; background: #0b1120; color: #22d3ee; border-radius: 8px;">
          <h2 style="margin: 0 0 16px;">[INCOMING TRANSMISSION]</h2>
          <p><strong>Operator:</strong> ${operatorName}</p>
          <p><strong>Comm Link:</strong> ${emailAddress}</p>
          <hr style="border-color: #22d3ee33; margin: 16px 0;" />
          <p><strong>Payload:</strong></p>
          <p style="white-space: pre-wrap;">${messageContent}</p>
        </div>
      `,
        });

        return res.status(200).json({ message: "Transmission successful" });
    } catch (error) {
        console.error("Email send error:", error);
        return res.status(500).json({ error: "Failed to send message" });
    }
}