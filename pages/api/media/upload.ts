import { metrics } from "features/metrics";
import {
  defaultErrorHandler,
  responseTimeMetric,
  wrapRequest,
} from "@lidofinance/next-api-wrapper";
import { reqMethodWrapper } from "utilsApi/requestMethod";
import { rateLimitWrapper } from "features/rateLimit";
import { serverLogger } from "shared/api/logger";

const handler: any = async (req: any, res: any) => {
  res.status(200).json({
    test: "hello",
  });
};

export default wrapRequest([
  reqMethodWrapper(["POST"]),
  rateLimitWrapper,
  responseTimeMetric(metrics.request.apiTimings, "/api/media/upload"),
  defaultErrorHandler({ serverLogger }),
])(handler);
