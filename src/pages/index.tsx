import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from "react";

import Meta from "../components/Meta";
import XTerm from "../components/XTerm";

import hero from "../public/brandon-mask.png";

export default function LandingPage<NextPage>() {
	return (
		<Fragment>
			<Meta />
			<XTerm cols={100} rows={100} />
		</Fragment>
	);
};
