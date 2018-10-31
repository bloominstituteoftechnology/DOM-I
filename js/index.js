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
const logo = document.querySelector('#logo-img');
logo.src = siteContent["nav"]["img-src"];
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation
const NavItems = document.querySelectorAll('a');
// NavItems.item(0).textContent = siteContent.nav["nav-item-1"];
// NavItems.item(1).textContent = siteContent.nav["nav-item-2"];
NavItems[0].textContent = siteContent.nav["nav-item-1"];
NavItems[1].textContent = siteContent.nav["nav-item-2"];
NavItems[2].textContent = siteContent.nav["nav-item-3"];
NavItems[3].textContent = siteContent.nav["nav-item-4"];
NavItems[4].textContent = siteContent.nav["nav-item-5"];
NavItems[5].textContent = siteContent.nav["nav-item-6"];

// H1
const ctaText = document.querySelector('.cta-text h1');
siteContent.cta["h1"] = "DOM<br> Is<br> Awesome!";
//siteContent["cta"]["h1"] = "DOM<br> Is<br> Awesome!";
ctaText.innerHTML = siteContent.cta["h1"];

// Button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta["button"];

// Circular Image
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];