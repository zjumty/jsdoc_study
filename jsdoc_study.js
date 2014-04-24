/**
 * doSomething is a function
 * @param str {String} a string parameter
 * @param num {Number} a number parameter
 * @returns {{name: String, age: Number}}
 */
var doSomething = function(str, num){
    return {name : str, age : num + 1};
};

doSomething(1, "terry");
doSomething("terry", 1);

/**
 * @namespace
 */
var Module1 = (function ($) {

    /**
     * @private
     * @param car {Car}
     */
    var func3_private = function (car) {

    };

    return {
        /**
         * @memberOf Module1
         * @namespace
         */
        EVENTS: {
            /**
             * @enum
             * @default
             */
            VALUE_CHANGED: "valueChanged",
            /**
             * @enum
             * @default
             */
            NAME_CHANGED: "nameChanged"
        },

        /**
         * func1
         * @memberOf Module1
         * @param obj {FooBean}
         * @param callback {function(Number, Car): Array.<Part>}
         * @return Boolean
         */
        func1: function (obj, callback) {

            /** @type Car */
            var car = $.parseJSON("");

//            var car = {
//                name : "BMW",
//                size : 10,
//                parts : ["Light", "Wheel"]
//            };
            if (obj.age > 10) {
                return callback(10, car).length > 10;
            }
            return false;
        },

        /**
         * func2
         * @param obj {Car}
         * @return Boolean
         * @memberOf Module1
         */
        func2: function (obj) {
            return obj.parts && obj.parts.length > 0;
        },

        /**
         * func3
         * @method
         * @memberOf Module1
         */
        func3: func3_private,

        /**
         * func4
         * @private
         * @param num {Number}
         * @returns {boolean}
         */
        func4: function (num) {
            return num > 10;
        }
    };
})(jQuery);

/**
 * @namespace
 */
var Module2 = (function ($) {
    var events = $({});

    return {
        /**
         * @memberOf Module2
         * @enum {String}
         * @namespace
         */
        EVENTS: {
            /**
             * @default
             * @constant
             */
            DATE_CHANGED: "dateChanged",
            /**
             * @default
             * @constant
             */
            DONE: "done"
        },

        /**
         * func1
         * @memberOf Module2
         * @param obj {FooBean}
         * @param callback {function(Number, Car): Array.<Part>}
         * @return Boolean
         */
        func1: function (obj, callback) {

            /** @type Car */
            var car = $.parseJSON("");
            if (obj.age > 10) {
                return callback(10, car).length > 10;
            }
            return false;
        },

        /**
         * 绑定事件
         * @memberOf Module2
         * @param eventName {String}
         * @param eventHandler {EventHandler}
         */
        bind: function (eventName, eventHandler) {
            events.on.apply(events, arguments);
        }
    };
})(jQuery);

/**
 * Person类
 * @class
 * @extends {Class}
 */
var Person = Class.extend(
    /** @lends Person.prototype */
    {
        /**
         * 构造函数
         * @constructs
         * @param car {Car}
         */
        init: function (car) {
            /** @type {Car} */
            this.car = car;
        },

        /**
         * 能否驾驶
         *
         * @return {Boolean}
         */
        canDrive: function () {
            return this.car.size > 10;
        }
    }
);

/**
 * Student类
 * @class
 * @extends {Person}
 */
var Student = Person.extend(
    /** @lends Student.prototype */
    {
        /**
         * 读书
         * @param book {Book}
         */
        readBook: function (book) {
            console.log("i am reading  " + book.name);
        },

        /**
         * 呼叫我
         * @param callback {function(this:Student, Car)}
         */
        callMe : function(callback){
            callback.call(this, this.car);
        }
    }
);

Module1.func1({name: "foo"}, function (num, d) {
    return d.parts && d.parts[0].price > 100;
});

Module1.func4(10);

/** @type {Car} */
var car = {
    name: "BMW",
    size: 10,
    parts: [
        {
            name : "light",
            price : 100
        },
        {
            name : "wheel",
            price : 200
        }
    ]
};

var p = new Person(car);
p.canDrive();

var s = new Student(car);
s.canDrive();
s.callMe(function(d){
    this.readBook(d.name);
});

Module2.bind("", "");



/**
 * @name highlightSearchTerm
 * @function
 * @global
 * @param {string} term - The search term to highlight.
 */
eval("window.highlightSearchTerm = function(term) {};");


highlightSearchTerm("");


/**
 * @constructor
 * @template T
 */
Foo = function() {};
/** @return {T} */
Foo.prototype.get = function() {};

/** @param {T} t */
Foo.prototype.set = function(t) {};

/** @type {Foo.<FooBean>} */
var foo = new Foo();

foo.set("a");