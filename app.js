// Scroll Progress Car 
function updateProgressBar(){
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
  document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
}

document.addEventListener('scroll', updateProgressBar);


// Loading Animation
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display="none";
})



