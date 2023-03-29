import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from "react";

import Meta from '@global/Meta';
import XTerm from '@components/XTerm';

import hero from "../public/brandon-mask.png";

export default function LandingPage() {
	return (
		<>
			<Meta />
			<XTerm cols={100} rows={100} />
		</>
	);
};
