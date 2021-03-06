import * as process from "process";
import * as cp from "child_process";
import * as path from "path";
import { test } from "@jest/globals";

// shows how the runner will run a javascript action with env / stdout protocol
test("test runs", () => {
  process.env["INPUT_RELEASE"] = "v0.1.0";
  process.env["INPUT_API-KEY"] = "fake-key";
  process.env["INPUT_DRY-RUN"] = "true";
  const np = process.execPath;
  const ip = path.join(__dirname, "..", "lib", "main.js");
  const options: cp.ExecFileSyncOptions = {
    env: process.env,
  };
  console.log(cp.execFileSync(np, [ip], options).toString());
});
