export const mochaHooks = {
  beforeAll() {
    console.log('🚀 Mocha Global Setup — runs before all tests');
  },

  afterAll() {
    console.log('🏁 Mocha Global Teardown — runs after all tests');
  }
};
