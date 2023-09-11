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

    // Check Python version is greater than 3.8
    let versionOutput = '';
    const options = {};
    options.listeners = {
      stdout: (data) => {
        versionOutput += data.toString();
      },
    };
    await exec.exec('python --version', [], options);

    const versionMatch = versionOutput.match(/\d+\.\d+/);
    if (versionMatch) {
      const version = parseFloat(versionMatch[0]);
      if (version < 3.8) {
        core.setFailed(`Python version ${version} is less than 3.8.`);
        return;
      }
    } else {
      core.setFailed('Failed to determine Python version.');
      return;
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
