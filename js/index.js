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

let navbar = document.querySelector("nav");
  navbar.innerHTML = `<a>${siteContent["nav"]["nav-item-1"]}</a><a>${siteContent["nav"]["nav-item-2"]}</a><a>${siteContent["nav"]["nav-item-3"]}</a><a>${siteContent["nav"]["nav-item-4"]}</a><a>${siteContent["nav"]["nav-item-5"]}</a><a>${siteContent["nav"]["nav-item-6"]}</a>`;

let heading = document.querySelector(".cta-text");
heading.innerHTML = `<h1>${siteContent["cta"]["h1"]}</h1><button>${siteContent["cta"]["button"]}</button>`;

let banner = document.getElementById("cta-img");
banner.setAttribute('src', siteContent["cta"]["img-src"]);

let headTags = document.querySelectorAll(".text-content h4");
headTags[0].innerHTML = `<h4>${siteContent["main-content"]["features-h4"]}</h4>`;
headTags[1].innerHTML = `<h4>${siteContent["main-content"]["about-h4"]}</h4>`;
headTags[2].innerHTML = `<h4>${siteContent["main-content"]["services-h4"]}</h4>`;
headTags[3].innerHTML = `<h4>${siteContent["main-content"]["product-h4"]}</h4>`;
headTags[4].innerHTML = `<h4>${siteContent["main-content"]["vision-h4"]}</h4>`;

let pTags = document.querySelectorAll(".text-content p");
pTags[0].innerHTML = `<p>${siteContent["main-content"]["features-content"]}</p>`;
pTags[1].innerHTML = `<p>${siteContent["main-content"]["about-content"]}</p>`;
pTags[2].innerHTML = `<p>${siteContent["main-content"]["services-content"]}</p>`;
pTags[3].innerHTML = `<p>${siteContent["main-content"]["product-content"]}</p>`;
pTags[4].innerHTML = `<p>${siteContent["main-content"]["vision-content"]}</p>`;

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactInfo = document.querySelector(".contact");
contactInfo.innerHTML = `<h4>${siteContent["contact"]["contact-h4"]}</h4><p>${siteContent["contact"]["address"]}</p><p>${siteContent["contact"]["phone"]}</p><p>${siteContent["contact"]["email"]}</p>`;

let footer = document.querySelector("footer");
footer.innerHTML = `<p>${siteContent["footer"]["copyright"]}</p>`;