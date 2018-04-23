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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//forEach method used in NAVs

let allSelectors = document.querySelectorAll('a');

allSelectors.forEach(function(selector, index, selectors) {
  selector.innerHTML = siteContent[`nav`][`nav-item-${index+1}`]
})

//created selectors for imgs

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//created selector for cta

let ctaTxt = document.querySelector(".cta-text h1");
ctaTxt.innerHTML = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.innerHTML = siteContent["cta"]["button"];

//created Selector for all h4 tags

let h4Tag = document.querySelectorAll("h4");
h4Tag[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Tag[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Tag[2].innerHTML = siteContent["main-content"]["services-h4"];
h4Tag[3].innerHTML = siteContent["main-content"]["product-h4"];
h4Tag[4].innerHTML = siteContent["main-content"]["vision-h4"];
h4Tag[5].innerHTML = siteContent["contact"]["contact-h4"];


//created Selector for all p tags

let pTag = document.querySelectorAll("p");
pTag[0].innerHTML = siteContent["main-content"]["features-content"];
pTag[1].innerHTML = siteContent["main-content"]["about-content"];
pTag[2].innerHTML = siteContent["main-content"]["services-content"];
pTag[3].innerHTML = siteContent["main-content"]["product-content"];
pTag[4].innerHTML = siteContent["main-content"]["vision-content"];
pTag[5].innerHTML = siteContent["contact"]["address"];
pTag[6].innerHTML = siteContent["contact"]["phone"];
pTag[7].innerHTML = siteContent["contact"]["email"];
pTag[8].innerHTML = siteContent["footer"]["copyright"];