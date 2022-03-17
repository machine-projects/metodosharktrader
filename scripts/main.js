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