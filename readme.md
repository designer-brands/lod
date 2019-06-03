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

2. Unlike `lodash`, it dvocates the use of native Javascript API whenever it's possible.

In other words, it does not provide aliases or wrappers for native methods if these native methods are already simple and clear enough to use. One special case is the {@link sortBy} method, because the compare function of the native `Array.sort()` method has a confusing api. For more details see {@link sortBy}.

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

### Adding a new method
If you are adding a new method, make sure it's exposed in index.js and decide if it should also be included in chain.js.

### After done with changes
When you are done with your changes, make sure lint, unit tests and coverage tests are all passed, and update changelog.md file. Refer to [SEMVER](https://semver.org/) to make sure you update the right part of the version. You may also want to launch documents to check if they are updated and aligned to your changes as well. If you have checked everything is fine, create a pull request.

### After PR is merged
After your pull request is merged, switch to master and do a git pull, then run the following script to rev up the version. Refer to [SEMVER](https://semver.org/) to make sure you update the right part of the version. This should be consistent with your updates in changelog.md file.
```
npm version major|minor|patch
```

Then push all the changes with the new version tag to the remote.

### Update your main repo
Finally, open `package.json` in your **main repo**, find `lod` entry in `dependencies`, and update to the latest semver.