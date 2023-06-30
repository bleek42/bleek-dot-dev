import { useRef } from 'react';
import { type AppProps } from 'next/app';

import { type LayoutComponent, type MetaComponent } from '@/interfaces/Component';
import Meta from '@/components/Meta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Main } from '@/components/global/Main';

type MetaProps = MetaComponent;

const defaultMetaProps: MetaProps = {
	title: 'bleekDotDev',
	description: 'Brandon Leek: Full-Stack Web Dev',
	keywords:
		'bleek, dev brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, nj, nc, mobile, professional, tech, developer, web, development, application, software,   programming,  functional,  object,  oriented,  terminal,  react,  nodejs,  npm, rest, api, ajax, async, typeorm, relational, mapping,  knex,expressjs,  sequelize,  docker,  container,  virtual,  microsoft,  windows,  linux,  wsl,debian,  ubuntu,  arch,android,  ios,sales,  sql,mysql,  postgres,  nosql,  mongodb,  graphql,  open-source,  debugging,  solutions,  shell,  scripting,  bash,zsh,fish,hacker,  crypto,  shopify,  wordpress,  jquery,  json,music,  festivals,  volunteer,  harm,reduction,  advocacy,  management,  ambition,  business,  creator,  maintain,  skateboard,   self,improvement,  growth,  courage,  strength,  open,accepting,  detail,  team, effort',
	image: undefined,
};

export default function PageLayout(props: LayoutComponent) {
	return (
		<>
			<Meta {...defaultMetaProps} />
			<Header />
			<Main>{props.children}</Main>
			<Footer />
		</>
	);
}
