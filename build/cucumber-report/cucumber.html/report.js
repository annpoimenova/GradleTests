$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/forgotpassword.feature");
formatter.feature({
  "name": "Forgot password",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@forgotpassword"
    }
  ]
});
formatter.scenario({
  "name": "Check search on habr",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@forgotpassword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Habr",
  "keyword": "Given "
});
formatter.match({
  "location": "theinternet.TestSteps.navigateToHabr()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search in habr.com",
  "keyword": "When "
});
formatter.match({
  "location": "theinternet.TestSteps.searchByWord()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "First result contains Selenium",
  "keyword": "Then "
});
formatter.match({
  "location": "theinternet.TestSteps.checkResult()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});