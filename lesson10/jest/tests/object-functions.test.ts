describe('Object functions basic test', () => {
    test('adds two numbers correctly', () => {
        expect(2 + 2).toBe(4);
    });

    test('compares objects correctly', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 2 };
        expect(obj1).toEqual(obj2);
    });
});
