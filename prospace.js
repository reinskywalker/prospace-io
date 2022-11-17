require('chromedriver')
let swd = require('selenium-webdriver');
const { INTERNAL_COMPUTE_OFFSET_SCRIPT } = require('selenium-webdriver/lib/input');
let driver = new swd.Builder()
    .forBrowser('chrome').build()

    const timeOut = driver.manage().setTimeouts({
        implicit:1000, //ms
    })
const { site, textField, button, result } = require('./objects.json')
let openSite =
    driver.get(site);
openSite
let maxWindow = driver.manage().window().maximize()
maxWindow
timeOut

    .then(function () {
        for (let i = 1+1; i < 10; i += 1) {
            const timeOut = driver.manage().setTimeouts({
                implicit:2000, //ms
            })
            const sendInt = driver.findElement(swd.By.xpath(textField))
            let assertInt = sendInt.sendKeys(i)
            let clickButton = driver.findElement(swd.By.xpath(button)).click()
            let delItem = driver.executeAsyncScript("document.getElementById('number').value = '';")
            let getText = driver.findElement({
                css: 'input[name="number"]'
              }).getAttribute("value");
              console.log(getText)
            return assertInt, clickButton, delItem, timeOut
        }
    })
   .catch(function(err) {
    console.log("Error ", err, " occurred!");
    driver.close()
   })