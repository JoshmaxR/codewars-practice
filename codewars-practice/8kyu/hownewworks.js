// The new operator in JavaScript creates objects by following these three steps:

// First, it creates a new empty object. (Already done for you here.)
// Next, it sets the new object’s `.__proto__` property to match the prototype property of the function being invoked.
// Finally, the operator invokes the function and passes the new object as the “this” reference.

// Use this understanding of the new operator to create an instance of the object MyObject, but do so without calling "new MyObject()".\

// My solution

var myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.constructor = MyObject;
MyObject.call(myObj);