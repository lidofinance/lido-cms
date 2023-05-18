import { RequestWrapper } from "@lidofinance/next-api-wrapper";

export type RequestMethod =
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PUT"
  | "POST"
  | "DELETE";

export const reqMethodWrapper =
  (methods: RequestMethod[]): RequestWrapper =>
  async (req, res, next) => {
    if (
      req.method == null ||
      methods.find((method) => method === req.method) == null
    ) {
      res.status(404).send("");
      return;
    }

    await next?.(req, res, next);
  };
