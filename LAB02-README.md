![CF](assets/shield-32x32.png) Lab 02: Build Tools
===

##To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-martypdx`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Description:

Work in the same `lab-youname` directory from the lab-01-modular-patterns assignment.

For this assignment you will add:
  * An npm package.json file
  * A third-party icon/art library that augments your greeting.
  * A gulpfile run  

The package.json file should include:
  * all the dependencies and dev devdependencies for the project.
  * npm scripts for running gulp.  

The gulpfile should contain 
  * a task to run the mocha/assert test
  * run eslint on all of your code
  * watch functionality that only watches .js files  

## Bonus:  

* For an extra point, set up a gulp watch task that reruns your eslint/tests
 on changes to any of your files (minus package.json)  
  * HINT: read the gulp docs :)
* For another bonus point move the eslint options out of your eslint rc and into gulp  

## Rubric:

* Correct Submission: 2pts
* Passes eslint: 2Pts
* Package.json: 3pts
* gulpfile: 3pts