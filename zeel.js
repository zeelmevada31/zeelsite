document.onkeydown = function (e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
      var alertBox = document.getElementById("alert-box");
      alertBox.style.display = "block";
      setTimeout(function() {
        alertBox.style.display = "none";
      }, 0.50);
      return false;
    } else {
      return true;
    }
  }

document.getElementById('closeupdate').addEventListener('click', () => {
    document.getElementById('update-log').style.display = "none"
})


// NAvbar icon

var navbtn = document.getElementById('navbtn')

navbtn.addEventListener('click', () => {
    let navmenu = document.querySelector('#navbtn i')
    if (navmenu.classList.contains('fa-bars')) {
        navmenu.classList.remove('fa-bars')
        navmenu.classList.add('fa-times')
    }
    else if (navmenu.classList.contains('fa-times')) {
        navmenu.classList.remove('fa-times')
        navmenu.classList.add('fa-bars')
    }
})

// /NAvbar icon

var homeNav = document.getElementById('homeNav')
var projectsNav = document.getElementById('projectsNav')
var aboutNav = document.getElementById('aboutNav')
var body = document.getElementById('body')
var ltst = document.getElementById('ltst')

homeNav.addEventListener('click', () => {
    let home = document.getElementById('home')
    let projects = document.getElementById('projects')
    let about = document.getElementById('about')


    home.style.display = "block"
    projects.style.display = "none"
    about.style.display = "none"

    // holding nav style

    homeNav.style.background = "linear-gradient(to top, rgba(128, 128, 128, 0.16) 20%, transparent 80%)"
    homeNav.style.borderBottom = "1px solid blue"
    homeNav.style.color = "rgba(44, 11, 173, 0.978)"

    projectsNav.style.background = null
    projectsNav.style.borderBottom = null
    projectsNav.style.color = null

    aboutNav.style.background = null
    aboutNav.style.borderBottom = null
    aboutNav.style.color = null

    if (window.matchMedia("(max-width: 740px)").matches) {
        navbtn.click()
        body.style.background = "url('img/smsl3.jpg') no-repeat"
        body.style.backgroundSize = "cover"
        body.style.backgroundPosition = "center"
    }
   else if(window.matchMedia("(min-width: 740px)").matches) {
        body.style.background = "url('img/opfinal3.jpg') no-repeat"
        body.style.backgroundSize = "cover"
        body.style.backgroundPosition = "center"
    }

})
projectsNav.addEventListener('click', () => {
    let home = document.getElementById('home')
    let projects = document.getElementById('projects')
    let about = document.getElementById('about')

    body.style.background = "linear-gradient(to bottom, #4B0082, #6A5ACD, #7B68EE)"
    body.style.backgroundSize = "cover"
    body.style.backgroundPosition = "center"

    projects.style.display = "block"
    home.style.display = "none"
    about.style.display = "none"

    // holding nav style

    projectsNav.style.background = "linear-gradient(to top, rgba(128, 128, 128, 0.16) 20%, transparent 80%)"
    projectsNav.style.borderBottom = "1px solid blue"
    projectsNav.style.color = "rgba(44, 11, 173, 0.978)"

    homeNav.style.background = null
    homeNav.style.borderBottom = null
    homeNav.style.color = null

    aboutNav.style.background = null
    aboutNav.style.borderBottom = null
    aboutNav.style.color = null

    if (window.matchMedia("(max-width: 740px)").matches) {
        navbtn.click()
    }

})
aboutNav.addEventListener('click', () => {
    let home = document.getElementById('home')
    let projects = document.getElementById('projects')
    let about = document.getElementById('about')

    body.style.background = "#dcdcdc"
    body.style.backgroundPosition = "center"

    about.style.display = "block"
    home.style.display = "none"
    projects.style.display = "none"


    // holding nav style

    aboutNav.style.background = "linear-gradient(to top, rgba(128, 128, 128, 0.16) 20%, transparent 80%)"
    aboutNav.style.borderBottom = "1px solid blue"
    aboutNav.style.color = "rgba(44, 11, 173, 0.978)"

    projectsNav.style.background = null
    projectsNav.style.borderBottom = null
    projectsNav.style.color = null

    homeNav.style.background = null
    homeNav.style.borderBottom = null
    homeNav.style.color = null

    if (window.matchMedia("(max-width: 740px)").matches) {
        navbtn.click()
    }

})

ltst.addEventListener('click', () => {
    let home = document.getElementById('home')
    let projects = document.getElementById('projects')
    let about = document.getElementById('about')

    about.style.display = "block"
    home.style.display = "none"
    projects.style.display = "none"

    body.style.background = "#dcdcdc"
    body.style.backgroundPosition = "center"
    // holding nav style

    aboutNav.style.background = "linear-gradient(to top, rgba(128, 128, 128, 0.16) 20%, transparent 80%)"
    aboutNav.style.borderBottom = "1px solid blue"
    aboutNav.style.color = "rgba(44, 11, 173, 0.978)"

    projectsNav.style.background = null
    projectsNav.style.borderBottom = null
    projectsNav.style.color = null

    homeNav.style.background = null
    homeNav.style.borderBottom = null
    homeNav.style.color = null

})

