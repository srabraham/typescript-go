//// [tests/cases/conformance/dynamicImport/importCallExpressionAsyncES2020.ts] ////

//// [test.ts]
export async function fn() {
    const req = await import('./test') // ONE
}

export class cl1 {
    public async m() {
        const req = await import('./test') // TWO
    }
}

export const obj = {
    m: async () => {
        const req = await import('./test') // THREE
    }
}

export class cl2 {
    public p = {
        m: async () => {
            const req = await import('./test') // FOUR
        }
    }
}

export const l = async () => {
    const req = await import('./test') // FIVE
}


//// [test.js]
export async function fn() {
    const req = await import('./test'); // ONE
}
export class cl1 {
    async m() {
        const req = await import('./test'); // TWO
    }
}
export const obj = {
    m: async () => {
        const req = await import('./test'); // THREE
    }
};
export class cl2 {
    p = {
        m: async () => {
            const req = await import('./test'); // FOUR
        }
    };
}
export const l = async () => {
    const req = await import('./test'); // FIVE
};
