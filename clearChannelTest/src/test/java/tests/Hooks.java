package tests;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Hooks extends Base {

    @Before
    public void InitDriver() {
        System.setProperty("webdriver.chrome.driver", "extensions/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

    @After
    public void DisposeDriver() {
        driver.close();
        driver.quit();
    }


}
