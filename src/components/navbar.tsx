import Link from 'next/link';

const Navbar = () => {
	return (
		<div className="nav">
			<div className="nav-logo">
				<Link href="/" className='nav-logo-link'>Re</Link>
				<h1>Remote Global</h1>
			</div>

			<div className='nav-action'>
				<Link href="/pitch">Pitch a Global Company</Link>
				<Link href="/sign-in" className="nav-action-signin">Sign in</Link>
			</div>
		</div>
	);
};

export default Navbar;
