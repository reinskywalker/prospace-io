require('chromedriver')
let swd = require('selenium-webdriver');
const { Timeouts } = require('selenium-webdriver/lib/capabilities');
let driver = new swd.Builder()
    .forBrowser('chrome').build()
let test = require('selenium-webdriver/testing');
const timeOut = driver.manage().setTimeouts({
    implicit: 1000, //ms
})
const { site, textField, button } = require('./objects.json')

let openSite =
    driver.get(site);
openSite
let maxWindow = driver.manage().window().maximize()
maxWindow
timeOut

    .then(function() {
        for (let i = 1 + 1; i < 10; i += 1) {
            const timeOut = driver.manage().setTimeouts({
                implicit: 2000, //ms
            })
            const sendInt = driver.findElement(swd.By.xpath(textField))
            sendInt.sendKeys(i)
            driver.findElement(swd.By.xpath(button)).click()
            timeOut
            sendInt.clear()

        }
    }, 3000)
    .catch(function(err) {
        console.log("Error ", err, " occurred!");
        console.log(`error at ${driver.getCurrentUrl}`);
        driver.takeScreenshot()
        driver.close()
    })