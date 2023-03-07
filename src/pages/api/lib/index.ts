import axios from 'axios';

export async function gqlFetcher(gqlQuery: string) {
	const instance = axios.create({
		timeout: 1500,
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
			'Content-Type': 'application/json',
		},
	});
	try {
		const res = await instance.post(
			(process.env?.HYGRAPH_URI as string) ||
				'https://api-us-east-1.hygraph.com/v2/cl2jezykc0li901yx24p50f8f/master',
			{
				method: 'POST',
				data: gqlQuery,
			}
		);
		console.log(res);
		return await res.data;
	} catch (err) {
		console.error(err);
	} finally {
		console.info('finally block...');
	}
}
