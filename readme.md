# lod

A lightweight version of lodash. Unused stuff and 'ash' are removed for simplicity.

## Development

When you make changes, you may want to run these scripts often to check for errors.

* check js syntax
```
npm run lint
```

* run unit test and check coverage
```
npm run test
```

Precommit hook for each commit also runs the above 2 scripts automatically, and if there is any error the commit will be discarded.

When you are done with your changes, run this to rev up the version. Refer to 
[SEMVER](https://semver.org/) to make sure you update the right part of the version.
```
npm version major|minor|patch
```

Then do a git push so that all the changes with the new version tag are pushed to remote.

Finally, open `package.json` in your **main repo**, find `lod` entry in `dependencies`, and update the semver pattern.