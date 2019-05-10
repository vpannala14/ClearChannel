package tests;

import Pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginCoverSteps extends Base {

    LoginPage loginPage = new LoginPage(driver);

    @Given("^I goto herokuapp login page$")
    public void i_goto_herokuapp_website() {

        loginPage.NavigateToPage();
    }

    @When("^I enter (.*) and (.*)$")
    public void i_enter_tomsmith_and_password(String name, String pwd) {

        loginPage.enterLoginDetails(name, pwd);
    }

    @When("^I click on login button$")
    public void i_click_on_login_button() {

        loginPage.clickLoginButton();
    }

    @Then("^I should be able to navigate to secure area$")
    public void i_should_see_secure_area() {

        loginPage.verifySafeArea();
    }

    @Then("^I should see error message$")
    public void i_should_see_errormessage() {

        loginPage.verifyErrorMessage();
    }

    @Given("^I am logged in$")
    public void i_am_logged_in() {

        loginPage.login();
    }

    @Then("^I should successfully logout$")
    public void i_should_successfully_logout() {

        loginPage.verifySuccessfulLogout();
    }

    @Then("^I click the logout button$")
    public void i_click_on_logout_button() {

        loginPage.clickLogoutButton();
    }
}
