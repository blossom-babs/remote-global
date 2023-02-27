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
						<Waitlist />
					</div>
				</Layout>
			</main>
		</>
	);
}
