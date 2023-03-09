import Layout from '@/components/Layout';
import Waitlist from '@/components/Waitlist';
import MultipleSelectChip from '@/components/MultiSelectComp';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import GridViewIcon from '@mui/icons-material/GridView';
import React from 'react';
import { PrismaClient } from '@prisma/client';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const prisma = new PrismaClient();

/*
1. filter by companysize, accepts open source
2. companies list has 2 views - grid and table

*/

interface Companies {
	companies: {
		id: string;
		companyName: string;
		companyLogo: string;
		website: string;
		about: string;
		companySize: string;
		approved: boolean;
		location: string;
	}[];
}

export default function Companies({ companies }: Companies) {
	return (
		<>
			<Head>
				<title>International Companies hiring globally</title>
			</Head>
			<main className="companies">
				<Layout>
					<div className="companies-content">
						<header className="companies-header">
							<div className="companies-header-filter">
								<MultipleSelectChip />
							</div>

							<div className="companies-viewIcons">
								<GridViewIcon />
								<TableRowsIcon />
							</div>
						</header>
						<div className="companies-list">
							{companies.map((data) => (
								<article key={data.id}>
									<img
										alt={data.companyName}
										src={data.companyLogo}
										width={50}
										height={50}
									/>
									<div className="companies-data">
										<h1>{data.companyName}</h1>
										<p className='companies-data-about'>{data.about}</p>

										<p className='companies-data-size'>
											Company Size: <span>{data.companySize}</span>{' '}
										</p>
									</div>

									<div className="companies-data-footer">
										<p>{data.location}</p>
										<Link
											href={data.website}
											target="_blank"
											rel="noopener noreferrer">
											<OpenInNewIcon />
										</Link>
									</div>
								</article>
							))}
						</div>
						<div className="companies-waitlist">
							<Waitlist />
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}

export async function getServerSideProps() {
	const companies = await prisma.company.findMany({});

	return {
		props: {
			companies: JSON.parse(JSON.stringify(companies))
		}
	};
}
