![CF](assets/shield-32x32.png) Lab 01: Modular Patterns and Testing
===

[![Build Status](https://travis-ci.org/codefellows-portland-javascript-401d2/lab-01-modular-patterns.svg?branch=master)](https://travis-ci.org/codefellows-portland-javascript-401d2/lab-01-modular-patterns)

##To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-martypdx`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Resources
* [Node assert docs](https://nodejs.org/dist/latest-v4.x/docs/api/assert.html)
* [Chai assert docs](http://chaijs.com/api/assert/)
* [Mocha docs](http://mochajs.org/#getting-started)

##Description:
This assignment will have you create a simple Javascript module that will be exported 
using the Node modular pattern we went over in class. 

The design of the module is up to you, but it needs to export something that can be used to 
take a name as a parameter and returns the string `'hello ' + name`.  

You should have at least one test that verifies the output of the function.  

Your code should pass the **.eslintrc** included in this repository.  

Your submission should be a link to your pull request.  

##Bonus:
For an extra point, create a command line utility that will be run using node greet.js 'some name' and will pass the input contained 
in that argument to the greet function and output the result to the screen. For example:

```sh
> node greet.js 'Jane Doe'
hello Jane Doe
```

For a second bonus point, write a test that makes sure that the arguments are being 
processed correctly.

##Rubric:

  * Proper Styling: 2pts
  * Proper Submission: 2pts
  * mocha/assert Test: 3pts
  * Use of Modular Pattern/design of greet object/function: 3pts
