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
    "address" : "123 Way 456 Street  Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
const logoImg = document.getElementById("logo-img");
logoImg.setAttribute('src', siteContent["nav"]["img-src"])



let links = document.querySelectorAll("a");
//console.log(links);
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];


//class cta-----cta-text
document.querySelector(".cta-text h1").textContent = siteContent["cta"]["h1"];
document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];
document.querySelector("#cta-img").setAttribute("src", siteContent["cta"]["img-src"])

//class main-content-------text-content
let h4Main = document.querySelectorAll(".text-content h4");
h4Main[0].textContent = siteContent["main-content"]["features-h4"];
h4Main[1].textContent = siteContent["main-content"]["about-h4"];
h4Main[2].textContent = siteContent["main-content"]["services-h4"];
h4Main[3].textContent = siteContent["main-content"]["product-h4"];
h4Main[4].textContent = siteContent["main-content"]["vision-h4"];

//class main-content------text-content
let p = document.querySelectorAll(".text-content p");
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];
//class main-content---id middl-img
document.querySelector("#middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"])


//class=contact
document.querySelector(".contact p").textContent = siteContent["contact"]["contact-h4"];
let pContact = document.querySelectorAll(".contact p");
pContact[0].textContent = siteContent["contact"]["address"];
pContact[1].textContent = siteContent["contact"]["phone"];
pContact[2].textContent = siteContent["contact"]["email"];


//footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];


// Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
//parentElement.appendChild(childElement)
// Change the color of the navigation text to be green.
// nav.style.color= "green";