let menu = document.getElementsByClassName('hamburger')[0];
let menuOn = false;
let curPage = window.location.pathname;

menu.addEventListener('click', showMenu);

function showMenu(){
  if(!menuOn) {
    document.getElementsByClassName('page-links')[0].style.visibility = "visible";
    window.onscroll = function () { window.scrollTo(0, 0); };

    if(curPage.includes("projects")){
      menu.src="../images/exit.png";
    }
    else {
      menu.src="images/exit.png";
    }

    menuOn = true;
  }
  else {
    document.getElementsByClassName('page-links')[0].style.visibility = "hidden";
    window.onscroll=function(){};

    if(curPage.includes("projects")){
      menu.src="../images/Hamburger.png";
    }
    else {
      menu.src="images/Hamburger.png";
    }

    menuOn = false;
  }
}


// .
// Navigation link hovers
// .
let aboutLink = document.getElementById('about-link');
let projectLink = document.getElementById('project-page-link');
let contactLink = document.getElementById('contact-link');

aboutLink.addEventListener('mouseover', aboutOn);
aboutLink.addEventListener('mouseout', colorOff);

projectLink.addEventListener('mouseover', projectOn);
projectLink.addEventListener('mouseout', colorOff);

contactLink.addEventListener('mouseover', contactOn);
contactLink.addEventListener('mouseout', colorOff);

function aboutOn(){
  // aboutLink.style.color = "#fff";
  projectLink.style.color = "#424242";
  contactLink.style.color = "#424242";
}

function projectOn(){
  aboutLink.style.color = "#424242";
  contactLink.style.color = "#424242";
}

function contactOn(){
  aboutLink.style.color = "#424242";
  projectLink.style.color = "#424242";
}

function colorOff(){
  aboutLink.style.color = "#D2D2D2";
  projectLink.style.color = "#D2D2D2";
  contactLink.style.color = "#D2D2D2";
}
