import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportIcon from '@mui/icons-material/Report';
import CircularProgress from '@mui/material/CircularProgress';

const Waitlist = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const clickSubmit = () => {
		setError(false);
		setLoading(true);
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const formElement = document.querySelector('#form') as HTMLFormElement;
		const formData = new FormData(formElement);
		fetch(process.env.NEXT_PUBLIC_FORM_URL as string, {
			method: 'POST',
			body: formData
		})
			.then((res) => {
				console.log(res);
				if (res.status === 200) setSuccess(true);
				if (res.status === 404) {
					setError(true);
					setLoading(false);
				}
			})
			.catch((err) => {
				console.log(err);
				if (err) setError(true);
			});
	};

	return (
		<div id="join-the-waitlist" className="">
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
			)}
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

export default Waitlist;
