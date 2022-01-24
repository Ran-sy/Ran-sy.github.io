// user Check function
function userCheck() {
  let person = prompt("Please enter the password to confirm that you are not an imposter:", "Password");
  if (person == "lalaland") {
    document.getElementById("editPage").href = "edit.html";
  } else {
    alert('this password is wrong, please try again!');
  }
}
//import values from storage
//document.getElementById("profileImg").src = localStorage.getItem("profileImg");
//the slide show 
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) { // Next/previous controls
  showSlides(slideIndex += n);
}
function currentSlide(n) { // Thumbnail image controls
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1} 
  //if index is bigger than the num of slides "4", go back to the first slide
  if (n < 1) {slideIndex = slides.length}
  //if index is smaller than the num of slides"0" , go back to the last slide
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
