import Layout from '@/components/Layout';
import Waitlist from '@/components/Waitlist';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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
						<Waitlist />
            </div>
					</main>
				</Layout>
			</>
		</>
	);
}
