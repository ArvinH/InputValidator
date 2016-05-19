'use strict';

/**
 * General input validator, execute every method in order
 * @param {[String]} inputValue [input value]
 * @param {[Array]} validationItem [contain validator method & options]
 * @return {[type]} [validated input string]
 */
module.exports = function (inputValue, validationItem) {
    validationItem.map((item, index) => {
        switch (item.validator) {
            case 'trimSpace':
                inputValue = inputValue.replace(/^\s+|\s+$/g, '');
                break;
            case 'escapeSpecialCharacters':
                inputValue = inputValue.replace(/[^a-zA-Z\s\d\u4E00-\u9FA5]+/g, '');
                break;
            case 'limitLength':
                let stringLimit = item.options && item.options.limit || 10;
                let middle = Math.floor(stringLimit / 2);
                if (inputValue.replace(/[^\x00-\xff]/g, 'mm').length > stringLimit) {
                    for (let i = middle; i < inputValue.length; i++) {
                        if (inputValue.substr(0, i).replace(/[^\x00-\xff]/g, 'mm').length >= stringLimit) {
                            inputValue = inputValue.substr(0, i);
                        }
                    }
                }
                break;
            default:
                inputValue = inputValue;
        }
    });
    
    return inputValue;
};
