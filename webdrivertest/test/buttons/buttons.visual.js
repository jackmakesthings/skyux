
/*global describe, it, browser, beforeEach, expect, console, require */

describe('buttons', function () {
    'use strict';

    var screenshot_prefix = {};

    beforeEach(function (done) {
        require('../common').createScreenshotPrefix(browser, screenshot_prefix, done);
    });

    it('should take the button screenshots', function (done) {
        var screenshotName = screenshot_prefix.value + 'buttons';
        console.log('starting: ' + screenshotName);
        browser
            .url('/buttons/fixtures/test.full.html')
            .webdrivercss('buttons', [
                {
                    name: screenshotName,
                    elem: '#screenshot-buttons'
                }
            ], function (err, res) {
                console.log('finishing: ' + screenshotName);
                console.log(err);
                expect(err).toBe(undefined);
                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
                console.log('finished: ' + screenshotName);
            }).call(done);
    });

    function getSelector(type, prefix) {
        var selector = (prefix !== undefined ? ('.' + prefix + '-') : '.') + 'btn-' + type;
        return selector;
    }

    function hoverTest(type, done, prefix) {
        var screenshotName = screenshot_prefix.value + 'button_' + type + '_hover',
            selector = getSelector(type, prefix);

        console.log('starting: ' + screenshotName);
        browser
            .url('/buttons/fixtures/test.full.html')
            .moveToObject(selector)
            .webdrivercss(('button_' + type + '_hover'), [
                {
                    name: screenshotName,
                    elem: ('#screenshots-buttons-' + type)
                }
            ], function (err, res) {
                console.log('finishing: ' + screenshotName);
                console.log(err);
                expect(err).toBe(undefined);

                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
                console.log('finished: ' + screenshotName);
            })
            .call(done);
    }

    function clickTest(type, done, prefix) {
        var screenshotName = screenshot_prefix.value + 'button_' + type + '_click',
            selector = getSelector(type, prefix);

        console.log('starting: ' + screenshotName);
        browser
            .url('/buttons/fixtures/test.full.html')
            .click(selector)
            .webdrivercss(('button_' + type + '_click'), [
                {
                    name: screenshotName,
                    elem: ('#screenshots-buttons-' + type)
                }
            ], function (err, res) {
                console.log('finishing: ' + screenshotName);
                console.log(err);
                expect(err).toBe(undefined);
                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
                console.log('finished: ' + screenshotName);
            })
            .call(done);
    }

    it('should take the button default hover test', function (done) {
        hoverTest('default', done);
    });

    it('should take the button default click test', function (done) {
        clickTest('default', done);
    });

    it('should take the button primary hover test', function (done) {
        hoverTest('primary', done);
    });

    it('should take the button primary click test', function (done) {
        clickTest('primary', done);
    });

    it('should take the button secondary hover test', function (done) {
        hoverTest('secondary', done, 'bb');
    });

    it('should take the button secondary click test', function (done) {
        clickTest('secondary', done, 'bb');
    });

    it('should take the button success hover test', function (done) {
        hoverTest('success', done);
    });

    it('should take the button success click test', function (done) {
        clickTest('success', done);
    });

    it('should take the button info hover test', function (done) {
        hoverTest('info', done);
    });

    it('should take the button info click test', function (done) {
        clickTest('info', done);
    });

    it('should take the button warning hover test', function (done) {
        hoverTest('warning', done);
    });

    it('should take the button warning click test', function (done) {
        clickTest('warning', done);
    });

    it('should take the button danger hover test', function (done) {
        hoverTest('danger', done);
    });

    it('should take the button danger click test', function (done) {
        clickTest('danger', done);
    });

    it('should take the button link hover test', function (done) {
        hoverTest('link', done);
    });

    it('should take the button link click test', function (done) {
        clickTest('link', done);
    });

});
