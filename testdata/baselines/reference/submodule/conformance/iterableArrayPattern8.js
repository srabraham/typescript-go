//// [tests/cases/conformance/es6/destructuring/iterableArrayPattern8.ts] ////

//// [iterableArrayPattern8.ts]
class Bar { x }
class Foo extends Bar { y }
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}

var a: Bar, b: string;
[a, ...b] = new FooIterator;

//// [iterableArrayPattern8.js]
class Bar {
    x;
}
class Foo extends Bar {
    y;
}
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
var a, b;
[a, ...b] = new FooIterator;
