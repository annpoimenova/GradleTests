$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/statuscodes.feature");
formatter.feature({
  "name": "HTTP status codes",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@statuscodes"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Check the status HTTP status codes",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A User Navigates to StatusCodes Page",
  "keyword": "Given "
});
formatter.step({
  "name": "A User Clicks on status Code \u003cinput\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Application displays the message \u003coutputCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "input",
        "outputCode"
      ]
    },
    {
      "cells": [
        "200",
        "200"
      ]
    },
    {
      "cells": [
        "301",
        "301"
      ]
    },
    {
      "cells": [
        "404",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check the status HTTP status codes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statuscodes"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A User Navigates to StatusCodes Page",
  "keyword": "Given "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserNavigatesToStatusCodesPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User Clicks on status Code 200",
  "keyword": "When "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserClicksOnStatusCodeInput(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Application displays the message 200",
  "keyword": "Then "
});
formatter.match({
  "location": "theinternet.TestSteps.applicationDisplaysTheMessageOutputCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check the status HTTP status codes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statuscodes"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A User Navigates to StatusCodes Page",
  "keyword": "Given "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserNavigatesToStatusCodesPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User Clicks on status Code 301",
  "keyword": "When "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserClicksOnStatusCodeInput(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Application displays the message 301",
  "keyword": "Then "
});
formatter.match({
  "location": "theinternet.TestSteps.applicationDisplaysTheMessageOutputCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check the status HTTP status codes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statuscodes"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A User Navigates to StatusCodes Page",
  "keyword": "Given "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserNavigatesToStatusCodesPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User Clicks on status Code 404",
  "keyword": "When "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserClicksOnStatusCodeInput(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Application displays the message 404",
  "keyword": "Then "
});
formatter.match({
  "location": "theinternet.TestSteps.applicationDisplaysTheMessageOutputCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
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
  "name": "A valid email id is allowed",
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
  "name": "Navigate to Page ForgotPassword",
  "keyword": "Given "
});
formatter.match({
  "location": "theinternet.TestSteps.navigateToPageForgotPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User enters a valid email id",
  "keyword": "When "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserEntersAValidEmailId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User clicks on Retrieve password button",
  "keyword": "And "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserClicksOnRetrievePasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Application shows that the email has been sent.",
  "keyword": "Then "
});
formatter.match({
  "location": "theinternet.TestSteps.applicationShowsThatTheEmailHasBeenSent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "An invalid email is not allowed",
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
  "name": "Navigate to Page ForgotPassword",
  "keyword": "Given "
});
formatter.match({
  "location": "theinternet.TestSteps.navigateToPageForgotPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User enters a invalid email id",
  "keyword": "When "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserEntersAInvalidEmailId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User clicks on Retrieve password button",
  "keyword": "And "
});
formatter.match({
  "location": "theinternet.TestSteps.aUserClicksOnRetrievePasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Application does not show that email has been sent.",
  "keyword": "Then "
});
formatter.match({
  "location": "theinternet.TestSteps.applicationDoesNotShowThatEmailHasBeenSent()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \r\nExpected: not \"Your e-mail\u0027s been sent!\"\r\n     but: was \"Your e-mail\u0027s been sent!\"\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat theinternet.TestSteps.applicationDoesNotShowThatEmailHasBeenSent(TestSteps.java:65)\r\n\tat ✽.Application does not show that email has been sent.(file:///C:/Users/Anna_Poimenova/IdeaProjects/NewJavaPro/src/test/resources/features/forgotpassword.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});
