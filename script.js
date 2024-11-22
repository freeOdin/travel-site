// script.js
const homeButton = document.querySelector('button');

homeButton.addEventListener('click', () => {
    // Get user preferences
    const preferences = {
        destinationType: 'beach',
        country: 'Thailand'
    };

    // Make API call to get recommendations
    fetch('/api/recommendations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(preferences)
    })
    .then(response => response.json())
    .then(data => {
        // Display recommendations
        const recommendations = data.recommendations;
        const recommendationsContainer = document.querySelector('#recommendations');
        recommendationsContainer.innerHTML = '';

        recommendations.forEach(recommendation => {
            const recommendationHTML = `
                <div>
                    <h2>${recommendation.name}</h2>
                    <img src="${recommendation.image}" alt="${recommendation.name}">
                    <p>${recommendation.description}</p>
                </div>
            `;
            recommendationsContainer.insertAdjacentHTML('beforeend', recommendationHTML);
        });
    })
    .catch(error => console.error('Error:', error));
});