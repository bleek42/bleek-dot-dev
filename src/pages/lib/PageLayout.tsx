import { Fragment, useId } from 'react';

import { type LayoutComponent, type MetaComponent } from '@/interfaces/Component';
import { MainPage, MonocraftNF } from '@/components/common';
import Meta from '@/components/Meta';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';

type MetaProps = MetaComponent;

const defaultMetaProps: MetaProps = {
	title: 'bleekDotDev',
	description: 'Brandon Leek: Full-Stack Web Dev',
	keywords:
		'bleek, dev brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, nj, nc, mobile, professional, tech, developer, web, development, application, software,   programming,  functional,  object,  oriented,  terminal,  react,  nodejs,  npm, rest, api, ajax, async, typeorm, relational, mapping,  knex,expressjs,  sequelize,  docker,  container,  virtual,  microsoft,  windows,  linux,  wsl,debian,  ubuntu,  arch,android,  ios,sales,  sql,mysql,  postgres,  nosql,  mongodb,  graphql,  open-source,  debugging,  solutions,  shell,  scripting,  bash,zsh,fish,hacker,  crypto,  shopify,  wordpress,  jquery,  json,music,  festivals,  volunteer,  harm,reduction,  advocacy,  management,  ambition,  business,  creator,  maintain,  skateboard,   self,improvement,  growth,  courage,  strength,  open,accepting,  detail,  team, effort',
	image: undefined,
	icon: '\ue553',
	locale: 'en_US',
};

export default function PageLayout(props: LayoutComponent) {
	const pageId = useId();
	return (
		<Fragment>
			<Meta {...defaultMetaProps} />
			<PageHeader id={pageId} />
			<MainPage>{props.children}</MainPage>
			<PageFooter />
		</Fragment>
	);
}
