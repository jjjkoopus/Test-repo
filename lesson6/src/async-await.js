const API_URL = 'https://jsonplaceholder.typicode.com/todos';

async function getData() {
    try {
        const response = await fetch(API_URL);
        console.log('Response object:', response);
        console.log('Success:', response.ok, 'Status:', response.status);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        processData(json);

    } catch (error) {
        console.error('An error occurred while fetching data:', error);
    }
}

function processData(json) {
    console.log('🔹 JSON received, starting processing...');
    console.log(json);

    const firstFive = json.slice(0, 5);
    console.log('First 5 TODOs:', firstFive);
}

getData();
