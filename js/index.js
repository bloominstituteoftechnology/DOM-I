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

// // Step 1: Create a new tag
// const newElement = document.createElement('p');

// // Step 2: Set up the parent reference
// const homeElement = document.querySelector('.home');

// // Step 3: appendChild or prepend the child to the parent
// homeElement.appendChild(newElement);

// // Step 4: Update the value
// newElement.innerText = "Testing, 1,2,3";

let navagation = document.querySelectorAll("a");

navagation[0].innerText = siteContent["nav"]["nav-item-1"];
navagation[1].innerText = siteContent["nav"]["nav-item-2"];
navagation[2].innerText = siteContent["nav"]["nav-item-3"];
navagation[3].innerText = siteContent["nav"]["nav-item-4"];
navagation[4].innerText = siteContent["nav"]["nav-item-5"];
navagation[5].innerText = siteContent["nav"]["nav-item-6"];

navagation.forEach (element =>  element.style.color= "green")

// navagation[0].style.color = "green";
// navagation[1].style.color = "green";
// navagation[2].style.color = "green";
// navagation[3].style.color = "green";
// navagation[4].style.color = "green";
// navagation[5].style.color = "green";

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

let theCta = document.querySelector("h1")
theCta.innerText = siteContent["cta"]["h1"];

let theButton = document.querySelector("button")
theButton.innerHTML = siteContent["cta"]["button"];

let headersFour = document.querySelectorAll("h4")
headersFour[0].innerHTML = siteContent["main-content"]["features-h4"];
headersFour[1].innerHTML = siteContent["main-content"]["about-h4"];
headersFour[2].innerHTML = siteContent["main-content"]["services-h4"];
headersFour[3].innerHTML = siteContent["main-content"]["product-h4"];
headersFour[4].innerHTML = siteContent["main-content"]["vision-h4"];

headersFour[5].innerHTML = siteContent["contact"]["contact-h4"];


let paragraphs = document.querySelectorAll("p")

paragraphs[0].innerHTML = siteContent["main-content"]["features-content"];
paragraphs[1].innerHTML = siteContent["main-content"]["about-content"];
paragraphs[2].innerHTML = siteContent["main-content"]["services-content"];
paragraphs[3].innerHTML = siteContent["main-content"]["product-content"];
paragraphs[4].innerHTML = siteContent["main-content"]["vision-content"];

paragraphs[5].innerHTML = siteContent["contact"]["address"];
paragraphs[6].innerHTML = siteContent["contact"]["phone"];
paragraphs[7].innerHTML = siteContent["contact"]["email"];

paragraphs[8].innerHTML = siteContent["footer"]["copyright"];

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const newElement = document.createElement('p');
const homeElement = document.querySelector('nav');
homeElement.appendChild(newElement);
newElement.innerText = "People!";

const newElementTwo = document.createElement('p');
homeElement.prepend(newElementTwo);
newElementTwo.innerText = "Random";

