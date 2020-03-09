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
    "h1": `DOM Is Awesome`,
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
//nav bar
let nav = document.querySelectorAll("nav a");
let navArray = Array.from(nav);
navArray[0].textContent = siteContent["nav"]["nav-item-1"];
navArray[1].textContent = siteContent["nav"]["nav-item-2"];
navArray[2].textContent = siteContent["nav"]["nav-item-3"];
navArray[3].textContent = siteContent["nav"]["nav-item-4"];
navArray[4].textContent = siteContent["nav"]["nav-item-5"];
navArray[5].textContent = siteContent["nav"]["nav-item-6"];
navArray.forEach(element => element.style.color = `green`);
let a = document.createElement('a');
let b = document.createElement('a');
a.textContent = "Home";
b.textContent = "Gallery";
a.style.paddingRight = "30%";
b.style.paddingLeft = "30%";
a.style.color = "green";
b.style.color = "green";
navArray[0].prepend(a);
navArray[5].appendChild(b);
//CTA section
let ctaH1 = document.querySelector("section.cta h1");
ctaH1.textContent = siteContent["cta"]["h1"];
let ctaButton = document.querySelector("section.cta button");
ctaButton.textContent = siteContent["cta"]["button"];
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
//Middle content
let topContentH4 = document.querySelectorAll(".top-content .text-content h4");
let topContentH4Array = Array.from(topContentH4);
topContentH4Array[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4Array[1].textContent = siteContent["main-content"]["about-h4"];
let topContentP = document.querySelectorAll(".top-content .text-content p");
let topContentPArray = Array.from(topContentP);
topContentPArray[0].textContent = siteContent["main-content"]["features-content"];
topContentPArray[1].textContent = siteContent["main-content"]["about-content"];
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
let bottomContentH4 = document.querySelectorAll(".bottom-content .text-content h4");
let bottomContentH4Array = Array.from(bottomContentH4);
bottomContentH4Array[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4Array[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4Array[2].textContent = siteContent["main-content"]["vision-h4"];
let bottomContentP = document.querySelectorAll(".bottom-content .text-content p");
let bottomContentPArray = Array.from(bottomContentP);
bottomContentPArray[0].textContent = siteContent["main-content"]["services-content"];
bottomContentPArray[1].textContent = siteContent["main-content"]["product-content"];
bottomContentPArray[2].textContent = siteContent["main-content"]["vision-content"];
//contact section
let contactH4 = document.querySelector(".contact h4");
 contactH4.textContent = siteContent["contact"]["contact-h4"];
let contactP = document.querySelectorAll(".contact p");
let contactPArray = Array.from(contactP);
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
let navClass 








