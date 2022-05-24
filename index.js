const core = require('@actions/core');
const github = require('@actions/github');

function greetfunc(name){
    console.log(name);
}
try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('greet');
  greetfunc(nameToGreet);
  //console.log(`Hello ${nameToGreet}!`);
} catch (error) {
  core.setFailed(error.message);
}