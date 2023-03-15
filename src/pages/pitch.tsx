import Layout from '@/components/Layout';
import Head from 'next/head';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface FormData {
	companyName: string;
	website: string;
	location: string;
}

export default function Pitch() {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const [form, setForm] = useState<FormData>({
		companyName: '',
		website: '',
		location: ''
	});

	const clickSubmit = () => {
		setError(false);
		setLoading(true);
	};

	const updateInput = (e: { target: { name: any; value: any } }) => {
		const { name, value } = e.target;
		setForm((prevVal) => {
			return {
				...prevVal,
				[name]: value
			};
		});
		setError(false);
		setSuccess(false);
	};

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		try {
			fetch('http://localhost:3000/api/pitch', {
				body: JSON.stringify(form),
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST'
			}).then((res) => {
				console.log(res);
				setForm({ companyName: '', website: '', location: '' });
				if (res.status === 200) setSuccess(true);
				if (res.status === 404 || res.status === 500) setError(true);
				setLoading(false);
			});
		} catch (error) {
			console.log(error);
			if (error) setError(true);
		}
	};

	return (
		<>
			<Head>
				<title>Pitch a company hiring globally</title>
			</Head>
			<Layout>
				<div className="pitch">
					<div className="pitch-wrapper">
						<h1>
							Know a company hiring globally? <br />
							Pitch them
						</h1>
						<div className="pitch-form">
							{success && <SuccessMessage />}

							{loading && <CircularProgress disableShrink color="primary" />}

							<form onSubmit={handleSubmit} id="form" method="post" action="">
								<div>
									<input
										onChange={updateInput}
										value={form.companyName}
										type="text"
										name="companyName"
										placeholder="Company Name"
									/>
								</div>
								<div>
									<input
										onChange={updateInput}
										value={form.website}
										type="text"
										name="website"
										placeholder="Website: https://website.com"
									/>
								</div>
								<div>
									<input
										onChange={updateInput}
										value={form.location}
										type="text"
										name="location"
										placeholder="Location: Rwanda"
									/>
								</div>
								<div>
									<button onClick={clickSubmit} type="submit">
										Pitch
									</button>
								</div>
							</form>

							{error && (
								<p style={{ color: 'red' }}>
									Error Submitting Form! Please try again.
								</p>
							)}
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export const SuccessMessage = () => {
	return (
		<div className="about-whatWeDo-card pitch-success">
			<h1 style={{ fontSize: '1rem' }}>Success!</h1>
			<p>Thank you for pitching. Pitch Another?</p>
		</div>
	);
};
