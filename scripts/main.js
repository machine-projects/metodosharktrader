window.addEventListener("scroll", onScroll);

function onScroll() {
  for (var item of document.querySelectorAll(".animation")) {
    elementVisible(item);
  }
}

function elementVisible(el) {
  let top = el.offsetTop;
  let height = el.offsetHeight;
  let bottom = top + height;

  let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
  let IsBeforeTop = bottom < window.pageYOffset;

  if (!IsOverBottom && !IsBeforeTop) {
        el.classList.add("animate");
  }
}


// TIMER 
var minutes = 59;
var seconds = 59;
const minutesTimer = document.querySelector('#min-counter');
const secondsTimer = document.querySelector('#seconds-counter');

// contador dos minutos
setInterval(() => {
  if (minutes > 0) {
   
  }
  else {
    minutes--;
    minutesTimer.innerHTML = minutes;
  }
}, 60000)

// contador dos minutos
setInterval(() => {
  if (seconds > 0) {
    seconds--;
    secondsTimer.innerHTML = seconds;
  }
}, 1000)

