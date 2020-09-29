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
    "h1": ("DOM<br>Is<br>Awesome"),
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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//nav bar

const navPreApp = document.querySelector("nav");

navPreApp.append("Append");
navPreApp.prepend("Prepend");
navPreApp.style.color = "green";

const navGreen = document.querySelectorAll('nav a');
const nav1 = document.querySelectorAll('nav a');

nav1[0].innerHTML = siteContent['nav']['nav-item-1'];
navGreen[0].style.color = "green";

nav1[1].innerHTML = siteContent['nav']['nav-item-2'];
navGreen[1].style.color = "green";

nav1[2].innerHTML = siteContent['nav']['nav-item-3'];
navGreen[2].style.color = "green";

nav1[3].innerHTML = siteContent['nav']['nav-item-4'];
navGreen[3].style.color = "green";

nav1[4].innerHTML = siteContent['nav']['nav-item-5'];
navGreen[4].style.color = "green";

nav1[5].innerHTML = siteContent['nav']['nav-item-6'];
navGreen[5].style.color = "green";

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//cta

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent['cta']['button'];

let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//main content

let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const mainTitle = document.querySelectorAll(".text-content h4");
const mainText = document.querySelectorAll(".text-content p");

mainTitle[0].innerText = siteContent["main-content"]["features-h4"];
mainText[0].innerText = siteContent["main-content"]["features-content"];

mainTitle[1].innerText = siteContent["main-content"]["about-h4"];
mainText[1].innerText = siteContent["main-content"]["about-content"];

mainTitle[2].innerText = siteContent["main-content"]["services-h4"];
mainText[2].innerText = siteContent["main-content"]["services-content"];

mainTitle[3].innerText = siteContent["main-content"]["product-h4"];
mainText[3].innerText = siteContent["main-content"]["product-content"];

mainTitle[4].innerText = siteContent["main-content"]["vision-h4"];
mainText[4].innerText = siteContent["main-content"]["vision-content"];

//contact

let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent['contact']['contact-h4'];

const contact = document.querySelectorAll('.contact p');

contact[0].innerHTML = siteContent['contact']['address'];
contact[1].innerText = siteContent['contact']['phone'];
contact[2].innerText = siteContent['contact']['email'];

//footer
const footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];