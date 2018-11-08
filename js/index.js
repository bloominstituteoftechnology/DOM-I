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
logo.setAttribute('src', siteContent["nav"]["img-src"])

const anchors = document.querySelectorAll('a');
for (let i = 0; i < anchors.length; i++) {
  anchors[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

let h1 = document.querySelector('.cta-text h1');
h1.textContent = 'Dom Is Awesome';

let getStartedButton = document.querySelector('.cta-text button');
getStartedButton.textContent = 'Get Started';
 
let cta_img = document.querySelector('#cta-img');
cta_img.setAttribute('src', siteContent.cta['img-src']);

let top_Content = document.querySelectorAll(".top-content .text-content");
top_Content[0].childNodes[1].innerText = siteContent["main-content"]['features-h4'];
top_Content[0].childNodes[3].innerText = siteContent["main-content"]['features-content'];
top_Content[1].childNodes[1].innerText = siteContent["main-content"]['about-h4'];
top_Content[1].childNodes[3].innerText = siteContent["main-content"]['about-content'];

let middle_Image = document.querySelector('#middle-img');
middle_Image.setAttribute('src', siteContent['main-content']['middle-img-src'])

let bottom_Content = document.querySelectorAll(".bottom-content .text-content");
bottom_Content[0].childNodes[1].innerText = siteContent["main-content"]['services-h4'];
bottom_Content[0].childNodes[3].innerText = siteContent["main-content"]['services-content'];
bottom_Content[1].childNodes[1].innerText = siteContent["main-content"]['product-h4'];
bottom_Content[1].childNodes[3].innerText = siteContent["main-content"]['product-content'];
bottom_Content[2].childNodes[1].innerText = siteContent["main-content"]['vision-h4'];
bottom_Content[2].childNodes[3].innerText = siteContent["main-content"]['vision-content'];

let contact_h4 = document.querySelector('.contact h4');
let contact_p = document.querySelectorAll('.contact p');
contact_h4.innerText = siteContent.contact['contact-h4']
contact_p[0].innerHTML = siteContent.contact.address
contact_p[1].innerText = siteContent.contact.phone
contact_p[2].innerText = siteContent.contact.email

let footer = document.querySelector("footer");
footer.children[0].textContent = siteContent.footer.copyright;