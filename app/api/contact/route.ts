import { NextResponse } from "next/server";

// TODO: wire up an email provider (e.g. Resend, SendGrid, Nodemailer + SMTP)
// using an API key from an environment variable before deploying to production.
// This currently only validates and logs the submission.
export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  console.log("New contact form submission:", { name, email, subject, message });

  return NextResponse.json({ ok: true });
}
