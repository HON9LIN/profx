export const ROUTES = {
  dashboard: {
    root: 'dashboard',
  },
};

export function toAbsolutePath(path: string | string[]) {
  // this function accepts string or string array
  // CAUTION! - be aware, send only valid array or string
  if (typeof path === 'string') {
    return '/' + path;
  } else {
    return '/' + path.join('/');
  }
}
