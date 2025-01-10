'use';
import { NextResponse, NextRequest } from 'next/server';
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function GET() {
	return NextResponse.json({ status: 'Ok' }, { status: 200 });
}

export async function POST(req: NextRequest) {
	const body = await req.json();

	const message = `
	Name: ${body.name}\r\n
	Email: ${body.email}\r\n
	Message: ${body.message}
	`;

	const data = {
		to: 'fdonckersf@gmail.com',
		from: 'contact@floriandonckers.com',
		subject: 'New message from contact form',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	};

	mail.send(data);

	return NextResponse.json({ status: 'Ok' }, { status: 200 });
}
