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
    // else {
    //   entry.target.classList.remove('slide-in')
    // }
  })
}

const observer = new IntersectionObserver(addSlideIn, options);

divs.forEach(div => {
  observer.observe(div);
})


//form validation
if(document.getElementById('subscribeForm')) {
  const form = document.getElementById('subscribeForm')
  const submitButton = document.querySelector('.submit')
  const successMessage = document.getElementById('form-submitted-msg')

  const formElements = [ ...form.elements ]

  const allInputsValid = () => {
    const valid = formElements.every((element) => {
      let letters = /^[A-Za-z]+$/;
      if(formElements.indexOf(element) == 0 || formElements.indexOf(element) == 1){
        if(element.value.match(letters) != null)
        return true ;
      }else
        return element.checkValidity();
    })

    return valid;
  }

  const handleChange = () => {
    let letters = /^[A-Za-z]+$/;
    function letterOnlyCheck(element) {
      if(element.value.match(letters) == null){          
        element.style.borderColor = 'red'
        element.nextElementSibling.style.color = 'red'
        element.nextElementSibling.style.display = 'block'
        element.nextElementSibling.innerText = "Names must only have letters" 
    } 
  }
    formElements.forEach((element) => {
     
        if (!element.checkValidity() && element.nodeName !== 'BUTTON') {
          element.style.borderColor = 'red'
          element.nextElementSibling.style.color = 'red'
          element.nextElementSibling.style.display = 'block'
          element.previousElementSibling.style.color = 'red'
          element.nextElementSibling.innerText = "Required" 

          if(formElements.indexOf(element) == 3 && element.value != '' ){
            element.nextElementSibling.innerText = "invalid phone number or phone number format" 
          }
        }

        if (element.checkValidity() && element.nodeName !== 'BUTTON' && element.nextElementSibling != null) {
          element.style.borderColor = '#CED4DA'
          element.nextElementSibling.style.color = '#CED4DA'
          element.nextElementSibling.style.display = 'none'
          element.previousElementSibling.style.color = '#212529'
          if(formElements.indexOf(element) == 0 || formElements.indexOf(element) == 1){
            letterOnlyCheck(element);
          }
        }       
      })
    
  
    if (allInputsValid()) {
      submitButton.removeAttribute('disabled', '')
    } else {
      submitButton.setAttribute('disabled', '')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (allInputsValid()) {
      successMessage.style.display = 'block'
      form.reset()
      submitButton.setAttribute('disabled', '')

      setTimeout(() => {
        successMessage.style.display = 'none'
      }, 3000)
    }
  }

  formElements.forEach((element) => {
    element.addEventListener('change', handleChange);
  })

  form.addEventListener('submit', (e) => handleSubmit(e));
}

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