import { Resend } from "resend";
import { NextResponse } from "next/server";

// Check if API key exists
if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not defined in environment variables");
}

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key_for_build");

export async function POST(req: Request) {
  console.log("API route hit - POST request received");

  try {
    // Check if API key is missing
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing in environment variables");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please contact the administrator.",
        },
        { status: 503 }
      );
    }

    console.log("Request body:", await req.text());
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    console.log("Attempting to send email with data:", {
      name,
      email,
      phone,
      service,
      messageLength: message.length,
    });

    const data = await resend.emails.send({
      from: "Aakbar Plumbing Contact Form <onboarding@resend.dev>",
      to: "hareshgoyal06@gmail.com",
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    // Log more detailed error information
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    }
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
