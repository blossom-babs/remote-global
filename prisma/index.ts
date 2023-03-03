import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const json = [
	{
		twitter: 'https://twitter.com/10up',
		linkedin: 'https://www.linkedin.com/company/10up/',
		github: 'https://github.com/10up',
		facebook: 'https://web.facebook.com/10up.agency?_rdc=1&_rdr'
	}
] as Prisma.JsonArray;

async function main() {
	// await prisma.company.create({
	// 	data: {
	// 		companyName: '10up',
	// 		employmentType: ['full-time', 'part-time'],
	// 		industry: 'Industry & Web services',
	// 		website: 'https://10up.com/',
	// 		about:
	// 			'We make the web better by finely crafting websites & tools for content creators.',
	// 		companySize: '201 - 500',
	// 		socialLinks: json,
	// 		approved: true,
	// 		location: 'Roseville, CA'
	// 	}
	// });

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
