const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navA = document.querySelectorAll('a');
navA[0].textContent = siteContent.nav["nav-item-1"];
navA[1].textContent = siteContent.nav["nav-item-2"];
navA[2].textContent = siteContent.nav["nav-item-3"];
navA[3].textContent = siteContent.nav["nav-item-4"];
navA[4].textContent = siteContent.nav["nav-item-5"];

let nav = document.querySelectorAll('a');
nav = Array.from(nav);
nav.map(x => x.style.color = 'green');

//Append and prepend
nav = document.querySelector('nav')

let nav1 = document.createElement('a')
nav1.textContent = 'Nav Ends';
nav.appendChild(nav1);

let nav2 = document.createElement('a')
nav2.textContent = 'Nav Starts';
nav.prepend(nav2);

let navImg = document.querySelector('header img');
navImg.src = siteContent.nav["img-src"];
//end Append and prepend

//CTA Start
document.querySelector('h1').textContent = siteContent.cta['h1'];
document.querySelector('h1').style.color = 'green';

document.querySelector('button').textContent = siteContent.cta['button'];
document.querySelector('#cta-img').setAttribute('src', siteContent['cta']['img-src']);

//CTA End
//MainContent Start
document.querySelector(".mid-page-accent.jpg").src = siteContent.mainContent["mid-page-accent.jpg"];

//h1 headers Start
document.querySelectorAll("h4")[0].textContent = siteContent.mainContent["features-h4"];
document.querySelectorAll("h4")[1].textContent = siteContent.mainContent["about-h4"];
document.querySelectorAll("h4")[2].textContent = siteContent.mainContent["services-h4"];
document.querySelectorAll("h4")[3].textContent = siteContent.mainContent["product-h4"];
document.querySelectorAll("h4")[4].textContent = siteContent.mainContent["vision-h4"];


//h1 headers End

document.querySelectorAll(".main-content p")[0].textContent = siteContent.mainContent["features-content"];
document.querySelectorAll(".main-content p")[1].textContent = siteContent.mainContent["about-content"];
document.querySelectorAll(".main-content p")[2].textContent = siteContent.mainContent["services-content"];
document.querySelectorAll(".main-content p")[3].textContent = siteContent.mainContent["product-content"];
document.querySelectorAll(".main-content p")[4].textContent = siteContent.mainContent["vision-content"];


//MainContent Ends

//Contact Starts
document.querySelectorAll(".contact p")[0].textContent = siteContent.contact["address"];
document.querySelectorAll(".contact p")[1].textContent = siteContent.contact["phone"];
document.querySelectorAll(".contact p")[2].textContent = siteContent.contact["email"];


//Contact End
//Footer Starts
document.querySelector('footer').textContent = siteContent.footer['copyright'];


//Footer ends


//stretch
let button = document.querySelector('button')
button.addEventListener('click', function() {
    if (button.textContent === 'Clicked!') {
        button.textContent = 'Get Started'
    } else {
        button.textContent = 'Clicked!'
    }
}) 