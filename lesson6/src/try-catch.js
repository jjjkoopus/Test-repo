const PRIMARY_URL = 'https://this-service-does-not-exist.invalid/endpoint';
const FALLBACK_URL = 'https://jsonplaceholder.typicode.com/todos';

async function fetchWithFallback() {
    try {
        let response;

        try {
            response = await fetch(PRIMARY_URL);
            if (!response.ok) {
                throw new Error(`Primary service returned bad status: ${response.status}`);
            }
            console.log('Primary service succeeded with status', response.status);
        } catch (primaryError) {
            console.warn('Primary service failed:', primaryError.message);
            console.log('Attempting fallback service...');

            try {
                response = await fetch(FALLBACK_URL);
                if (!response.ok) {
                    throw new Error(`Fallback service returned bad status: ${response.status}`);
                }
                console.log('Fallback service succeeded with status', response.status);
            } catch (fallbackError) {
                throw new Error(`Both primary and fallback requests failed. Fallback error: ${fallbackError.message}`);
            }
        }

        const data = await response.json();
        console.log('Received data (first 5 items if array):', Array.isArray(data) ? data.slice(0, 5) : data);
        return data;

    } catch (finalError) {
        console.error('Final error:', finalError.message);
    }
}

fetchWithFallback();

