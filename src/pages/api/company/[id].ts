import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const companyId = req.query.id as string;

	if (req.method === 'GET') {
		try {
			const company = await prisma.company.findUnique({
				where: {
					id: companyId
				}
			});
			res.status(200).json(company);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	if (req.method === 'DELETE') {
		try {
			const company = await prisma.company.delete({
				where: {
					id: companyId
				}
			});
			res.status(200).json(company);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	if (req.method === 'PUT') {
		try {
			const updateUser = await prisma.company.update({
				where: {
					id: companyId
				},
				data: {
					about: 'Viola the Magnificent'
				}
			});
		} catch (error) {
			res.status(500).json(error);
		}
	}
}
