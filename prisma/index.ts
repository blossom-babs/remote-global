import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



async function main() {
	await prisma.company.create({
		data: {
			companyName: '10up',
			companyLogo: 'https://media.glassdoor.com/sql/775906/10up-squarelogo-1400949368497.png',
			website: 'https://10up.com/',
			about:
				'We make the web better by finely crafting websites & tools for content creators.',
			companySize: '201 - 500',
			approved: true,
			location: 'Roseville, CA'
		}
	});

	const allComp = await prisma.company.findMany();
	console.log(allComp);
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
