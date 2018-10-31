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

// Text Content Headings
const headings = document.querySelectorAll('.text-content h4');
headings[0].textContent = siteContent["main-content"]["features-h4"];
headings[1].textContent = siteContent["main-content"]["about-h4"];
headings[2].textContent = siteContent["main-content"]["services-h4"];
headings[3].textContent = siteContent["main-content"]["product-h4"];
headings[4].textContent = siteContent["main-content"]["vision-h4"];

const paragraphs = document.querySelectorAll('.text-content p')
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

// Middle Image
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Contact Info
// paragraphs[5].textContent = siteContent["contact"]["address"];
// paragraphs[6].textContent = siteContent["contact"]["phone"];
// paragraphs[7].textContent = siteContent["contact"]["email"];

// // Contact
// const contacts = document.querySelector('.container .contact h4');
// //headings[5].textContent = siteContent["contact"]["contact-h4"];
// contact.textContent = siteContent["contact"]["contact-h4"];

// Footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];
// paragraphs[8].textContent = siteContent["footer"]["copyright"];