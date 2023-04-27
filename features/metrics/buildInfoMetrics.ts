import { Gauge, Registry } from "prom-client";
import { METRICS_PREFIX } from "./config";
import buildInfoJson from "build-info.json";

export class BuildInfoMetrics {
  buildInfo: Gauge<"version" | "commit" | "branch">;

  constructor(public registry: Registry) {
    this.buildInfo = new Gauge({
      name: METRICS_PREFIX + "build_info",
      help: "Version, branch and commit of the current build",
      labelNames: ["version", "commit", "branch"],
      registers: [registry],
    });
    const { version, commit, branch } = buildInfoJson;
    this.buildInfo.labels(version, commit, branch).set(1);
  }
}
