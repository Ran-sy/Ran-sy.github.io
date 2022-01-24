//import values from storage
//document.getElementById("profileImg").src = localStorage.getItem("profileImg");
//leaveCheck
function leaveCheck(){
    alert('you are leaveing\n BYE');
} 
//edit image
function editImg(){ 
    let imgURL = prompt("Enter the picture url", "EX: picure.png");
    if(imgURL == "" || imgURL == null){
        alert("enter a valid value");
    }
    else{
        if (confirm("Are you sure\nIf you press ok the old picture will be gone for good!")) {
            localStorage.setItem("profileImg", imgURL);
            document.getElementById("profileImg").src = imgURL;
            alert("picture's link updated successfully to " + imgURL);
        } else {
            alert('picture update canceled')
        }
    }
}
//acheivements
function updateAchievementList(){
    
}
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
