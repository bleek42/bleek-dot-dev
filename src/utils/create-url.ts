export default function createURL(url: string): URL | null {
  try {
    const instance = new URL(url);
    return instance ?? null;
    // eslint-disable-next-line prettier/prettier
  } catch {
    throw Error('error creating URL instance...');
  }
}
