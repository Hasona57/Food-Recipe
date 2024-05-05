const ratings = {};

function rateRecipe(recipeId, rating) {
    ratings[recipeId] = rating;
    alert(`You rated Recipe ${recipeId} ${rating} stars!`);
}
document.querySelectorAll('.stars').forEach(stars => {
    const recipeId = stars.dataset.id;
    stars.addEventListener('click', event => {
        const starValue = parseInt(event.target.dataset.value);
        rateRecipe(recipeId, starValue);
        highlightStars(stars, starValue);
    });
});

function rateRecipe(recipeId, rating) {
    ratings[recipeId] = rating;
    alert(`You rated Recipe ${recipeId} ${rating} stars!`);
}

function highlightStars(starsContainer, rating) {
    const stars = starsContainer.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}
function enlargeImage(imgId) {
var originalImgSrc = document.getElementById(imgId).src;
var enlargedImg = document.getElementById("enlargedImg");
    enlargedImg.src = originalImgSrc;
    document.getElementById("enlargedImgContainer").style.display = "block";
}
function closeEnlargedImage() {
    document.getElementById("enlargedImgContainer").style.display = "none";
}
