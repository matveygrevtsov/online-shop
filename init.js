const { execSync } = require("child_process");

(async () => {
  console.log("Start init...");
  const enteringWorkspases = await execSync("git submodule foreach");
  const workspases = enteringWorkspases
    .toString()
    .replace(/Entering '/g, "")
    .replace(/'/g, "")
    .split("\n")
    .filter((item) => item !== "");

  const gitSubmoduleInit = await execSync(
    "git submodule update --init --force --remote"
  );
  console.log(gitSubmoduleInit.toString());

  console.log("Install dependencies...");

  for (let i = 0; i < workspases.length; i++) {
    const workspace = workspases[i];
    console.log("Workspace: " + workspace);
    const result = await execSync(
      "cd " + workspace + " && npm install && cd .."
    );
    console.log(result.toString());
  }

  const npmInstall = await execSync("npm install");
  console.log(npmInstall.toString());
})();
