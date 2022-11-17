require('chromedriver', 'mocha')
const { it, describe } = require('mocha');
let swd = require('selenium-webdriver');
const { Timeouts } = require('selenium-webdriver/lib/capabilities');
let driver = new swd.Builder()
    .forBrowser('chrome').build()
var assert = require('chai').assert
const fs = require('fs');

const timeOut = driver.manage().setTimeouts({
    implicit: 1000, //ms
})
const { site, textField, button, result } = require('./objects.json')



function getScreenshot() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    const r = Math.floor(Math.random() * 1001)
    driver.takeScreenshot().then(function(ss) {
        fs.writeFileSync(`../${r+currentDate}.jpeg`, ss, 'base64')
    })
}

let openSite = driver.get(site);
openSite
console.log(JSON.stringify(`${site} is opened`))
let maxWindow = driver.manage().window().maximize()
maxWindow
console.log(`window is maximized`)
timeOut

console.log('scenario of input data from 1 to 9')
    .then(function() {
        const maxInt = 10
        for (let i = 1; i < maxInt; i += 1) {
            const timeOut = driver.manage().setTimeouts({
                implicit: 2000,
            })
            const sendInt = driver.findElement(swd.By.xpath(textField))
            sendInt.sendKeys(i)
            driver.findElement(swd.By.xpath(button)).click()
            timeOut
            console.log(`assert happy flow ${i} of ${maxInt-1}`)
            sendInt.clear()
        }
    })

console.log('scenario of input data from 10 to 19')
    .then(function() {
        const maxInt = 20
        for (let i = 10; i < maxInt; i += 1) {
            const timeOut = driver.manage().setTimeouts({
                implicit: 2000,
            })
            const sendInt = driver.findElement(swd.By.xpath(textField))
            sendInt.sendKeys(i)
            driver.findElement(swd.By.xpath(button)).click()
            timeOut
            console.log(`assert happy flow ${i} of ${maxInt-1}`)
            sendInt.clear()
        }
    })

console.log('scenario of input data from 100 to 199')
    .then(function() {
        const maxInt = 200
        for (let i = 100; i < maxInt; i += 1) {
            const timeOut = driver.manage().setTimeouts({
                implicit: 2000,
            })
            const sendInt = driver.findElement(swd.By.xpath(textField))
            sendInt.sendKeys(i)
            driver.findElement(swd.By.xpath(button)).click()
            timeOut
            console.log(`assert happy flow ${i} of ${maxInt-1}`)
            sendInt.clear()
        }
    })

console.log('scenario of input data from 1000 to 1999')
    .then(function() {
        const maxInt = 2000
        for (let i = 1000; i < maxInt; i += 1) {
            const timeOut = driver.manage().setTimeouts({
                implicit: 2000,
            })
            const sendInt = driver.findElement(swd.By.xpath(textField))
            sendInt.sendKeys(i)
            driver.findElement(swd.By.xpath(button)).click()
            timeOut
            console.log(`assert happy flow ${i} of ${maxInt-1}`)
            sendInt.clear()
        }
    })

console.log('scenario of input data from 10000 to 19999')
    .then(function() {
        const maxInt = 20000
        for (let i = 10000; i < maxInt; i += 1) {
            const timeOut = driver.manage().setTimeouts({
                implicit: 2000,
            })
            const sendInt = driver.findElement(swd.By.xpath(textField))
            sendInt.sendKeys(i)
            driver.findElement(swd.By.xpath(button)).click()
            timeOut
            console.log(`assert happy flow ${i} of ${maxInt-1}`)
            sendInt.clear()
        }
    })


console.log('scenario of input data from 100000 to 199999')
    .then(function() {
        const maxInt = 200000
        for (let i = 100000; i < maxInt; i += 1) {
            const timeOut = driver.manage().setTimeouts({
                implicit: 2000,
            })
            const sendInt = driver.findElement(swd.By.xpath(textField))
            sendInt.sendKeys(i)
            driver.findElement(swd.By.xpath(button)).click()
            timeOut
            console.log(`assert happy flow ${i} of ${maxInt-1}`)
            sendInt.clear()
        }
    })

console.log('scenario of input negative value from -1 to -9')
    .then(function() {
        const maxInt = -10
        for (let i = -1; i > maxInt; i -= 1) {
            const timeOut = driver.manage().setTimeouts({
                implicit: 2000,
            })
            const sendInt = driver.findElement(swd.By.xpath(textField))
            sendInt.sendKeys(i)
            driver.findElement(swd.By.xpath(button)).click()
            timeOut
            console.log(`assert negative flow ${Math.abs(i)} of ${Math.abs(maxInt+1)}`)
            sendInt.clear()
        }
    })
    .then(function() {
        console.log('assert non-numeric')
        const sendInt = driver.findElement(swd.By.xpath(textField))
        sendInt.sendKeys("prospace")
        driver.findElement(swd.By.xpath(button)).click()
        sendInt.clear()
    })
    .catch(function(err) {
        const url = driver.getCurrentUrl()
        console.log("Error ", err, " occurred!");
        console.log(`error at ${url}`);
        getScreenshot()
        driver.close()
    })