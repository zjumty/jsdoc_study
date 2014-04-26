/**
 * doSomething is a function
 * @param {String} str  a string parameter
 * @param {Number} num  a number parameter
 * @return {{name: String, age: Number}}
 */
var doSomething = function (str, num) {
    return {name: str, age: num + 1};
};

doSomething(1, "terry");
doSomething("terry", 1);

/**
 * doSomething is a function
 * @param {String} str  a string parameter
 * @param {Number=} num  a number parameter
 * @return {{name: String, age: Number}}
 */
var doSomething2 = function (str, num) {
    num = num || 18;
    return {name: str, age: num + 1};
};

doSomething2("terry", 1);
doSomething2("terry");

/**
 * doSomething is a function
 * @param {String} str  a string parameter
 * @param {Number} num  a number parameter
 * @return {{name: String, age: Number=}}
 */
var doSomething3 = function (str, num) {
    return {name: str};
};

/**
 * doSomething is a function
 * @param {String} str  a string parameter
 * @param {Number} num  a number parameter
 * @return {!String}
 */
var doSomething4 = function (str, num) {
    return null;
};

var val4 = doSomething4("a", 1);
if (val4 == null) {

}

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
         * @param {FooBean} obj
         * @param {function(Number, Car): Array.<Part>} callback
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
         * @param {Car} obj
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
         * @param {Number} num
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
         * @param {FooBean} obj
         * @param {function(Number, Car): Array.<Part>} callback
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
         * @param {String} eventName
         * @param {EventHandler} eventHandler
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

var person = new Person({name:"text", size:18});
person.canDrive();

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
        callMe: function (callback) {
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
            name: "light",
            price: 100
        },
        {
            name: "wheel",
            price: 200
        }
    ]
};

var p = new Person(car);
p.canDrive();

var s = new Student(car);
s.canDrive();
s.callMe(function (d) {
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
Foo = function () {
};
/** @return {T} */
Foo.prototype.get = function () {
};

/** @param {T} t */
Foo.prototype.set = function (t) {
};

/** @type {Foo.<FooBean>} */
var foo = new Foo();

foo.set("a");
foo.get().

/**
 * A shape.
 * @interface
 */
function Shape() {
}
Shape.prototype.draw = function () {
};

/**
 * A polygon.
 * @interface
 * @extends {Shape}
 */
function Polygon() {
}
Polygon.prototype.getSides = function () {
};

var poly = new Polygon();

/**
 * A circle.
 * @class
 * @implements {Polygon}
 */
function Circle() {
}
Circle.prototype.draw = function () {
};
Circle.prototype.getSides = function () {
};

/**
 * A circle.
 * @class
 * @extends {Circle}
 */
function CircleExt() {
}
CircleExt.prototype.move = function(){};

var ce = new CircleExt();

/**
 * A airplane.
 * @constructor
 * @final
 */
function AirPlane() {
}
/**
 *
 */
AirPlane.prototype.fly = function () {
};

/**
 * A jet.
 * @class
 * @extends {AirPlane}
 */
function Jet() {
}
Jet.prototype = new AirPlane();
/**
 * @override
 */
Jet.prototype.fly = function () {
};


/**
 * Employee virtual Type
 * @typedef {Object} Employee
 * @property {String} name
 * @property {Number} age
 */

/**
 * Manager virtual Type
 * @typedef {Object} Manager
 * @property {String} name
 * @property {Number} age
 * @property {Array.<Employee>} employees
 */

/**
 * a function that a manager can make a order
 * @param {Manager} manager
 */
var makeOrder = function (manager) {

};

/** @type Manager */
var manger = $.parseJSON("{...}");

/**
 *
 * @param {function(this:HTMLTableElement, Number)} f
 * @param {String} otherData
 */
var doSomething5 = function (f, otherData) {

};

doSomething5(function (num) {
    //this.
}, "text");


/**
 *
 * @param {function(new:Employee, Number)} Factory
 * @param {String} otherData
 */
var doSomething6 = function (Factory, otherData) {
    var emp = new Factory(2);

};

/**
 *
 * @param {function(string, ...[number])} f
 * @param {String} otherData
 */
var doSomething7 = function (f, otherData) {
    f("terry");
    f("terry", 1);
    f("terry", 1, 2, 3);
    f("terry", 1, 2, 3, 4);
    f(1, 2, 3);
};


/**
 *
 * @param {...number} args
 */
var doSomething8 = function (args) {

};

doSomething8(1, 2, 3, 4);
doSomething8(1, "t", 2);

/**
 *
 * @param {Number} age
 * @param {String=} name
 */
var doSomething9 = function (age, name) {

};

doSomething9(1);
doSomething9(1, "a");

/**
 *
 * @param {*} obj
 * @param {...function} methods
 */
var addMember = function(obj, methods){
};

/** @namespace */
var Tools = {};

/**
 * @memberOf Tools
 * @param {String} str
 **/
var hammer = function(str) {
};

/**
 * @memberOf Tools
 * @param {String} str
 * @private
 **/
var sickle = function(str) {
};

addMember(Tools, hammer, sickle);

Tools.sickle("aaa");

