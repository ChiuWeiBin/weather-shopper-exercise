# Testing weathershopper website using Cypress

This is a project involving conditional testings.
<br>The test script is written in `Cypress` automation library.

## Application Under Test

[Weather Shopper](http://weathershopper.pythonanywhere.com/)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of `Node.js`

## How to run the test

To run the test, run these command in the terminal:

Step 1 - Installing the dependencies:

```
npm i
```

Step 2 - Run test

```powershell
npx cypress run
```

Since I have added the below to the `package.json`

```json
	"scripts": {
		"cy:open": "cypress open",
		"cy:run": "cypress run"
	},
```

To run it, use

```powershell
npm run cy:open  	#instead of npx cypress open
npm run cy:run		#instead of npx cypress run (run in headless mode)
```

