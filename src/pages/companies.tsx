import Layout from '@/components/Layout';
import Waitlist from '@/components/Waitlist';
import MultipleSelectChip from '@/components/MultiSelectComp';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import GridViewIcon from '@mui/icons-material/GridView';
export default function Companies() {
	// 2 kind of views - grid and list
	return (
		<>
			<Head>
				<title>International Companies hiring globally</title>
			</Head>
			<>
				<Layout>
					<main className="companies">
						<div className="companies-waitlist">
							<header className='companies-header'>
								<MultipleSelectChip />

								<div>
<GridViewIcon/>
									<TableRowsIcon/>
								</div>
							</header>
							<Waitlist />
						</div>
					</main>
				</Layout>
			</>
		</>
	);
}
