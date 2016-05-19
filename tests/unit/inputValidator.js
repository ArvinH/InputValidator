/*global require, describe:true, it:true, before:true, beforeEach:true*/

'use strict';

var expect = require('chai').expect;

describe('#inputValidator', function () {
    var inputValue;
    var inputValidator;
    before  (function () {
        inputValidator = require('../../dist/index');
    });

    beforeEach (function () {
        inputValue = ' 測試中英文 tag且^!@#@字數不得超過30 ';
    });

    it ('should trim head & tail space', function (done) {
        let validators = [{
            validator: 'trimSpace'
        }];
        let validatedInput = inputValidator(inputValue, validators);
        expect(validatedInput).to.equal('測試中英文 tag且^!@#@字數不得超過30');
        done();
    });

    it ('should escape special characters', function (done) {
        let validators = [{
            validator: 'escapeSpecialCharacters'
        }];
        let validatedInput = inputValidator(inputValue, validators);
        expect(validatedInput).to.equal(' 測試中英文 tag且字數不得超過30 ');
        done();
    });

    it ('should limit input value in 30 characters', function (done) {
        let validators = [{
            validator: 'limitLength',
            options: {
                limit: 30
            }
        }];
        let validatedInput = inputValidator(inputValue, validators);
        expect(validatedInput).to.equal(' 測試中英文 tag且^!@#@字數不得');
        done();
    });

    it ('should trim space, escape sepcial characters and limit input value in 30 characters', function (done) {
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
        done();
    });
});
