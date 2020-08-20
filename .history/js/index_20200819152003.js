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

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let nav = document.querySelectorAll("nav > a");
nav[0].textContent = ("src", siteContent["nav"]["nav-item-1"]);
nav[1].textContent = ("src", siteContent["nav"]["nav-item-2"]);
nav[2].textContent = ("src", siteContent["nav"]["nav-item-3"]);
nav[3].textContent = ("src", siteContent["nav"]["nav-item-4"]);
nav[4].textContent = ("src", siteContent["nav"]["nav-item-5"]);
nav[5].textContent = ("src", siteContent["nav"]["nav-item-6"]);


let ctah1 = document.querySelector("div.cta-text > h1")
ctah1.textContent = ("src", siteContent["cta"]["h1"]);

let ctabutton = document.querySelector("div.cta-text > button")
ctabutton.textContent = ("src", siteContent["cta"]["button"]);

let contacth4 = document.querySelector("section.contact > h4");
contacth4.textContent = ("src", siteContent["contact"]["contact-h4"]);

let contactP = document.querySelectorAll('section.contact > p');
contactP[0].textContent = ("src", siteContent["contact"]["address"]);
contactP[1].textContent = ("src", siteContent["contact"]["phone"]);
contactP[2].textContent = ("src", siteContent["contact"]["email"]);

let footer = document.querySelector("footer > p");
footer.textContent = ('src', siteContent["footer"]["copyright"]);
