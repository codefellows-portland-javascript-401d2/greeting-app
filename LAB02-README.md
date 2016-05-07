![CF](assets/shield-32x32.png) Lab 02: Build Tools
===

##To Submit this Assignment
  * fork this repository
  * clone locally
  * write all of your code in a directory named `@` + `<your github handle or your first name>` **e.g.** `/@martypdx`
  * when complete and all changes have been pushed upstream to origin (github), submit a PR against class/assigment-repo master branch
  * submit in canvas:
    * the url to your pull request
    * how much time did you spend
    * question and observation

## Description:

This work is to be done as a continuation of your fork of the `greeting-app` assignment.

For this assignment you will add the following:
  * Enhance your greeting features. 
    * Use at least one third-party npm library, example: add icon/art/emoji greeting
    * Add at least one new option to the greet function
  * dependency tracking via npm and package.json
  * automated build and development environent via gulp
  * changelog and semver "history":
    * the version from the previous lab is `v1.0.0`
    * break the work above into at least 3 "releases"

The package.json file should include:
  * all the dependencies and dev devdependencies for the project.
  * npm scripts for running gulp (ex: start, build, watch, dev)

The gulpfile should contain:
  * a task to run the mocha/assert test
  * run eslint on all of your code
  * watch functionality that only watches .js files  

## Bonus:  

* For an extra point:
  * set up a gulp watch task that reruns your eslint/tests
 on changes to any of your files, minus `package.json` (HINT: read the gulp docs :)
  * move the eslint options out of your eslint rc and into gulp
 
## Rubric:

* Correct Submission: 1pts
* Code Quality: 2pts
* package.json: 2pts
* gulpfile: 2pts
* changelog/semver: 3pts
