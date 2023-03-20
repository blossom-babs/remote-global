import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { prisma } from 'lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Dialog from '@mui/material/Dialog';
import { ButtonUnstyled } from '@mui/base';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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

export default function Admin({ companies }: Companies) {
	const [data, setData] = useState(null);
	const [open, setOpen] = useState(false);

	const handleClickOpen = (id: string) => {
		setOpen(true);
		localStorage.setItem('company', id);
	};

	const handleClose = () => {
		setOpen(false);
	};

	//useEffect(() => setData(companies), [])
	return (
		<>
			<Layout>
				<div className="admin">
					<>{open && <ModalBox open={open} handleClose={handleClose} />}</>
					<div style={{ overflowX: 'auto' }}>
						<table className="table">
							<thead>
								<tr className="table-header">
									<th>Company</th>
									<th>Website</th>
									<th className="table-size">Size</th>
									<th>Location</th>
									<th></th>
								</tr>
							</thead>

							<tbody>
								{companies.map((data) => (
									<tr key={data.id} className="table-companyList">
										<td>
											<img
												src={data.companyLogo}
												width={30}
												height={30}
												alt={data.companyName}
											/>
											<p> {data.companyName}</p>
										</td>
										<td className="table-link">
											<Link
												href={data.website}
												target="_blank"
												rel="noopener noreffer">
												{data.website}
												<span>
													<OpenInNewIcon />
												</span>
											</Link>
										</td>
										<td className="table-size">{data.companySize}</td>
										<td>{data.location}</td>
										<td>
											<button onClick={() => handleClickOpen(data.id)}>
												<RemoveRedEyeIcon />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</Layout>
		</>
	);
}

export const ModalBox = (props: any) => {
	const [company, setCompany] = useState();

	const companyId = localStorage.getItem('company') as string;
	const url = 'http://localhost:3000'

	async function getNote(id: string) {
		try {
			fetch(`http://localhost:3000/api/company/${id}`, {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'GET'
			})
				.then((response) => response.json())
				.then((data) => {
					setCompany(data)
				});
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getNote(companyId);
	}, []);

	const compId = localStorage.getItem('company');
	console.log(compId);
	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<DialogTitle id="alert-dialog-title">
				{"Use Google's location service?"}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{company && company['companyName']}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<button onClick={props.handleClose}>Disagree</button>
				<button onClick={props.handleClose} autoFocus>
					Agree
				</button>
			</DialogActions>
		</Dialog>
	);
};

export async function getServerSideProps() {
	const companies = await prisma.company.findMany();

	return {
		props: {
			companies: JSON.parse(JSON.stringify(companies))
		}
	};
}
