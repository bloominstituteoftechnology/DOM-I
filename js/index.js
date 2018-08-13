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
    "h1": "DOM <br> Is <br> Awesome",
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
// const mainNav = document.getElementsByTagName("nav");
// mainNav.setAttribute("nav", siteContent["nav"])

const nav1 = document.querySelectorAll("nav a");
nav1.forEach((value, index) => {
value.innerHTML = siteContent.nav[`nav-item-${index + 1}`]
});

const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaSection = document.querySelector("h1");
ctaSection.innerHTML = siteContent.cta["h1"]

const ctaButton = document.querySelector("button");
ctaButton.innerHTML = siteContent.cta["button"]

const imgCode = document.getElementById("cta-img");
imgCode.setAttribute('src', siteContent["cta"]["img-src"])

const imgMid = document.getElementById("middle-img");
imgMid.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Headers

const topicHeaders = document.querySelectorAll('h4');
topicHeaders[0].innerText = siteContent["main-content"]["features-h4"];
topicHeaders[1].innerText = siteContent["main-content"]["about-h4"];
topicHeaders[2].innerText = siteContent["main-content"]["services-h4"];
topicHeaders[3].innerText = siteContent["main-content"]["product-h4"];
topicHeaders[4].innerText = siteContent["main-content"]["vision-h4"];

//Content

const topicContent = document.querySelectorAll('p');
topicContent[0].innerText = siteContent["main-content"]["features-content"];
topicContent[1].innerText = siteContent["main-content"]["about-content"];
topicContent[2].innerText = siteContent["main-content"]["services-content"];
topicContent[3].innerText = siteContent["main-content"]["product-content"];
topicContent[4].innerText = siteContent["main-content"]["vision-content"];

//Contact
topicContent[5].innerText = siteContent["contact"]["address"];
topicContent[6].innerText = siteContent["contact"]["phone"];
topicContent[7].innerText = siteContent["contact"]["email"];

//Footer
topicContent[7].innerText = siteContent["footer"]["copyright"];

//Text Green


// const textMainSection = document.querySelector("main-content top-content text-content");
// textMainSection.forEach((value, index) => {
//   value.innerHTML = if ()
// })
// )