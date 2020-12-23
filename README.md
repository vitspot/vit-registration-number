# vit-registration-number

Ever wanted to quickly validate and read data off a registration number in VIT? Then this package is for you. Here's a simple usage.


## Usage
```sh
# install the package
npm install @vitspot/vit-registration-number

```

Using in Code
```js
const RegistrationNumber = require("@vitspot/vit-registration-number")
const someNumber = new RegistrationNumber("19BCE2669")

const year = someNumber.getYear()
// => 19

const branch = someNumber.getBranch();
// => BCE

const index = someNumber.getIndex();
// => 2669
```

**No need to worry about validation**
Strict type checking for all sections of the registration number. Will **throw an error** if the registration number is malformed, so that it's easy to check. Always wrap inside a try-catch block when validating numbers.