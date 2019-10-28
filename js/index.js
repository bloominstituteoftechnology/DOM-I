const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headlogo = document.getElementById("cta-img");
headlogo.setAttribute('src', siteContent["cta"]["img-src"]);

let midlogo = document.getElementById("middle-img");
midlogo.setAttribute('src', siteContent["main-content"]["middle-img-src"] )


let top_a = document.querySelectorAll("a");
top_a[0].textContent = siteContent.nav["nav-item-1"];
top_a[1].textContent = siteContent.nav["nav-item-2"];
top_a[2].textContent = siteContent.nav["nav-item-3"];
top_a[3].textContent = siteContent.nav["nav-item-4"];
top_a[4].textContent = siteContent.nav["nav-item-5"];
top_a[5].textContent = siteContent.nav["nav-item-6"];

let mainTxt = document.querySelector("h1")
mainTxt.textContent = siteContent.cta["h1"]

let button = document.querySelector("button");
button.textContent = siteContent.cta["button"];
button.style.green

let botSubTitles = document.querySelectorAll("h4");
botSubTitles[0].textContent = siteContent["main-content"]["features-h4"];
botSubTitles[1].textContent = siteContent["main-content"]["about-h4"];
botSubTitles[2].textContent = siteContent["main-content"]["services-h4"];
botSubTitles[3].textContent = siteContent["main-content"]["product-h4"];
botSubTitles[4].textContent = siteContent["main-content"]["vision-h4"];

let botCont = document.querySelectorAll("p");
botCont[0].textContent = siteContent["main-content"]["features-content"];
botCont[1].textContent = siteContent["main-content"]["about-content"];
botCont[2].textContent = siteContent["main-content"]["services-content"];
botCont[3].textContent = siteContent["main-content"]["product-content"];
botCont[4].textContent = siteContent["main-content"]["vision-content"];

let cont = document.querySelector(".contact h4")
cont.textContent = siteContent["contact"]["contact-h4"]

let contInfo = document.querySelectorAll(".contact p")
contInfo[0].textContent = siteContent["contact"]["address"]
contInfo[1].textContent = siteContent["contact"]["phone"]
contInfo[2].textContent = siteContent["contact"]["email"]

let foot = document.querySelector("footer")
foot.textContent = siteContent["footer"]["copyright"]


// Created elements


const invest = document.createElement("a");
invest.textContent = "Invest";


const newElement = document.querySelector('header nav');

newElement.prepend(invest)


const time = document.createElement("a");
time.textContent = "Time";


const ele = document.querySelector('header nav');

ele.appendChild(time)

top_a.forEach(element => {
  element.style.color='green';
})

// Stretch

button.style.color = "green";
time.style.color = "green";
invest.style.color = "green";

botCont.forEach(element => {
  element.style.fontSize= "1.2rem"
});

botSubTitles.forEach(element => {
  element.style.fontSize= "1.5rem"
});

const body = document.querySelector('body')

button.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  mainTxt.style.color= "green";
  botCont.forEach(element => {
    element.style.color = "green"
  });
  botSubTitles.forEach(element => {
    element.style.color= "green"
  });
  logo.style.backgroundColor = "green"

})

button.addEventListener("dblclick", () => {
  body.style.backgroundColor = "white";
  mainTxt.style.color= "black";
  botCont.forEach(element => {
    element.style.color = "black"
  });
  botSubTitles.forEach(element => {
    element.style.color= "black"
  });
  logo.style.backgroundColor = "white"

})


