# Input Validator

## Usage

Just simply create an Array contains `validators` you want to execute in order, then put your input string and validator in function

Can see `tests/unit/*` for example

```js
let validators = [{
    validator: 'trimSpace'
}, {
    validator: 'escapeSpecialCharacters'
}, {
    validator: 'limitLength',
    options: {
        limit: 30
    }
}];
let validatedInput = inputValidator(inputValue, validators);
expect(validatedInput).to.equal('測試中英文 tag且字數不得超過30');

```

## Build

`npm run build`

## Test

`npm run test`


