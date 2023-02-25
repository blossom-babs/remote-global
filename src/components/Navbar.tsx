import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Image from 'next/image';

interface Props {
	expand: boolean;
	setExpand: Dispatch<SetStateAction<boolean>>;
}

const Navbar = () => {
	const [expand, setExpand] = useState(false);
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		const changeBg = () => {
			if (window.scrollY >= 120) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};

		window.addEventListener('scroll', changeBg);

		return () => {
			window.removeEventListener('scroll', changeBg);
		};
	}, []);

	return (
		<div className={scroll ? 'nav nav-scrollBg' : 'nav'}>
			<div className="nav-ctn">
				<div className="nav-logo">
					<Link href="/">
					{scroll ? (
						<Image
							src="/logo-white.png"
							alt="Remote Global"
							width={100}
							height={100}
						/>
					) : (
						<Image
							src="/logo-black.png"
							alt="Remote Global"
							width={100}
							height={100}
						/>
					)}
					</Link>
					<Link style={{color: scroll ? '#fff' : '#000'}} className='nav-logo-companies' href="/companies">List</Link>
				</div>

				<div className="nav-action">
					<Link style={{color: scroll ? '#fff' : '#000'}}  href="/pitch">Pitch a Global Company</Link>
					<Link href="/sign-in" className={`nav-action-signin ${scroll && 'scrollColor'}`}>
						Sign in
					</Link>
				</div>

				<Mobilenav expand={expand} setExpand={setExpand} />
			</div>
		</div>
	);
};

export const Mobilenav = ({ expand, setExpand }: Props) => {
	const toggleNav = () => setExpand(!expand);

	return (
		<div className="nav-mobile">
			<div onClick={toggleNav}>
				<MenuIcon
					style={{ paddingRight: '1rem', fontSize: '40px', cursor: 'pointer' }}
				/>
			</div>

			<div className={`nav-mobile-links ${expand ? '' : 'hide'}`}>
				<div className="nav-mobile-close" onClick={toggleNav}>
					<CancelIcon style={{ color: 'white', cursor: 'pointer' }} />
				</div>
				<ul>
					<li>
						<div className="nav-logo">
							<Link href="/" className="nav-logo-link">
								Re
							</Link>
							<h1 style={{ color: '#fff' }}>Remote Global</h1>
						</div>
					</li>
					<li>
						<Link href="/pitch">Pitch a Global Company</Link>
					</li>
					<li>
						<Link href="/sign-in" className="">
							Sign in
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
