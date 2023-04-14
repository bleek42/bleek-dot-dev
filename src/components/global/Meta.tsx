import type { MetaProps } from '@prop-types/meta.props';

import Head from 'next/head';

export default function Meta({ title, description, keywords, image }: MetaProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1, width=device-width" />
			<meta name="keywords" content={keywords as string} />
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image ?? image} />
			<link
				rel="preload"
				href="/fonts/birdman/BIRDMAN_.TTF"
				as="font"
				type="font/ttf"
				crossOrigin=""
			/>
			<link
				rel="preload"
				href="/fonts/Oxanium/Oxanium-Regular.ttf"
				as="font"
				type="font/ttf"
				crossOrigin=""
			/>
			<link
				rel="preload"
				href="/fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf"
				as="font"
				type="font/ttf"
				crossOrigin=""
			/>
		</Head>
	);
}

Meta.defaultProps = {
	title: 'bleekDotDev',
	description: 'Brandon Leek - Full Stack Web Developer',
	keywords:
		'bleek, dev brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, nj, nc, mobile, professional, tech, developer, web, development, application, software,   programming,  functional,  object,  oriented,  terminal,  react,  nodejs,  npm, rest,api,ajax,async,  typeorm,  relational,  mapping,  knex,expressjs,  sequelize,  docker,  container,  virtual,  microsoft,  windows,  linux,  wsl,debian,  ubuntu,  arch,android,  ios,sales,  sql,mysql,  postgres,  nosql,  mongodb,  graphql,  open-source,  debugging,  solutions,  shell,  scripting,  bash,zsh,fish,hacker,  crypto,  shopify,  wordpress,  jquery,  json,music,  festivals,  volunteer,  harm,reduction,  advocacy,  management,  ambition,  business,  creator,  maintain,  skateboard,   self,improvement,  growth,  courage,  strength,  open,accepting,  detail,  team, effort',
	image: undefined,
};
