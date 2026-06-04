// API Key
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
// Grab suprise me button by its ID 
const generateGifFunction = document.getElementById("show-gif-btn");
// Grab the Clear GIFS button by its ID 
const removeGifs = document.getElementById("delete-gif-btn");
// Grab the display container where the gif will actually show
const showGif = document.getElementById("display");


// When Suprise ME is clicked, run generateGIF fuction
generateGifFunction.addEventListener("click", generateGif);
// When Clear GIFS is selected, run clearGifs function
removeGifs.addEventListener("click", clearGifs);

// Array created to keep track of GIFS and render them one at a time in the correct order
let shownGifs = [];

// Limit set to 25 instead of 10 just because 
// grabs a gif of the item using the api.
async function getGifFromAPI(item) {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${item}&api_key=${giphyApiKey}&limit=25`);
    return response.data.data.map((gifValue) => {
        return {
            gifURL: gifValue.images.fixed_width.url
        }
    });
}

// gets search input field
function getData() {
    const dataInput = document.getElementById("search-bar");
    // returns whatever was typed into the search gifs input
    return dataInput.value;
}

// Prevents default behavior (page refresh etc)
async function generateGif(e) {
    e.preventDefault();

    // get text typed in search bar 
    const inputData = getData();


    if (!inputData) return;

    // call the API and get an array of gifs back
    const getGif = await getGifFromAPI(inputData);

    // Find a GIF that hasn't been shown yet
    const newGif = getGif.find(gif => !shownGifs.includes(gif.gifURL));
    // If we find a new GIF
    if (newGif) {
        shownGifs.push(newGif.gifURL);
        renderGifs();
        // if no more GIFs are left 
    } else {
        alert("No more unique GIFs found for that search!");
    }
}

// Clears display area (array helps to build)
function renderGifs() {
    showGif.innerHTML = "";

    // Create rows every 5 GIFs gets a new row
    for (let i = 0; i < shownGifs.length; i += 5) {
        const row = document.createElement("div");
        row.classList.add("row");

        // Add up to 5 GIFs per row
        for (let j = i; j < i + 5 && j < shownGifs.length; j++) {
            const image = document.createElement("img");
            image.src = shownGifs[j];
            row.appendChild(image);
        }
        // append child to row
        showGif.appendChild(row);
    }
}
// CLEAR the things
function clearGifs() {
    showGif.innerHTML = "";
    shownGifs = [];
}
