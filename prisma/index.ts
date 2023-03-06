import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.company.createMany({
		data: [
			{
				companyName: '10up',
				companyLogo:
					'https://media.glassdoor.com/sql/775906/10up-squarelogo-1400949368497.png',
				website: 'https://10up.com/',
				about:
					'We make the web better by finely crafting websites & tools for content creators.',
				companySize: '201 - 500',
				approved: true,
				location: 'Roseville, CA'
			},
			{
				companyName: '17hats',
				companyLogo:
					'https://media.glassdoor.com/sql/1327368/17hats-squarelogo-1499404803292.png',
				website: 'https://www.17hats.com/',
				about: 'To help service-driven, small business owners succeed.',
				companySize: '1 - 50',
				approved: true,
				location: 'Pasadena, CA'
			},
			{
				companyName: 'Acquia',
				companyLogo:
					'https://media.glassdoor.com/sql/347852/acquia-squareLogo-1630515493739.png',
				website: 'https://www.acquia.com/',
				about:
					'Acquia is driving the open-source revolution as the leading provider of cloud-based digital experience management solutions.',
				companySize: '1001 - 5000',
				approved: true,
				location: 'Boston, MA'
			},
			{
				companyName: 'Aha!',
				companyLogo:
					'https://media.glassdoor.com/sql/347852/acquia-squareLogo-1630515493739.png',
				website: 'https://www.acquia.com/',
				about:
					'Acquia is driving the open-source revolution as the leading provider of cloud-based digital experience management solutions.',
				companySize: '1001 - 5000',
				approved: true,
				location: 'Boston, MA'
			}
		],
		skipDuplicates: true
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
