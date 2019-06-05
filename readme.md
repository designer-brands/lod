# lod

## Description
A lightweight library to replace `lodash`. Unused stuff and "ash" in `lodash` are removed for simplicity, while some new methods that don't exist in `lodash` are added to better fit our own needs.

## Motive
`Lodash` is a well known library with rich functionalities and is currently used throughout our application repositories. However, we have only used about 15 methods while there are 300+ in total, which means we are only using about 5% of the `lodash` functionalities, and the vast majority of the code in `lodash` is not needed but will still be loaded in production and local dev environment.

In addition, since there are so many features and methods in `lodash`, developers' understanding of it will vary a lot, some tend to use a certain set of methods while others may prefer a different set, some may take advantage of those less common features while others will rebuild the wheel as they are not aware of those methods, and some may just avoid to use `lodash` at all. All these lead to a lot of inconsistencies and duplications in the codebase, and is very bad for code quality.

What's more, `lodash` may not have certain features we need, and then developers will have to write them on their own, but this can also lead to unreusable code very easily because a of times these written features are just put in a local service or component and so they are not available elsewhere. In addition, other developers probably do not even know they exist.

## Philosophy
Due to these disadvantages, `Lod` is built with the following philosophies.

1. It only includes features that are really needed in our project.

2. Unlike `lodash`, it advocates the use of native Javascript API whenever it's possible.

In other words, it does not provide aliases or wrappers for native methods if these native methods are already simple and clear enough to use. (One special case is the `sortBy` method, because the compare function of the native `Array.sort()` method has a confusing api. See `sortBy` documentation for more details.)

These 2 points above will ensure that `lod` will not get bloated as `lodash`.

3. It includes a few new methods that don't exist in `lodash` to fit our own needs.

And if in the future we see certain code or patterns happen again and again through out our repos, we can pull them out with proper abstractions into `lod` as well. This will make `lod` evolve and adapt to our projects better and better in the long term.

## Development

### npm scripts
You will find these scripts useful during development.

* check js syntax
```bash
npm run lint
```

* run unit test and coverage
```bash
npm run test
```

* launch coverage report in default browser
```bash
npm run launch-coverage
```

* generate documents
```bash
npm run doc
```

* generate documents and launch them in default browser
```bash
npm run launch-doc
```

The precommit-hook also automatically runs the `lint` and `test` scripts, and if there is any error the commit will be discarded so that bad code cannot get in the repo.

### Coding styles
`Lod` uses [eslint](https://https://eslint.org/) to enforce coding styles. It is written in `es6` syntax and `commonjs` modules with a set of eslint rules enabled, see `.eslintrc.json` for more info.

### Unit tests
Get familiar with the [jasmine test framework](https://jasmine.github.io/index.html) first.

When writing tests, use the `given` `when` `then` gherkin syntax instead of the conventional `describe` `it` `then`. You can also use `fgiven` `fwhen` `fthen` `xgiven` `xwhen` `xthen` in the same way as `fdescribe` `xdescribe` etc., these aliases may help you debug your tests.

You can use `@src` alias in `require()` to refer to the `src/` folder as a base url so that ugly "../../" can be avoided.

Use `checkUndesiredTypes` (take a look at the existing tests as examples) to handle undesired types so that you don't need to reinvent this wheel.

### Adding a new method
If you are adding a new method, make sure it's exposed in index.js and decide if it should also be included in chain.js.

### After done with changes
When you are done with your changes, make sure lint, unit tests and coverage tests are all passed, and update changelog.md file. Refer to [SEMVER](https://semver.org/) to make sure you update the right part of the version. You may also want to launch documents to check if they are updated and aligned to your changes as well. If you have checked everything is fine, create a pull request.

### Revup your version
If you need to revup your version, switch to master and do a git pull after your pull request is merged, then run the following script. Refer to [SEMVER](https://semver.org/) to make sure you update the right part of the version. This should be consistent with your updates in changelog.md file.
```
npm version major|minor|patch
```

Then push all the changes with the new version tag to the remote.

Not every update needs a revup. You can add the version tag after several pull requests are all merged if it makes sense.

### Update your main repo
Open `package.json` in your **main repo** which uses `lod` as a dependency, find the `lod` entry in `dependencies`, and update the semver to point to the right version of `lod`.