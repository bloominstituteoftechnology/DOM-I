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

// adding the links dynamically
let navItems = document.querySelectorAll('header nav a');
for(let i = 0; i <= (navItems.length-1); i ++){
  navItems[i].innerHTML = siteContent['nav'][`nav-item-${i+1}`];
}
// adding cta-text
document.querySelector('.cta-text h1').innerHTML = "DOM<br> Is<br> Awesome";
document.querySelector('.cta-text button').innerHTML = "Get Started";
// adding cta-Image
document.querySelector('.cta img').setAttribute('src', siteContent['cta']['img-src']);
//adding text-Content
let textContent = document.querySelectorAll('.text-content');

textContent[0].children[0].innerHTML = siteContent['main-content']['features-h4'];
textContent[0].children[1].innerHTML = siteContent['main-content']['features-content'];

textContent[1].children[0].innerHTML = siteContent['main-content']['about-h4'];
textContent[1].children[1].innerHTML = siteContent['main-content']['about-content'];
//adding image
document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];

textContent[2].children[0].innerHTML = siteContent['main-content']['services-h4'];
textContent[2].children[1].innerHTML = siteContent['main-content']['services-content'];

textContent[3].children[0].innerHTML = siteContent['main-content']['product-h4'];
textContent[3].children[1].innerHTML = siteContent['main-content']['product-content'];

textContent[4].children[0].innerHTML = siteContent['main-content']['vision-h4'];
textContent[4].children[1].innerHTML = siteContent['main-content']['vision-content'];

//adding contact information
let contact = document.querySelector('.contact');
contact.children[0].innerText = siteContent['contact']['contact-h4'];
contact.children[1].innerText = siteContent['contact']['address'];
contact.children[2].innerText = siteContent['contact']['phone'];
contact.children[3].innerText = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']["copyright"];
