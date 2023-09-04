import PageSection from '@/components/PageSection';
import { type SectionComponent } from '@/interfaces/Component';
import { type NextPage } from 'next';
// export type ContactRecord = Record<
// 	'email' | 'linkedin' | 'github' | string | symbol,
// 	{ 'icon': string; 'text': string }
// >;

type ContactProps = SectionComponent;
export default function Contact(props: ContactProps) {
	// const { profile, loading, error, msg } = useRequest()

	return (
		<PageSection
			name={props.name}
			description={props.description}
			content={props.content}
			icons={props.icons}
		/>
	);
}

Contact.defaultProps = {
	name: 'contact',
	description: 'contact section',
	content: [
		'brandonleek42@yahoo.com',
		'https://linkedin.com/in/brandonl42',
		'https://github.com/bleek42',
	],
	icons: [' \uf42f ', ' \uf08c ', ' \ue708 '],
};



/* <Header id={`contact-header-${pageId}`} name="contact" title="Contact" /> */

/* {loading && (
				<div className="loading">
					<progress>loading...</progress>
				</div>
			)}
			{!loading && !error && profile && <List {...profile} />}
			{error && (
				<div className="error">
					<p>
						Error fetching profile data:{' '}
						{msg?.toString() || 'an unknown error occurred...'}
					</p>
				</div>
		<PageLayout>
		</PageLayout>
			)} */

/* <Footer id={`contact-footer-${pageId}`} name="Contact" icon={null} /> */
// }
// {
/* <section className="linkedin">
				<h4>{<GrLinkedin />} LinkedIn</h4>
				<a
					id="my-linkedin"
					href="https://www.linkedin.com/in/brandon-leek-4031891a4/"
					target="_blank"
					rel="noopener noreferrer">
					Click here to view my LinkedIn!
				</a>
			</section>
			<section className="github">
				<h4>{<FiGithub />} Github</h4>
				<a
					id="my-github"
					href="https://github.com/bleek42"
					target="_blank"
					rel="noopener noreferrer">
					Click here to view my GitHub!
				</a>
				{loading && <p>Loading profile data...</p>}
				{profile && (
					<ul>
						<li>Total Repos: {profile.public_repos}</li>
						<li>Total Followers: {profile.followers}</li>
						<li>Total Followiing: {profile.following}</li>
					</ul>
				)}
				{error && <p>Error fetching profile data: {msg.toString()}</p>}
			</section> */

/* <header>
				<h4>{<VscCommentDiscussion />} Contact</h4>
				<p>
					Whether you're about to make me an offer I can't refuse, thinking
					about becoming a developer, or somewhere in between: I'd love to
					connect if you're taking the time to read this! Please reach out on
					LinkedIn or GitHub.
				</p>
			</header> */
