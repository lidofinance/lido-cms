import {
  defaultErrorHandler,
  responseTimeMetric,
  wrapRequest,
} from "@lidofinance/next-api-wrapper";
import { metrics } from "features/metrics";
import { metricsFactory } from "@lidofinance/next-pages";
import { rateLimitWrapper } from "features/rateLimit";
import { serverLogger } from "shared/api/logger";

const metricsPage = metricsFactory({
  registry: metrics.registry,
});

export default wrapRequest([
  rateLimitWrapper,
  responseTimeMetric(metrics.request.apiTimings, "/api/metrics"),
  defaultErrorHandler({ serverLogger }),
])(metricsPage);
