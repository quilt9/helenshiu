

//========================================


//========================================
/* jshint browser: true */

// modal

document.getElementsByClassName("tablink")[0].click();

function openWork(evt, workName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("work");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(workName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}


//========================================
/* jshint browser: true */


// header slider
var myIndex = 0;

function carousel() {

  var i;
  var x = document.getElementsByClassName('mySlides');

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  myIndex++;

  if (myIndex > x.length) {
  	myIndex = 1;
  }
  x[myIndex-1].style.display = "block";

  setTimeout(carousel, 9000);
}

carousel();
