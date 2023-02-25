import Link from 'next/link';
import ReportIcon from '@mui/icons-material/Report';
import Waitlist from './Waitlist';

const About = () => {
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

			<Waitlist />
		</div>
	);
};

export default About;
