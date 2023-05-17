import { type BaseComponent } from '@/interfaces/BaseComponent.ts';
import { GraphQLError } from 'graphql';

import StyledProvider from '@/lib/StyledProvider';
import { MetaHTMLAttributes } from 'react';

type MetaProps = MetaHTMLAttributes<Pick<BaseComponent<'root-layout-0'>, 'children'>>;

export default function RootLayout({ children }: MetaProps) {
	const defaultMeta = {
		id: 'root-layout-0',
		title: 'bleekDotDev',
		description: 'Brandon Leek - Full Stack Web Developer',
		keywords:
			'bleek, dev brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, nj, nc, mobile, professional, tech, developer, web, development, application, software,   programming,  functional,  object,  oriented,  terminal,  react,  nodejs,  npm, rest,api,ajax,async,  typeorm,  relational,  mapping,  knex,expressjs,  sequelize,  docker,  container,  virtual,  microsoft,  windows,  linux,  wsl,debian,  ubuntu,  arch,android,  ios,sales,  sql,mysql,  postgres,  nosql,  mongodb,  graphql,  open-source,  debugging,  solutions,  shell,  scripting,  bash,zsh,fish,hacker,  crypto,  shopify,  wordpress,  jquery,  json,music,  festivals,  volunteer,  harm,reduction,  advocacy,  management,  ambition,  business,  creator,  maintain,  skateboard,   self,improvement,  growth,  courage,  strength,  open,accepting,  detail,  team, effort',
		icon: undefined,
	};

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta name="keywords" content={defaultMeta.keywords} />
				<meta name="description" content={defaultMeta.description} />
				<meta property="og:title" content={defaultMeta.title} />
				<meta property="og:icon" content={defaultMeta.icon} />
				<link
					rel="preload"
					href="/fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf"
					as="font"
					type="font/ttf"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="public/fonts/birdman/BIRDMAN_.TTF"
					as="font"
					type="font/ttf"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="public/fonts/Oxanium/Oxanium-Regular.ttf"
					as="font"
					type="font/ttf"
					crossOrigin=""
				/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>bleekDotDev</title>
			</head>
			<body>
				<StyledProvider>{children}</StyledProvider>
			</body>
		</html>
	);
}

{
	/* <QueryClientProvider client={ref.current}> */
	{
		/* </QueryClientProvider> */
	}
}
