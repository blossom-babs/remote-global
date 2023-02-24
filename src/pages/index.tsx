import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="home">
				<Layout>
					<div className="home-content">
						<h1>Something else</h1>
					</div>
				</Layout>
			</main>
		</>
	);
}
