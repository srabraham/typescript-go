//// [tests/cases/conformance/async/es5/awaitBinaryExpression/awaitBinaryExpression4_es5.ts] ////

//// [awaitBinaryExpression4_es5.ts]
declare var a: boolean;
declare var p: Promise<boolean>;
declare function before(): void;
declare function after(): void;
async function func(): Promise<void> {
    before();
    var b = (await p, a);
    after();
}

//// [awaitBinaryExpression4_es5.js]
async function func() {
    before();
    var b = (await p, a);
    after();
}
