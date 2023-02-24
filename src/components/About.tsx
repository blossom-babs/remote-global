import Link from 'next/link';

const  About = () =>{
	return (
		<div className="about">
			<div className="about-main">
			<h1 className=''>
				Connecting African Talents to International opportunities  hiring
				globally.
			</h1>
			</div>

			<div className='about-whatWeDo'>
				<h2>❌ What this is not ❌</h2>

				<div className='about-whatWeDo-box'>
					<div className='about-whatWeDo-card'>
						<h3>Not An Agency</h3>
						<p>
							This is not an Agency for recruiting talents to jobs or companies.
							We have no affiliations to the companies shared.
						</p>
					</div>
					<div className='about-whatWeDo-card'>
						<h3>Not A Job board</h3>
						<p>
							This website contains little information about whether the
							companies are currently hiring or the roles they are hiring for.
							You would have to check the company website for more details.
						</p>
					</div>
				</div>
			</div>

			<div>
				<p>
					We exist to make your job search easier by looking at companies known
					for hiring talents globally.
				</p>
				<Link href="/pitch">Pitch a Company </Link> to be addded to the board.
			</div>

			<div>
				<h2>Stay in touch...</h2>
				<p>
					Be the first to get updates about international companies looking to
					hire global talents
				</p>

				<form action="">
					<input type="text" placeholder="First Name" />
					<input type="email" placeholder="Enter Your email" />
					<button type="submit"></button>
				</form>
			</div>
		</div>
	);
};

export default About;
