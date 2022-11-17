## run your own automated test

First, clone the repo:

`git clone git@github.com:reinskywalker/prospace-io.git`

Next, you will need to install : 
`npm install selenium-webdriver && chromedriver && chai && mocha`

then run : 
`node prospace.js / or press F5 ontop of NodeJS in vscode`


  - run: npm ci
    - run: npm run build --if-present
    - run: npm install selenium-webdriver
    - run: npm install chromedriver
    - run: node selenium-login.js
