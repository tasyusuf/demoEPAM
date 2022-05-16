$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/training.feature");
formatter.feature({
  "name": "go to google",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "go to google website",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to amazon",
  "keyword": "When "
});
formatter.match({
  "location": "com.EPAM.step_definitions.trainingstepdefs.user_go_to_amazon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title must contains amazon",
  "keyword": "Then "
});
formatter.match({
  "location": "com.EPAM.step_definitions.trainingstepdefs.title_must_contains_amazon()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});