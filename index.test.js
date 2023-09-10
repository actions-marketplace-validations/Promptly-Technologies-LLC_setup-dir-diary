const core = require('@actions/core');
const exec = require('@actions/exec');
const run = require('./index');

jest.mock('@actions/core');
jest.mock('@actions/exec');

describe('Setup pseudocode-summarizer', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Installs Python when install-python is true', async () => {
    core.getInput.mockReturnValueOnce('true');

    await run();

    expect(exec.exec).toHaveBeenCalledWith('sudo apt-get update');
    expect(exec.exec).toHaveBeenCalledWith('sudo apt-get install python3.11');
  });

  it('Does not install Python when install-python is false', async () => {
    core.getInput.mockReturnValueOnce('false');

    await run();

    expect(exec.exec).not.toHaveBeenCalledWith('sudo apt-get update');
    expect(exec.exec).not.toHaveBeenCalledWith('sudo apt-get install python3.11');
  });

  it('Checks Python version', async () => {
    core.getInput.mockReturnValueOnce('false');
    exec.exec.mockImplementationOnce((cmd, args, opts) => {
      opts.listeners.stdout(Buffer.from('Python 3.9.0'));
    });

    await run();

    expect(exec.exec).toHaveBeenCalledWith('python --version', [], expect.anything());
  });

  it('Installs pseudocode-summarizer', async () => {
    core.getInput.mockReturnValueOnce('false');

    exec.exec.mockImplementation((cmd, args, opts) => {
      if (cmd === 'python --version') {
        opts.listeners.stdout(Buffer.from('Python 3.9.0'));
      }
    });

    await run();

    // Check all calls to exec.exec and find if any match the expected command
    const wasCalledWithExpectedCommand = exec.exec.mock.calls.some(
      (call) => call[0] === 'pip install pseudocode-summarizer'
    );

  expect(wasCalledWithExpectedCommand).toBe(true);
  });
});
