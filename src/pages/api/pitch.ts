import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { companyName, website, location } = req.body;

	try {
		const company = await prisma.company.create({
			data: {
				companyName,
				website,
				location,
				companyLogo: ''
			}
		});
		res.status(200).json(company);
	} catch (error) {
		res.status(500).json(error);
	}
}
