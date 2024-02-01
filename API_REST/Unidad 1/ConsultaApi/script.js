const fetchButton = document.getElementById('fetchButton');
const breedSelect = document.getElementById('breed');
const imageContainer = document.getElementById('imageContainer');

fetchButton.addEventListener('click', async () => {
  const selectedBreed = breedSelect.value;
  const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`);
  const data = await response.json();
  const imageUrl = data.message;
  imageContainer.innerHTML = `<img src="${imageUrl}" class="img-fluid" alt="Imagen de perro">`;
});
