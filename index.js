// GSAP

function myFunction(x) {
  if (x.matches) { // If media query matches
    const timeline = gsap.timeline();

    timeline
    .from(".col1 img", {duration: 1, y: "-60%", opacity:0})
    .from(".intro-text h1", {duration: 0.5, y: "-60%", opacity:0})
    .from(".intro-text p", {duration: 0.5, y: "-60%", opacity:0})
    .from(".intro-text button", {duration: 0.5, y: "-20%", opacity:0})

  } else {
    const timeline = gsap.timeline();

    timeline
    .from(".intro-text h1", {duration: 0.5, y: "-60%", opacity:0})
    .from(".intro-text p", {duration: 0.5, y: "-60%", opacity:0})
    .from(".intro-text button", {duration: 0.5, y: "-60%", opacity:0})
    .from(".col1 img", {duration: 1, y: "-20%", opacity:0})
  }
}

var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
