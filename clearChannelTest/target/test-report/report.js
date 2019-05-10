$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Login and Logout functionality",
  "description": "\nIn order to verify login/logout\nAs a user\nI want to enter details for username and password and see",
  "id": "verify-login-and-logout-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3861697365,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I goto herokuapp login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCoverSteps.i_goto_herokuapp_website()"
});
formatter.result({
  "duration": 4720947987,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify login with Valid credentials",
  "description": "",
  "id": "verify-login-and-logout-functionality;verify-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@ValidLogin"
    },
    {
      "line": 11,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I enter tomsmith and SuperSecretPassword!",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to navigate to secure area",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 8
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 21
    }
  ],
  "location": "LoginCoverSteps.i_enter_tomsmith_and_password(String,String)"
});
formatter.result({
  "duration": 501608596,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 498401684,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_should_see_secure_area()"
});
formatter.result({
  "duration": 148808861,
  "status": "passed"
});
formatter.after({
  "duration": 164625485,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify login with Invalid credentials",
  "description": "",
  "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@InvalidLogin"
    },
    {
      "line": 19,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 27,
      "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "password"
      ],
      "line": 28,
      "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "username",
        ""
      ],
      "line": 29,
      "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "user",
        "pass"
      ],
      "line": 30,
      "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "£@$^$\u0026",
        "pwdddd"
      ],
      "line": 31,
      "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1671999162,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I goto herokuapp login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCoverSteps.i_goto_herokuapp_website()"
});
formatter.result({
  "duration": 2171709282,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify login with Invalid credentials",
  "description": "",
  "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Smoke"
    },
    {
      "line": 19,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter  and password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginCoverSteps.i_enter_tomsmith_and_password(String,String)"
});
formatter.result({
  "duration": 559723160,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 581944104,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_should_see_errormessage()"
});
formatter.result({
  "duration": 201570256,
  "status": "passed"
});
formatter.after({
  "duration": 205524965,
  "status": "passed"
});
formatter.before({
  "duration": 1917456039,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I goto herokuapp login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCoverSteps.i_goto_herokuapp_website()"
});
formatter.result({
  "duration": 2759787604,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify login with Invalid credentials",
  "description": "",
  "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Smoke"
    },
    {
      "line": 19,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter username and ",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 8
    },
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginCoverSteps.i_enter_tomsmith_and_password(String,String)"
});
formatter.result({
  "duration": 387577566,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 576620389,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_should_see_errormessage()"
});
formatter.result({
  "duration": 90914080,
  "status": "passed"
});
formatter.after({
  "duration": 155571715,
  "status": "passed"
});
formatter.before({
  "duration": 1754231595,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I goto herokuapp login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCoverSteps.i_goto_herokuapp_website()"
});
formatter.result({
  "duration": 2068895503,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify login with Invalid credentials",
  "description": "",
  "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Smoke"
    },
    {
      "line": 19,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter user and pass",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 8
    },
    {
      "val": "pass",
      "offset": 17
    }
  ],
  "location": "LoginCoverSteps.i_enter_tomsmith_and_password(String,String)"
});
formatter.result({
  "duration": 567640209,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 809882213,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_should_see_errormessage()"
});
formatter.result({
  "duration": 148403813,
  "status": "passed"
});
formatter.after({
  "duration": 199538841,
  "status": "passed"
});
formatter.before({
  "duration": 1810432365,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I goto herokuapp login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCoverSteps.i_goto_herokuapp_website()"
});
formatter.result({
  "duration": 2405191525,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify login with Invalid credentials",
  "description": "",
  "id": "verify-login-and-logout-functionality;verify-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Smoke"
    },
    {
      "line": 19,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter £@$^$\u0026 and pwdddd",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "£@$^$\u0026",
      "offset": 8
    },
    {
      "val": "pwdddd",
      "offset": 19
    }
  ],
  "location": "LoginCoverSteps.i_enter_tomsmith_and_password(String,String)"
});
formatter.result({
  "duration": 393737334,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 528575455,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_should_see_errormessage()"
});
formatter.result({
  "duration": 119327624,
  "status": "passed"
});
formatter.after({
  "duration": 160168936,
  "status": "passed"
});
formatter.before({
  "duration": 1622614711,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I goto herokuapp login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCoverSteps.i_goto_herokuapp_website()"
});
formatter.result({
  "duration": 2044879120,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify Logout",
  "description": "",
  "id": "verify-login-and-logout-functionality;verify-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Logout"
    },
    {
      "line": 34,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click the logout button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I should successfully logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCoverSteps.i_am_logged_in()"
});
formatter.result({
  "duration": 1804352873,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_click_on_logout_button()"
});
formatter.result({
  "duration": 497004597,
  "status": "passed"
});
formatter.match({
  "location": "LoginCoverSteps.i_should_successfully_logout()"
});
formatter.result({
  "duration": 96152130,
  "status": "passed"
});
formatter.after({
  "duration": 198521076,
  "status": "passed"
});
});