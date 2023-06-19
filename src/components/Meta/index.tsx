import { type MetaComponent } from '@/interfaces/Component';

import Head from 'next/head';

type MetaProps = MetaComponent;
export default function Meta({ title, description, keywords, image }: MetaProps) {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1, width=device-width" />
			<meta
				name="keywords"
				content={Array.isArray(keywords) ? keywords.join(' ') : keywords}
			/>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image?.toString()} />
			<title>{title}</title>
		</Head>
	);
}

Meta.defaultProps = {
	title: 'bleekDotDev',
	description: 'Brandon Leek: Full-Stack Web Dev',
	keywords:
		'bleek, dev brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, nj, nc, mobile, professional, tech, developer, web, development, application, software,   programming,  functional,  object,  oriented,  terminal,  react,  nodejs,  npm, rest, api, ajax, async, typeorm, relational, mapping,  knex,expressjs,  sequelize,  docker,  container,  virtual,  microsoft,  windows,  linux,  wsl,debian,  ubuntu,  arch,android,  ios,sales,  sql,mysql,  postgres,  nosql,  mongodb,  graphql,  open-source,  debugging,  solutions,  shell,  scripting,  bash,zsh,fish,hacker,  crypto,  shopify,  wordpress,  jquery,  json,music,  festivals,  volunteer,  harm,reduction,  advocacy,  management,  ambition,  business,  creator,  maintain,  skateboard,   self,improvement,  growth,  courage,  strength,  open,accepting,  detail,  team, effort',
	image: undefined,
};
