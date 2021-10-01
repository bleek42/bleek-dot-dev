import Section from '../components/Section';
import NavMenu from '../components/NavMenu';

const About = (): JSX.Element => {
	return (
    <div className="container">
      <div className="menu">
        <NavMenu />
        </div>
			<Section name="about" />
		</div>
	);
};

export default About;
