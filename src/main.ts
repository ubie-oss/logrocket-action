import * as core from "@actions/core";
import { handler as runRelease } from "logrocket-cli/dist/commands/release";
import { handler as runUpload } from "logrocket-cli/dist/commands/upload";

async function run(): Promise<void> {
  try {
    const dryRun = core.getBooleanInput("dry-run");
    const apiKey = core.getInput("api-key", { required: true });
    const release = core.getInput("release", { required: true });
    const sourceMapDir = core.getInput("source-map-dir");
    const urlPrefix = core.getInput("url-prefix");

    core.debug(apiKey);
    if (!dryRun) {
      await runRelease({
        apikey: apiKey,
        version: release,
      });

      if (sourceMapDir) {
        await runUpload({
          apikey: apiKey,
          release: release,
          paths: sourceMapDir,
          urlPrefix: urlPrefix,
        });
      }
    }

    core.setOutput("release", release);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
