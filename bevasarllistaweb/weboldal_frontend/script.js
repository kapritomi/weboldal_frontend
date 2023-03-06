//--------------------------ELSŐ-----------------------------------------
const square = document.querySelector('.baloldalkep');
square.classList.remove('balkepanimacio');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('balkepanimacio');
      return;
    }

    square.classList.remove('balkepanimacio');
  });
});
observer.observe(document.querySelector('.elso'));
//-----------------------------MÁSODIK----------------------------------
const square1 = document.querySelector('.jobboldalkep');
square.classList.remove('jobbkepanimacio');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square1.classList.add('jobbkepanimacio');
      return;
    }

    square1.classList.remove('jobbkepanimacio');
  });
});
observer1.observe(document.querySelector('.masodik'));
//---------------------------HARMADIK-------------------------------------
const square2 = document.querySelector('.baloldalkep1');
square.classList.remove('balkepanimacio');

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square2.classList.add('balkepanimacio');
      return;
    }

    square2.classList.remove('balkepanimacio');
  });
});
observer2.observe(document.querySelector('.harmadik'));
//-----------------------------NEGYEDIK-----------------------------------
const square3 = document.querySelector('.jobboldalkep1');
square.classList.remove('jobbkepanimacio');

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square3.classList.add('jobbkepanimacio');
      return;
    }

    square3.classList.remove('jobbkepanimacio');
  });
});
observer3.observe(document.querySelector('.negyedik'));
//----------------------------ÖTÖDIK-------------------------------------
const square4 = document.querySelector('.baloldalkep2');
square.classList.remove('balkepanimacio');

const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square4.classList.add('balkepanimacio');
      return;
    }

    square4.classList.remove('balkepanimacio');
  });
});
observer4.observe(document.querySelector('.otodik'));
//--------------------------------PROGRESSBAR---------------------------------------
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}