// import Layout from '@/components/Layout';
// import * as React from 'react';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { prisma } from 'lib/prisma';

// const columns: GridColDef[] = [
// 	{ field: 'companyLogo', headerName: 'Logo', width: 130 },
// 	{ field: 'companyName', headerName: 'Name', width: 130 },
// 	{ field: 'location', headerName: 'location', width: 130 },
// 	{ field: 'size', headerName: 'size', width: 90 }
// ];

// interface Companies {
// 	companies: {
// 		id: string;
// 		companyName: string;
// 		companyLogo: string;
// 		website: string;
// 		about: string;
// 		companySize: string;
// 		approved: boolean;
// 		location: string;
// 	}[];
// }

// export default function Admin({ companies }: Companies) {
// 	return (
// 		<>
// 			<Layout>
// 				<div className="admin">
// 					<h1>this is a protected route</h1>

// 					<div style={{ height: 400, width: '100%' }}>
// 						<DataGrid
// 							rows={}
// 							columns={columns}
// 							pageSize={5}
// 							rowsPerPageOptions={[5]}
// 							checkboxSelection
// 						/>
// 					</div>
// 				</div>
// 			</Layout>
// 		</>
// 	);
// }

// export async function getServerSideProps() {
// 	const companies = await prisma.company.findMany();

// 	return {
// 		props: {
// 			companies: JSON.parse(JSON.stringify(companies))
// 		}
// 	};
// }

export default function Admin() {
	return (
		<>
			<h1>the header page</h1>
		</>
	);
}
