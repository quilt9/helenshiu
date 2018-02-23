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
