package Pages;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {

    public WebDriver driver;
    private String _userName = "tomsmith";
    private String _password = "SuperSecretPassword!";
    private String baseUrl = "http://the-internet.herokuapp.com/login";
    private String errorMessage = "Your username is invalid!";
    private String successMessage = "You logged into a secure area!";
    private String logoutMessage = "You logged out of the secure area!";

    @FindBy(id = "username")
    public WebElement username;

    @FindBy(id = "password")
    public WebElement password;

    @FindBy(css = "button[type='submit']")
    public WebElement loginButton;

    @FindBy(id = "flash")
    public WebElement flashMessage;

    @FindBy(css = "a[href='/logout']")
    public WebElement logoutButton;

    @FindBy(css = "h4[class='subheader']")
    public WebElement welcomeText;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void waitForElement(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    private void waitForPageToLoad(WebDriver driver) {
        ExpectedCondition<Boolean> pageLoadCondition = new
                ExpectedCondition<Boolean>() {
                    public Boolean apply(WebDriver driver) {
                        return ((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete");
                    }
                };
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(pageLoadCondition);
    }

    public void NavigateToPage() {

        driver.get(baseUrl);
        waitForPageToLoad(driver);
    }

    public void enterLoginDetails(String name, String pwd) {

        username.clear();
        username.sendKeys(name);
        password.clear();
        password.sendKeys(pwd);
    }

    public void clickLoginButton() {

        loginButton.click();
    }

    public void verifySafeArea() {

        waitForElement(flashMessage);
        Assert.assertTrue(flashMessage.getText().contains(successMessage));
        Assert.assertTrue(welcomeText.isDisplayed());
    }

    public void verifyErrorMessage() {

        waitForElement(flashMessage);
        Assert.assertTrue(flashMessage.getText().contains(errorMessage));
    }

    public void login() {

        enterLoginDetails(_userName, _password);
        clickLoginButton();
        verifySafeArea();
    }

    public void clickLogoutButton() {

        logoutButton.click();
    }

    public void verifySuccessfulLogout() {

        waitForElement(flashMessage);
        Assert.assertTrue(flashMessage.getText().contains(logoutMessage));
    }

}