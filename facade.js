/**
 * Created by carlos.matheu on 22/12/2015.
 */

'use strict';

var theMortage = (function () {

    var Mortgage = function (name) {
        this.name = name;
    };

    Mortgage.prototype = {
        applyFor: function (amount) {
            // access multiple subsystems...
            var result = "approved";
            if (!new Bank().verify(this.name, amount)) {
                result = "denied";
            } else if (!new Credit().get(this.name)) {
                result = "denied";
            } else if (!new Background().check(this.name)) {
                result = "denied";
            }
            return this.name + " has been " + result +
                " for a " + amount + " mortgage";
        }
    }

    //Bank verification
    var Bank = function () {
        this.verify = function (name, amount) {
            // complex logic ...
            return true;
        }
    };

    //Credit verification
    var Credit = function () {
        this.get = function (name) {
            // complex logic ...
            return true;
        }
    };

    //Background verification
    var Background = function () {
        this.check = function (name) {
            // complex logic ...
            return true;
        }
    };

    return Mortgage;

}());

var mortgage = new theMortage('Joan Capdevila'),
    result = mortgage.applyFor('400.000 euros');

console.log(result);