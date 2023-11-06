// Get the image and the modal elements
// var img = document.getElementsByClassName("img-decoration");
// Get all elements with the class 'expandable-image'
var expandableImages = document.getElementsByClassName("img-decoration");

// Loop through all expandable images
for (var i = 0; i < expandableImages.length; i++) {
    var img = expandableImages[i];
    img.onclick = function() {
        // Get the modal and modal image
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");

        // Open the modal and set the modal image source
        modal.style.display = "block";
        modalImg.src = this.src;

        // Close the modal when the close button is clicked
        var close = document.getElementsByClassName("close")[0];
        close.onclick = function() {
            modal.style.display = "none";
        }
    }
}

