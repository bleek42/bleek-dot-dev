export function createURLInstance(url: string): URL | never {
  try {
    const instance = new URL(url);
    return instance ?? instance;
    // eslint-disable-next-line prettier/prettier
  } catch {
    throw Error('error creating new URL...');
  }
}
