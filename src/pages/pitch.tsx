import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Pitch() {
	return (
		<>
			<Head>
				<title>Pitch a company hiring globally</title>
			</Head>
			<>
				<Layout>
					<div className="pitch">
						<h1>Pitch a global company</h1>
						<div className="about-footer-form">
					<form onSubmit={handleSubmit} id="form" method="post" action="">
						<div>
							<input
								onChange={() => setError(false)}
								type="text"
								name="FirstName"
								placeholder="First Name"
							/>
						</div>
						<div>
							<input
								onChange={() => setError(false)}
								type="email"
								name="Email"
								placeholder="Enter Your email"
							/>
						</div>
						<div>
							<button onClick={clickSubmit} type="submit">
								Join the Waitlist
							</button>
						</div>
					</form>
					{loading && <CircularProgress disableShrink color="inherit" />}
					{error && (
						<p style={{ color: 'red' }}>
							Error Submitting Form! Please try again.
						</p>
					)}
				</div>
					</div>
				</Layout>
			</>
		</>
	);
}
