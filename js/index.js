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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// NAV LIST
let navList = document.querySelectorAll( "nav a");
console.log(navList);

navList[0].innerHTML = (siteContent["nav"]["nav-item-1"]);
console.log(navList[0]);

navList[1].innerHTML = (siteContent["nav"]["nav-item-2"]);
console.log(navList[1]);

navList[2].innerHTML = (siteContent["nav"]["nav-item-3"]);


navList[3].innerHTML = (siteContent["nav"]["nav-item-4"]);


navList[4].innerHTML = (siteContent["nav"]["nav-item-5"]);


navList[5].innerHTML = (siteContent["nav"]["nav-item-6"]);

//CTA HEADING
let ctaHeading = document.querySelector(".cta-text h1");
ctaHeading.innerHTML = siteContent["cta"]['h1']

// CTA BUTTON
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

// CTA IMG
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// TOP CONTENT
let textContent = document.querySelectorAll(".text-content");


textContent[0].getElementsByTagName("h4").innerHTML = siteContent["main-content"]["features-h4"];
textContent[0].getElementsByTagName("p").innerHTML = siteContent["main-content"]["features-content"];
textContent[1].getElementsByTagName("h4").innerHTML = siteContent["main-content"]["about-h4"];
textContent[1].getElementsByTagName("p").innerHTML = siteContent["main-content"]["about-content"];
 console.log(textContent[1]);

// MIDDLE IMG

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// BOTTOM CONTENT

textContent[2].getElementsByTagName("h4").innerHTML= siteContent["main-content"]["services-h4"];
textContent[2].getElementsByTagName("p").innerHTML= siteContent["main-content"]["services-content"];
textContent[3].getElementsByTagName("h4").innerHTML= siteContent["main-content"]["product-h4"];
textContent[3].getElementsByTagName("p").innerHTML= siteContent["main-content"]["product-content"];
textContent[4].getElementsByTagName("h4").innerHTML= siteContent["main-content"]["vision-h4"];
textContent[4].getElementsByTagName("p").innerHTML= siteContent["main-content"]["vision-content"];




// FOOTER
let foot = document.querySelector("footer p");
foot.innerHTML = (siteContent['footer']['copyright']);



// let navItem1 = document.querySelectorAll("nav a"); 
// navItem1[0].innerHTML = siteContent["nav"]["nav-item-1"]
// let nav2 = document.querySelector('nav');
// nav2.innerHTML = (siteContent["nav"]["nav-item-2"]);

// let nav3 = document.querySelector('nav');
// nav3.innerHTML = (siteContent["nav"]["nav-item-3"]);

// let nav4 = document.querySelector('nav');
// nav4.innerHTML = (siteContent["nav"]["nav-item-4"]);

// let nav5 = document.querySelector('nav');
// nav5.innerHTML = (siteContent["nav"]["nav-item-5"]);

// let nav6 = document.querySelector('nav');
// nav6.innerHTML = (siteContent["nav"]["nav-item-6"]);
