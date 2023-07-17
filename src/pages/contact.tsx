import { useId } from 'react';

import PageLayout from '@/pages/lib/PageLayout';

import Section from '@/components/Section';

export default function Contact() {
	// const { profile, loading, error, msg } = useRequest()

	const linkedInIcon = ' \uf08c ';
	const commentIcon = ' \udb80\udd7b ';
	const githubIcon = ' \uf092 ';

	return (
		<Section
			name="Email"
			description={'contact section description'}
			content={'contact section content'}
			icon={commentIcon}
		/>
	);
}

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
