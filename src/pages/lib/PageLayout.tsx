import { Fragment, useId } from 'react';

import { type LayoutComponent, type MetaComponent } from 'src/interfaces/Component';
// import { MainPage, MonocraftNF } from '@/components/common';
import Meta from '@/components/Meta';
import PageHeader from '@/components/PageHeader';
import { MainPage } from '@/components/common';
import PageFooter from '@/components/PageFooter';

let defaultMetaProps: MetaComponent = {
	title: 'bleekDotDev',
	description: 'Brandon Leek: Full-Stack Web Dev',
	keywords:
		'bleek, dev brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, nj, nc, mobile, professional, tech, developer, web, development, application, software,   programming,  functional,  object,  oriented,  terminal,  react,  nodejs,  npm, rest, api, ajax, async, typeorm, relational, mapping,  knex,expressjs,  sequelize,  docker,  container,  virtual,  microsoft,  windows,  linux,  wsl,debian,  ubuntu,  arch,android,  ios,sales,  sql,mysql,  postgres,  nosql,  mongodb,  graphql,  open-source,  debugging,  solutions,  shell,  scripting,  bash,zsh,fish,hacker,  crypto,  shopify,  wordpress,  jquery,  json, music,  festivals,  volunteer,  harm,reduction,  advocacy,  management,  ambition,  business,  creator,  maintain,  skateboard,   self,improvement,  growth,  courage,  strength,  open,accepting,  detail,  team, effort',
	icons: '\ue553',
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
