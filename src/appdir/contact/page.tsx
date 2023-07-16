import React, { Fragment, useId } from 'react';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { Main } from '@/components/common/Main';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

// import { useRequest } from '../hooks/useRequest';

export default function Page() {
	// const { profile, loading, error, msg } = useRequest();
	// const pageId = useId();

	return (
		<>
			<Header id={`contactpage-footer_${3}`} name="contact" title="Contact">
				<Navbar />
			</Header>
			<Main>
				<Section>
					<h4>
						Contact <i>`${' \udb80\udd7b '}`</i>{' '}
					</h4>
					<address>
						<ul>
							<li>
								<a href="mailto:brandonleek42@bleek.dev">Email</a>
							</li>
							<li>
								<a>Discord</a>
							</li>
							<li>
								<a>Slack</a>
							</li>
						</ul>
					</address>
				</Section>
				<Section>
					<h4>
						LinkedIn <i>`${' \uf08c '}`</i>{' '}
					</h4>
					<a
						id="my-linkedin"
						href="https://www.linkedin.com/in/brandon-leek-4031891a4/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Click here to view my LinkedIn!
					</a>
				</Section>
				<Section className="github">
					<h4>
						Github <i>`${'\uf092'}`</i>{' '}
					</h4>
					<a
						id="my-github"
						href="https://github.com/bleek42"
						target="_blank"
						rel="noopener noreferrer"
					>
						Click here to view my GitHub!
					</a>
				</Section>
			</Main>
			<Footer id={`contactpage-footer_${3}`} name="Contact" icon={null} />
		</>
	);
}

// {
// }
// 					{/* {loading && <p>Loading profile data...</p>}
// 					{profile && (
// 						<ul>
// 							<li>Total Repos: {profile.public_repos}</li>
// 							<li>Total Followers: {profile.followers}</li>
// 							<li>Total Followiing: {profile.following}</li>
// 						</ul>
// 					)}
// 					{error && <p>Error fetching profile data: {msg.toString()}</p>} */}

// {
// 	/* <header>
// 				<h4>{<VscCommentDiscussion />} Contact</h4>
// 				<p>
// 					Whether you're about to make me an offer I can't refuse, thinking
// 					about becoming a developer, or somewhere in between: I'd love to
// 					connect if you're taking the time to read this! Please reach out on
// 					LinkedIn or GitHub.
// 				</p>
// 			</header> */
// }

// {
// 	/* {loading && (
// 					<div className="loading">
// 						<progress>loading...</progress>
// 					</div>
// 				)}
// 				{!loading && !error && profile && <List {...profile} />}
// 				{error && (
// 					<div className="error">
// 						<p>
// 							Error fetching profile data:{' '}
// 							{msg?.toString() || 'an unknown error occurred...'}
// 						</p>
// 					</div>
// 				)} */
// }
