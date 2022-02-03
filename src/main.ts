import * as core from "@actions/core";

async function run(): Promise<void> {
  try {
    // const apiKey = core.getInput("api-key");
    const release = core.getInput("release");
    // const sourceMapDir = core.getInput("source-map-dir");
    // const urlPrefix = core.getInput("url-prefix");

    core.setOutput("release", release);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
