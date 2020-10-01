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
// Header start
// Example: Update the img src for the logo
let completeNav = document.querySelectorAll("nav a");
completeNav[0].textContent = siteContent["nav"]["nav-item-1"];
completeNav[1].textContent = siteContent["nav"]["nav-item-2"];
completeNav[2].textContent = siteContent["nav"]["nav-item-3"];
completeNav[3].textContent = siteContent["nav"]["nav-item-4"];
completeNav[4].textContent = siteContent["nav"]["nav-item-5"];
completeNav[5].textContent = siteContent["nav"]["nav-item-6"];

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
// header end
// section cta start
let theHeader = document.querySelector(".cta-text h1");
theHeader.textContent = siteContent ["cta"]
["h1"]
let theButton = document.querySelector(".cta-text button");
theButton.textContent = siteContent["cta"]["button"];
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent ['cta'] ['img-src']
// section cta end
// section main content start
let mainContent1A = document.querySelectorAll (".top-content h4")
mainContent1A[0].textContent= siteContent ["main-content"] ["features-h4"]
mainContent1A[1].textContent= siteContent ["main-content"] ["about-h4"]
// section main content end
// section contact start

// section contact end
