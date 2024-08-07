const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

// Fetch breeds and populate the dropdown
async function fetchBreeds() {
    try {
        const response = await fetch(BREEDS_URL);
        const data = await response.json();
        const breeds = Object.keys(data.message);

        const select = document.querySelector('.breeds');
        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching breeds:', error);
    }
}

//  populate the dropdown
fetchBreeds();

const select = document.querySelector('.breeds');
const img = document.querySelector('.dog-img');

select.addEventListener('change', async () => {
    const breed = select.value;
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    img.src = data.message;
});