import { ReactNode } from 'react';
import Navbar from './Navbar';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
