package theinternet;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;
import java.nio.file.Paths;

import static com.codeborne.selenide.Selenide.open;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class TestSteps{
    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver",
                Paths.get("src/test/resources/87chromedriver/chromedriver.exe").toString());
        if (driver == null) {
            driver = new ChromeDriver();
        }
    }
    @After
    public void tearDown() {
        if (driver!=null) {
            driver.close();
            driver.quit();
        }
    }

    @Given("Navigate to Page ForgotPassword")
    public void navigateToPageForgotPassword() {
        driver.navigate().to("https://the-internet.herokuapp.com/forgot_password");
    }

    @Given("Navigate to Habr")
    public void navigateToHabr() {
        open("https://habr.com/");
    }

    @When("Search in habr.com")
    public void searchByWord() {
        $("#search-form-btn").click();
        $("#search-form-field").sendKeys("Selenium");
        $("#search-form-field").sendKeys(Keys.ENTER);
    }

    @Then("First result contains Selenium")
    public void checkResult() {
        String a = $(By.id("search-form-field")).getAttribute("placeholder");
        assertThat(a, is("Search"));
    }

    @When("A User enters a valid email id")
    public void aUserEntersAValidEmailId() {
        driver.findElement(By.name("email")).sendKeys("valid@example.com");
    }

    @And("A User clicks on Retrieve password button")
    public void aUserClicksOnRetrievePasswordButton() {
        driver.findElement(By.id("form_submit")).click();
    }

    @When("A User enters a invalid email id")
    public void aUserEntersAInvalidEmailId() {
        driver.findElement(By.name("email")).sendKeys("invalid@");
    }

    @Then("Application shows that the email has been sent.")
    public void applicationShowsThatTheEmailHasBeenSent() {
        String actualMessage = driver.findElement(By.id("content")).getText();
        assertThat(actualMessage.trim(), is("Your e-mail's been sent!"));
    }

    @Then("Application does not show that email has been sent.")
    public void applicationDoesNotShowThatEmailHasBeenSent() {
        String actualMessage = driver.findElement(By.id("content")).getText();
        assertThat(actualMessage.trim(), not("Your e-mail's been sent!"));
    }

    @Given("A User Navigates to StatusCodes Page")
    public void aUserNavigatesToStatusCodesPage() {
        driver.navigate().to("https://the-internet.herokuapp.com/status_codes");
    }

    @When("A User Clicks on status Code {int}")
    public void aUserClicksOnStatusCodeInput(Integer inputCode) {
        driver.findElement(By.partialLinkText(inputCode.toString())).click();
    }

    @Then("Application displays the message {int}")
    public void applicationDisplaysTheMessageOutputCode(Integer outputCode) {
        String expectedMessage = "This page returned a "+outputCode.toString()+" status code.";
        String actualMessage = driver.findElement(By.cssSelector("h3 + p")).getText();


        assertThat(actualMessage, containsString(expectedMessage));
    }
}