export const isDev = process.env.NODE_ENV === 'development';

/** Environment variable */
export const {
  REACT_APP_API,
  REACT_APP_BASENAME,
  PUBLIC_URL,
} = process.env;
  
/** Public folder resource path */
export const PUBLIC_PATH = PUBLIC_URL.includes('//')
  ? PUBLIC_URL
  : window.location.origin + PUBLIC_URL;