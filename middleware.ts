import { cacheControlMiddlewareFactory } from "@lidofinance/next-cache-files-middleware";

export const CACHE_HEADERS_HTML_PAGE = `public, max-age=300, stale-if-error=1200, stale-while-revalidate=30`;

export const CACHE_ALLOWED_LIST_FILES_PATHS = [
  { path: /content\/(.*)/, headers: CACHE_HEADERS_HTML_PAGE },
];

// use only for cache files
export const middleware = cacheControlMiddlewareFactory(
  CACHE_ALLOWED_LIST_FILES_PATHS,
);

export default middleware;
