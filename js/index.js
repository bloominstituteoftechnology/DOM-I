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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBarElements = document.querySelectorAll('a');
navBarElements = Array.from(navBarElements);

// nav
navBarElements.map((element, i) => element.textContent = siteContent.nav[`nav-item-${i}`]);
// navBarElements[0].textContent = siteContent.nav["nav-item-1"];
// navBarElements[1].textContent = siteContent.nav["nav-item-2"];
// navBarElements[2].textContent = siteContent.nav["nav-item-3"];
// navBarElements[3].textContent = siteContent.nav["nav-item-4"];
// navBarElements[4].textContent = siteContent.nav["nav-item-5"];
// navBarElements[5].textContent = siteContent.nav["nav-item-6"];

// cta
document.querySelector('#cta-img').src = siteContent.cta["img-src"];
document.querySelector('.cta .cta-text h1').textContent = siteContent.cta["h1"];
document.querySelector('.cta .cta-text button').textContent = siteContent.cta["button"];

let main = document.querySelector('.main-content');
console.log(main.querySelector('.top-content .text-content'));

// h4 elements for top-content
main.querySelectorAll('.top-content .text-content')[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
main.querySelectorAll('.top-content .text-content')[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];

// p elements for top-content
main.querySelectorAll('.top-content .text-content')[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
main.querySelectorAll('.top-content .text-content')[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];

// main img
main.querySelector('.middle-img').src = siteContent["main-content"]["middle-img-src"];

// h4 elements for bottome-content
main.querySelectorAll('.bottom-content .text-content')[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
main.querySelectorAll('.bottom-content .text-content')[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
main.querySelectorAll('.bottom-content .text-content')[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];

// p elements for bottome-content
main.querySelectorAll('.bottom-content .text-content')[0].querySelector('p').textContent = siteContent["main-content"]["services-content"];
main.querySelectorAll('.bottom-content .text-content')[1].querySelector('p').textContent = siteContent["main-content"]["product-content"];
main.querySelectorAll('.bottom-content .text-content')[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

// contact 
const contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent.contact["contact-h4"];
contact.querySelectorAll('p')[0].textContent = siteContent.contact["address"];
contact.querySelectorAll('p')[1].textContent = siteContent.contact["phone"];
contact.querySelectorAll('p')[2].textContent = siteContent.contact["email"];

// footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;


navBarElements.map(element => element.style.color = 'green');
