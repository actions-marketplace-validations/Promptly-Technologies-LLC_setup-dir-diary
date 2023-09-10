# setup-pseudocode-summarizer

<p align="center">
  <a href="https://github.com/actions/javascript-action/actions"><img alt="javscript-action status" src="https://github.com/actions/javascript-action/workflows/units-test/badge.svg"></a>
</p>

This Github Action installs the [pseudocode-summarizer CLI tool](https://github.com/Promptly-Technologies-LLC/pseudocode-summarizer), which queries OpenAI's GPT-3.5-Turbo Large Language Model (LLM) for the purpose of generating a comprehensive pseudocode summary of the code in your project folder. A comprehensive pseudocode summary makes your project easier to grasp at a glance, and can also be embedded in a vector database or dumped into context when working with an LLM. 

With the `setup-pseudocode-summarizer` action, you can update your project summary on every push or at regular intervals as part of a CI/CD workflow or automation pipeline. Thanks to the low cost of GPT-3.5-Turbo, the workflow costs pennies to run even if you've made substantial changes to your project (and little or nothing if you haven't).

## Usage

To use the action in a Github Actions script, reference the stable v1 branch:

```yaml
uses: actions/setup-pseudocode-summarizer@v1
with:
  install-python: 'true'
```

Note that Python 3.8 or higher is required to install the pseudocode-summarizer tool. This action will handle pre-installation of Python 3.11 for you if you set the `install-python` option to `true`. If the option is set to `false`, you will need to install Python 3.8 or higher as a separate step before running this action.

## Contributing

### Development

To install the dependencies, use:

```bash
npm install
```

Make changes on a development branch, run lint/build/test pipeline with `npm run all`. If all tests pass, open a pull request from `main`.

### Create a release branch

For maintainers only: to create a new major release branch, use:

```bash
git checkout -b v2
git push origin v2
```
