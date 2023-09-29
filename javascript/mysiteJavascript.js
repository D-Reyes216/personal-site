//dark mode
const body = document.querySelector('body');
const gridItems = document.getElementsByClassName('grid-item');

const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode(){
  body.classList.toggle('dark-mode'); 
  const modeMessage = body.classList.contains('dark-mode') ? "Dark Mode" : "Light Mode"
  modeStatus.innerText = modeMessage; 

  body.classList.contains('dark-mode') ? localStorage.setItem("is-dark-mode", true)
  : localStorage.setItem("is-dark-mode", false);

  for(const item of gridItems) {
      item.classList.toggle('dark-mode-div');
  } 
}

modeToggle.addEventListener('click', toggleMode);

//dark mode persist on next page
if (localStorage.getItem('is-dark-mode')=="true") {
  body.classList.add('dark-mode')
  document.getElementById("mode-toggle").checked = true;
  modeStatus.innerText = "Dark Mode";

  for(const item of gridItems) {
  item.classList.toggle('dark-mode-div');
  } 
}


//div intersection slider
const divs = document.querySelectorAll('.grid-item');

const options = {
  threshold: .33
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
    else {
      entry.target.classList.remove('slide-in')
    }
  })
}

const observer = new IntersectionObserver(addSlideIn, options);

divs.forEach(div => {
  observer.observe(div);
})


//image slider logic
function imageSlider(images, previousImage, nextImage){

  let currentIndex = 0;

  function reset() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
  }

  function initializeSlider() {
    reset();
    images[currentIndex].classList.add('active');
  }

  function slideLeft() {
    reset();
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    images[currentIndex].classList.add('active');
  }

  function slideRight() {
    reset();
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    images[currentIndex].classList.add('active');
  }

  initializeSlider();
  

  previousImage.addEventListener('click', function() {
    slideLeft();
  });

  nextImage.addEventListener('click', function() {
    slideRight();
  });
  
}

//image slider 1
const images = document.querySelectorAll('#slider-images img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");

const imageSlider1 = imageSlider(images, previousImage, nextImage);

//image slider 2
const images2 = document.querySelectorAll('#slider-images2 img');
const previousImage2 = document.getElementById("prev2");
const nextImage2 = document.getElementById("next2");

const imageSlider2 = imageSlider(images2, previousImage2, nextImage2);