$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/gmail.feature");
formatter.feature({
  "line": 2,
  "name": "Verifying the functionality of the web sites",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verifying the Gmail",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Gmail"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I launch the gmail",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I  enter the \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I validate gmail inbox page for \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I check the number of mail in the inbox",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the first mail",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;1"
    },
    {
      "cells": [
        "testuser275275",
        "TESTuser275275"
      ],
      "line": 18,
      "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;2"
    },
    {
      "cells": [
        "275275testuser",
        "TESTuser275275"
      ],
      "line": 19,
      "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "Setting up the driver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I set up the driver and open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.i_set_up_the_driver_and_open_chrome()"
});
formatter.result({
  "duration": 8216053106,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verifying the Gmail",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Gmail"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I launch the gmail",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I  enter the testuser275275 and TESTuser275275",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I validate gmail inbox page for testuser275275",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I check the number of mail in the inbox",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the first mail",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_launch_the_gmail()"
});
formatter.result({
  "duration": 2143447537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser275275",
      "offset": 13
    },
    {
      "val": "TESTuser275275",
      "offset": 32
    }
  ],
  "location": "StepDef.i_enter_the_and(String,String)"
});
formatter.result({
  "duration": 2031445698,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 173948093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser275275",
      "offset": 32
    }
  ],
  "location": "StepDef.i_validate_gmail_inbox_page_for(String)"
});
formatter.result({
  "duration": 10526630106,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_check_the_number_of_mail_in_the_inbox()"
});
formatter.result({
  "duration": 38962554,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_first_mail()"
});
formatter.result({
  "duration": 127148454,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Setting up the driver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I set up the driver and open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.i_set_up_the_driver_and_open_chrome()"
});
formatter.result({
  "duration": 5139295422,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verifying the Gmail",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-gmail;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Gmail"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I launch the gmail",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I  enter the 275275testuser and TESTuser275275",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I validate gmail inbox page for 275275testuser",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I check the number of mail in the inbox",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the first mail",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_launch_the_gmail()"
});
formatter.result({
  "duration": 2818272592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "275275testuser",
      "offset": 13
    },
    {
      "val": "TESTuser275275",
      "offset": 32
    }
  ],
  "location": "StepDef.i_enter_the_and(String,String)"
});
formatter.result({
  "duration": 1956618766,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 133343929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "275275testuser",
      "offset": 32
    }
  ],
  "location": "StepDef.i_validate_gmail_inbox_page_for(String)"
});
formatter.result({
  "duration": 10166628594,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_check_the_number_of_mail_in_the_inbox()"
});
formatter.result({
  "duration": 17933655,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_first_mail()"
});
formatter.result({
  "duration": 135718075,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Setting up the driver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I set up the driver and open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.i_set_up_the_driver_and_open_chrome()"
});
formatter.result({
  "duration": 5034914250,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verifying the Hris",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-hris",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Hris"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I launch the hris",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I  enter credentials to login",
  "rows": [
    {
      "cells": [
        "harishahi",
        "Hari@101$#"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.i_launch_the_hris()"
});
formatter.result({
  "duration": 4889308985,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_enter_credentials_to_login(DataTable)"
});
formatter.result({
  "duration": 5500903061,
  "status": "passed"
});
});