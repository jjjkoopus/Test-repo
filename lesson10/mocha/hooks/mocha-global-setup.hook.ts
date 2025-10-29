// mocha/hooks/mocha-global-setup.hook.ts

export const mochaHooks = {
    beforeAll() {
        console.log('🚀 Global setup — runs once before all tests');
    },

    afterAll() {
        console.log('🏁 Global teardown — runs once after all tests');
    }
};
