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

function showOrHideElement(element) {
  let getElement = document.querySelector(`${element}`).classList;
  let insHide = false;
  getElement.forEach(e => {
    if (e == 'collapse') insHide = true;
  })

  switch (insHide) {
    case true:
      getElement.remove('collapse')
      break;
    case false:
      getElement.add('collapse')
      break;
  }

}













// TIMER 
var minutes = 14;
var seconds = 60;
const minutesTimer = document.querySelector('#min-counter');
const secondsTimer = document.querySelector('#seconds-counter');

// contador dos minutos
setInterval(() => {
  if (minutes == 0) {
   clearInterval();
  }
  else {
    minutes--;
    minutesTimer.innerHTML = "<b>" + minutes + "</b>";
  }
}, 60000)

// contador dos minutos
setInterval(() => {
  if (minutes == 0) {
    clearInterval();
  }
  else if (seconds == 0) {
    seconds = 59
  }
  else {
    seconds--;
    secondsTimer.innerHTML = "<b>" + seconds + "</b>";
  }
}, 1000)

