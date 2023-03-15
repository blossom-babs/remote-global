// this is a protected route
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Signin() {
	const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

	<div className="about-footer-form">
		<form id="form" method="post" action="">
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
				<button type="submit">
					Join the Waitlist
				</button>
			</div>
		</form>
		{loading && <CircularProgress disableShrink color="inherit" />}
		{error && (
			<p style={{ color: 'red' }}>Error Submitting Form! Please try again.</p>
		)}
	</div>;
}
