# setup-pseudocode-summarizer

<p align="center">
  <a href="https://github.com/actions/javascript-action/actions"><img alt="javscript-action status" src="https://github.com/actions/javascript-action/workflows/units-test/badge.svg"></a>
</p>

This Github Action installs the [pseudocode-summarizer CLI tool](https://github.com/Promptly-Technologies-LLC/pseudocode-summarizer), which queries OpenAI's GPT-3.5-Turbo Large Language Model (LLM) for the purpose of generating a comprehensive pseudocode summary of the code in your project folder. A comprehensive pseudocode summary makes your project easier to grasp at a glance, and can also be embedded in a vector database or dumped into context when working with an LLM. 

With the `setup-pseudocode-summarizer` action, you can update your project summary on every push or at regular intervals as part of a CI/CD workflow or automation pipeline. Thanks to the low cost of GPT-3.5-Turbo, the workflow costs pennies to run even if you've made substantial changes to your project (and little or nothing if you haven't).

## Contributing

To install the dependencies, use:

```bash
npm install
```

Make changes on a development branch, run lint/build/test pipeline with `npm run all`, and open a pull request if all tests pass.

## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

Checkin to the v1 release branch

```bash
git checkout -b v1
git commit -a -m "v1 release"
```

```bash
git push origin v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Usage

You can now consume the action by referencing the v1 branch

```yaml
uses: actions/setup-pseudocode-summarizer@v1
with:
  install-python: 'true'
```
