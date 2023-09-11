const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const installPython = core.getInput('install-python') === 'true';

    if (installPython) {
      // Install Python 3.11
      await exec.exec('sudo apt-get update');
      await exec.exec('sudo apt-get install python3.11');
    }

    // Install dir-diary
    await exec.exec('pip install dir-diary');
  } catch (error) {
    core.setFailed(error.message);
  }
}

// Export for testing
module.exports = run;

// Run the function if this script is the main module
if (require.main === module) {
  run();
}
