import Head from "next/head";
import { Fragment } from "react";

type Title = "bleekDotDev" | "bleek.dev";

enum KEYWORDS {
	bleek = "bleek",
	dev = "dev",
	brandon = "brandon",
	leek = "leek",
	js = "js",
	ts = "ts",
	javascript = "javascript",
	typescript = "typescript",
	html = "html",
	css = "css",
	engineer = "engineer",
	usa = "usa",
	nj = "nj",
	nc = "nc",
	mobile = "mobile",
	professional = "professional",
	tech = "tech",
	developer = "developer",
	web = "web",
	development = "development",
	application = "application",
	software = "software",
	programming = "programming",
	functional = "functional",
	object = "object",
	oriented = "oriented",
	terminal = "terminal",
	react = "react",
	nodejs = "nodejs",
	npm = "npm",
	rest = "rest",
	api = "api",
	ajax = "ajax",
	async = "async",
	typeorm = "typeorm",
	relational = "relational",
	mapping = "mapping",
	knex = "knex",
	expressjs = "expressjs",
	sequelize = "sequelize",
	docker = "docker",
	container = "container",
	virtual = "virtual",
	microsoft = "microsoft",
	windows = "windows",
	linux = "linux",
	wsl = "wsl",
	debian = "debian",
	ubuntu = "ubuntu",
	arch = "arch",
	android = "android",
	ios = "ios",
	sales = "sales",
	sql = "sql",
	mysql = "mysql",
	postgres = "postgres",
	nosql = "nosql",
	mongodb = "mongodb",
	graphql = "graphql",
	opensource = "open-source",
	debugging = "debugging",
	solutions = "solutions",
	shell = "shell",
	scripting = "scripting",
	bash = "bash",
	zsh = "zsh",
	fish = "fish",
	hacker = "hacker",
	crypto = "crypto",
	shopify = "shopify",
	wordpress = "wordpress",
	jquery = "jquery",
	json = "json",
	music = "music",
	festivals = "festivals",
	volunteer = "volunteer",
	harm = "harm",
	reduction = "reduction",
	advocacy = "advocacy",
	management = "management",
	ambition = "ambition",
	business = "business",
	creator = "creator",
	maintain = "maintain",
	skateboard = "skateboard",
	neuro = "neuro",
	divergent = "divergent",
	self = "self",
	improvement = "improvement",
	growth = "growth",
	courage = "courage",
	strength = "strength",
	open = "open",
	accepting = "accepting",
	detail = "detail",
	team = "team",
	effort = "effort",
}

type MetaProps = JSX.IntrinsicElements["meta"] & {
	title: Title;
	description: string;
	keywords: keyof KEYWORDS | keyof KEYWORDS[];
	image?: string;
};

const Meta = ({
	title,
	description,
	keywords,
	image,
}: MetaProps): JSX.Element => {
	return (
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1, width=device-width"
			/>
			<meta
				name="keywords"
				content={Array.isArray(keywords) ? keywords.join("") : keywords}
			/>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image ? image : undefined} />
		</Head>
	);
};

Meta.defaultProps = {
	title: "bleek.tech",
	description: "Brandon Leek - Full Stack Developer",
	keywords:
		"web development, application development, software, programming, html, css, javascript, react, node.js, sql, typescript",
	image: undefined,
};

export default Meta;
