import Image from 'next/image';

const LandingPage = (): JSX.Element => {
	return (
		<div className="landing-container">
			<div className="landing-text">
				<h3>Brandon C. Leek</h3>
				<h4>Full Stack Web Developer & Mobile Tech Expert</h4>
				<p>some info about me...</p>
			</div>
			<div className="landing-img">
				<Image src="some/path/to/my/image" alt="my-image" />
			</div>
		</div>
	);
};

export default LandingPage;
