import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

type ResponseData = {
	status: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	res.status(200).json({ status: 'Ok' });
}

export async function POST(req: NextApiRequest) {
	const body = JSON.parse(req.body);
	console.log(body);
	return NextResponse.json({ status: 'Ok' }, { status: 200 });
}
