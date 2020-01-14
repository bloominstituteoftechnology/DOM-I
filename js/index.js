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

let navbar = document.getElementsByTagName("a");
navbar[0].text = siteContent["nav"]["nav-item-1"];
navbar[1].text = siteContent["nav"]["nav-item-2"];
navbar[2].text = siteContent["nav"]["nav-item-3"];
navbar[3].text = siteContent["nav"]["nav-item-4"];
navbar[4].text = siteContent["nav"]["nav-item-5"];
navbar[5].text = siteContent["nav"]["nav-item-6"];

// efficient solution for nav bar
// const navBar = document.querySelectorAll("a");
// navBar.forEach((element,index) => element.text = siteContent["nav"][`nav-item-${index+1}`]);

const mainHeader = document.querySelector('h1');
mainHeader.textContent = siteContent['cta']['h1'];

const btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];

const headerPic = document.querySelector('#cta-img');
headerPic.src = siteContent['cta']['img-src'];

const h4One = document.querySelector('.text-content :first-child');
h4One.textContent = siteContent['main-content']['features-h4'];

const h4Two = document.getElementsByTagName('h4');
h4Two[1].textContent = siteContent['main-content']['about-h4'];

const para1 = document.getElementsByTagName('p');
para1[0].textContent = siteContent['main-content']['features-content'];

const para2 = document.getElementsByTagName('p');
para2[1].textContent = siteContent['main-content']['about-content'];

const centerImage = document.querySelector('#middle-img');
centerImage.src = siteContent['main-content']['middle-img-src'];

const h4Three = document.getElementsByTagName('h4');
h4Three[2].textContent = siteContent['main-content']['services-h4'];

const h4Four = document.getElementsByTagName('h4');
h4Four[3].textContent = siteContent['main-content']['product-h4'];

const h4Five = document.getElementsByTagName('h4');
h4Five[4].textContent = siteContent['main-content']['vision-h4'];

const para3 = document.getElementsByTagName('p');
para3[2].textContent = siteContent['main-content']['services-content'];

const para4 = document.getElementsByTagName('p');
para4[3].textContent = siteContent['main-content']['product-content'];

const para5 = document.getElementsByTagName('p');
para5[4].textContent = siteContent['main-content']['vision-content'];

const h4Six = document.getElementsByTagName('h4');
h4Six[5].textContent = siteContent['contact']['contact-h4'];

const para6 = document.getElementsByTagName('p');
para6[5].textContent = siteContent['contact']['address'];

const para7 = document.getElementsByTagName('p');
para7[6].textContent = siteContent['contact']['phone'];

const para8 = document.getElementsByTagName('p');
para8[7].textContent = siteContent['contact']['email'];


let navbarColor = document.getElementsByTagName("a");
navbarColor[0].style.color = "red";
navbarColor[1].style.color = "red";
navbarColor[2].style.color = "red";
navbarColor[3].style.color = "red";
navbarColor[4].style.color = "red";
navbarColor[5].style.color = "red";

// let navAdd = document.getElementsByTagName('header nav');
let navAdd = document.querySelector('nav');

let Append = document.createElement('a');
Append.style.color = "red";
Append.innerHTML = "Append";
Append.setAttribute('href', '#');
navAdd.appendChild(Append);


let Prepend = document.createElement('a');
Prepend.style.color = "red";
Prepend.innerHTML = "Prepend";
Prepend.setAttribute('href', '#');
navAdd.prepend(Prepend);






// const address = document.getElementsByTagName('p');
// address[5].textContent = siteContent['contact']['address'];
