## How to Contribute

Pull requests should be done with review before merging master and coverage should remain the same.

If you want to create a new version you should follow the next steps before submitting a PR:

* Bump the version in the package.json file
* Add the changes to the CHANGELOG.md

After your changes are in the *master branch* you should execute the next commands

* npm run build
* npm publish
* Create a new tag with the number
* Don't forget to add in the description the changes made in the CHANGELOG.md