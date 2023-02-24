import Link from 'next/link';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportIcon from '@mui/icons-material/Report';
import CircularProgress from '@mui/material/CircularProgress';

const About = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const formElement = document.querySelector('#form') as HTMLFormElement;
		const formData = new FormData(formElement);

		fetch(
			'https://script.google.com/macros/s/AKfycbxAJjPI6YorvCvj_sWg-nK6gF0SYZjVWT5_-nmDrfNzPfoz6GYzAAf_74HqBWlldFHN/exec',
			{
				method: 'POST',
				body: formData
			}
		)
			.then((res) => {
				console.log(res);
				if (res.status === 200) setSuccess(true);
			})
			.catch((err) => {
				console.log(err);
				if (err) setError(true);
			});
	};

	return (
		<div className="about">
			<div className="about-main">
				<h1 className="">
					Connecting African Talents to International companies hiring globally.
				</h1>
			</div>

			<div className="about-whatWeDo">
				<h2>❌ What this is Not ❌</h2>

				<div className="about-whatWeDo-box">
					<div className="about-whatWeDo-card">
						<div>
							<ReportIcon />
						</div>
						<h3>An Agency</h3>
						<p>
							This is not an Agency for recruiting talents to jobs or companies.
							We have no affiliations to the companies shared.
						</p>
					</div>
					<div className="about-whatWeDo-card">
						<div>
							<ReportIcon />
						</div>
						<h3>A Job board</h3>
						<p>
							This website contains little information about whether the
							companies are currently hiring or the roles they are hiring for.
							You would have to check the company website for more details.
						</p>
					</div>
				</div>
			</div>

			<div className="about-why">
				<p>
					We exist to make your job search easier by curating a list of
					companies known for hiring talents globally.
				</p>
				<h3>Know a company hiring globally?</h3>
				<p className="about-why-pitch">
					<Link href="/pitch">Pitch them </Link>
				</p>
			</div>

			<div id="join-the-waitlist" className="about-footer">
				<h2>Stay in touch...</h2>
				<p>
					Be the first to get updates about international companies looking to
					hire global talents
				</p>

				{success ? (
					<SuccessMessage />
				) : (
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
								<button onClick={() => setLoading(true)} type="submit">
									Join the Waitlist
								</button>
							</div>
						</form>
						{loading && <CircularProgress disableShrink color='inherit' />}
						{error && (
							<p style={{ color: 'red' }}>
								Error Submitting Form! Please try again.
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export const SuccessMessage = () => {
	return (
		<div className="about-whatWeDo-card about-success">
			<div>
				<CheckCircleIcon />
			</div>
			<h1>Success!</h1>
			<p>You will be the first to be notified of global opportunities.</p>
		</div>
	);
};

export default About;
