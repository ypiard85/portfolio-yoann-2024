import { ContactFormTemplate } from '@/app/assets/components/email/ContactFormTemplate';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(data:any){

  const body = await data.json()

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio : ${body.email} <onboarding@resend.dev>`,
      to: ['yoann.piard@gmail.com'],
      subject: body.subject,
      text: body.content,
      react: ContactFormTemplate({name: body.name, message: body.message, phone: body?.phone}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }


    return Response.json('ok');

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};