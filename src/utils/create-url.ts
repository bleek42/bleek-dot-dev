export default function createURLInstance(url: string): URL | never {
  try {
    const instance = new URL(url);
    return instance ?? instance;
  // eslint-disable-next-line prettier/prettier
  }
  catch (err) {
    throw err;
  }
}
