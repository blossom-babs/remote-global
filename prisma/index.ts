import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.company.create({
		data: {
			companyName: '10up',
			industry: 'Industry & Web services',
			about:
				'We make the web better by finely crafting websites & tools for content creators.',
			companySize: '201 - 500',
			socialLinks: ['https://twitter.com/10up' ],
			approved: true,
			location: 'Roseville, CA'
		}
	});

	// https://twitter.com/10up

	const allUsers = await prisma.company.findMany();
	console.log(allUsers);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
