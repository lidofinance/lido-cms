import { collectDefaultMetrics, Registry } from "prom-client";
import { METRICS_PREFIX } from "./config";
import { RequestMetrics } from "./requestMetrics";
import { BuildInfoMetrics } from "./buildInfoMetrics";

export const metrics = new (class Metrics {
  registry = new Registry();

  request = new RequestMetrics(this.registry);
  buildInfo = new BuildInfoMetrics(this.registry);

  constructor() {
    collectDefaultMetrics({ prefix: METRICS_PREFIX, register: this.registry });
  }
})();
