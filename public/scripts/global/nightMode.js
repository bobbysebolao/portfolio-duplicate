console.log("hey");

let nightMode = document.querySelector(".nightMode");

if (typeof standardStylesheet === 'undefined') {
let standardStylesheet = document.querySelector("#standardStylesheet");
}

//ACTIVATING NIGHT mode
nightMode.addEventListener("click", () => {
  console.log("Tyler", standardStylesheet)

  let homeTitleWordOne = document.querySelector(".home-title__wordone");
  let homeTitleWordTwo = document.querySelector(".home-title__wordtwo");
  let homeTitleWordThree = document.querySelector(".home-title__wordthree");

  const homeSubtitle = document.querySelector(".home-subtitle");

  if (standardStylesheet.href.match("/css/blog.css")) {
    standardStylesheet.href = "/css/night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } 
  else if (standardStylesheet.href.match("/css/night.css")){
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  }
  else if (standardStylesheet.href.match("/css/work.css")){
    standardStylesheet.href = "/css/work-night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  }
  else if (standardStylesheet.href.match("/css/work-night.css")){
    standardStylesheet.href = "/css/work.css";
    sessionStorage.removeItem("autosave");
  }
  else if (standardStylesheet.href.match("/css/about.css")){
    standardStylesheet.href = "/css/about-night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  }
  else if (standardStylesheet.href.match("/css/about-night.css")){
    standardStylesheet.href = "/css/about.css";
    sessionStorage.removeItem("autosave");
  }
  else if (standardStylesheet.href.match("/css/home.css")){
    homeTitleWordOne.textContent = "Shhh ";
    homeTitleWordTwo.textContent = " I'm";
    homeTitleWordThree.textContent = "Sleeping!";

    homeSubtitle.textContent = "I sometimes dream in black and white";
    standardStylesheet.href = "/css/home-night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  }
  else if (standardStylesheet.href.match("/css/home-night.css")){
    homeTitleWordOne.textContent = "Hi ";
    homeTitleWordTwo.textContent = " I'm";
    homeTitleWordThree.textContent = "Bobby";

    homeSubtitle.textContent = "I tell stories with prose and code";
    standardStylesheet.href = "/css/home.css";
    sessionStorage.removeItem("autosave");
  }
  else {
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  }
});
