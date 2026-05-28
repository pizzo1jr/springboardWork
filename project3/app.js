const form = document.getElementById('memeForm');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const imageUrlInput = document.getElementById('imageUrl');
const memesContainer = document.getElementById('memesContainer');

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Set form values
  const topText = topTextInput.value.trim();
  const bottomText = bottomTextInput.value.trim();
  const imageUrl = imageUrlInput.value.trim();

  // Validate inputs
  if (!topText || !bottomText || !imageUrl) {
    alert('Please fill in all fields');
    return;
  }

  // Create meme element
  createMeme(topText, bottomText, imageUrl);

  // Clear form
  form.reset();
});

// Function to create and append meme
function createMeme(topText, bottomText, imageUrl) {
  // Create meme div
  const meme = document.createElement('div');
  meme.className = 'meme';

  // Create image container
  const imageContainer = document.createElement('div');
  imageContainer.className = 'meme-image-container';

  // Create image
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Meme';
  img.onerror = function() {
    alert('Failed to load image. Please check the URL.');
    meme.remove();
  };

  // Create top text
  const topTextEl = document.createElement('div');
  topTextEl.className = 'meme-text top-text';
  topTextEl.textContent = topText;

  // Create bottom text
  const bottomTextEl = document.createElement('div');
  bottomTextEl.className = 'meme-text bottom-text';
  bottomTextEl.textContent = bottomText;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '✕ Delete';
  deleteBtn.addEventListener('click', function() {
    meme.remove();
  });

  // Append elements
  imageContainer.appendChild(img);
  imageContainer.appendChild(topTextEl);
  imageContainer.appendChild(bottomTextEl);
  imageContainer.appendChild(deleteBtn);
  meme.appendChild(imageContainer);
  memesContainer.appendChild(meme);
}