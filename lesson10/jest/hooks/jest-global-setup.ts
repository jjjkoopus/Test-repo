async function globalSetup(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 10));
    console.log('🚀 Jest Global Setup — runs once before all tests');
}

module.exports = globalSetup;
