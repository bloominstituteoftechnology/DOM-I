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

// Nav items
let navitems = document.querySelectorAll('nav > a');
navitems[0].textContent = siteContent["nav"]["nav-item-1"];
navitems[1].textContent = siteContent["nav"]["nav-item-2"];
navitems[2].textContent = siteContent["nav"]["nav-item-3"];
navitems[3].textContent = siteContent["nav"]["nav-item-4"];
navitems[4].textContent = siteContent["nav"]["nav-item-5"];
navitems[5].textContent = siteContent["nav"]["nav-item-6"];


// appending and prepending links 

let nav = document.querySelector("nav");

let appendLink = document.createElement('a');
appendLink.textContent = "Appended Item";
appendLink.style.color = "green"
nav.appendChild(appendLink);

let prependLink = document.createElement('a');
prependLink.textContent = "Prepended Item";
prependLink.style.color = "green"
nav.prepend(prependLink);

navitems.forEach(function (a) {
  a.style.color = "green";
})

// CTA section

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaH1 = document.querySelector(".cta h1");
ctaH1.textContent = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector(".cta button");
ctaBtn.textContent = siteContent["cta"]["button"];

// an extra button trying to enable/disable an animation. It didn't work!

// let nopeButton = document.createElement("button")
// nopeButton.textContent = "Never mind";
// nopeButton.style.color = "grey"

// let cta = document.querySelector(".cta");
// cta.append(nopeButton);


// middle image

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// text content experiment

let textContentP = document.querySelectorAll(".text-content > p");
textContentP[0].textContent = siteContent["main-content"]["features-content"];
textContentP[1].textContent = siteContent["main-content"]["about-content"];
textContentP[2].textContent = siteContent["main-content"]["services-content"];
textContentP[3].textContent = siteContent["main-content"]["product-content"];
textContentP[4].textContent = siteContent["main-content"]["vision-content"];

let textContentH4 = document.querySelectorAll(".text-content > h4");
textContentH4[0].textContent = siteContent["main-content"]["features-h4"];
textContentH4[1].textContent = siteContent["main-content"]["about-h4"];
textContentH4[2].textContent = siteContent["main-content"]["services-h4"];
textContentH4[3].textContent = siteContent["main-content"]["product-h4"];
textContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

// contact & footer

let contactH4 = document.querySelector(".contact > h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact > p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

// footer

let footer = document.querySelectorAll("footer > p");
footer.textContent = siteContent["footer"]["copyright"];

// Trying to get the coding image rotating by pressing the "Get Started" button. It's not working, but I don't know enough about JS to know why. I found this structure in a Stack Overflow post.

// let timer;
// let turn = 0;

// function turnOn() {
//   timer = setInterval(turnImg, 200);
//   let x = document.querySelector(".cta button");
//   x.disabled = true;
// }

// function turnOff() {
//   clearInterval(timer);
//   let x = document.querySelector(".cta button");
//   x.disabled = false;
// }

// function turnImg() {
//   let x = document.getElementById("cta-img");
//   turn += 60;
//   x.style.transform = "rotate("+ (turn % 360) +"deg)"
// }