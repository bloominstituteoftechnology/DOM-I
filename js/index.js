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

// Set Navigation Items
document.querySelectorAll('[href="#"]').forEach((el, i)=>{
  let navData = siteContent.nav[`nav-item-${i + 1}`];
  el.innerHTML = navData;
  el.setAttribute('href', `#${navData}`);
  el.style.color = 'green';
});

const nav = document.querySelector('nav');

const prepended = document.createElement('span');
prepended.innerHTML = "Prepended";
nav.prepend(prepended);

const appended = document.createElement('span');
appended.innerHTML = "Appended";
nav.appendChild(appended);






// Set CTA
const ctaText = document.querySelector('.cta-text').children;
ctaText[0].innerHTML = siteContent.cta.h1;
ctaText[1].innerHTML = siteContent.cta.button;
document.querySelector('#cta-img').src = siteContent.cta['img-src'];

// Set Main Content
const main = siteContent['main-content'];
const sections = ['features', 'about', 'services', 'product', 'vision'];

let i = 0;
document.querySelectorAll('.text-content').forEach((el)=>{
  el.children[0].innerHTML = main[`${sections[i]}-h4`];
  el.children[1].innerHTML = main[`${sections[i]}-content`];
  i++;
});

document.querySelector('#middle-img').setAttribute('src', main['middle-img-src']);

// Set Contact
const contact = document.querySelector('.contact');

i = 0;
for (let p in siteContent.contact) {
  contact.children[i].innerHTML = siteContent.contact[p];
  i++
}

// Set Footer
document.querySelector('footer').querySelector('p').innerHTML = siteContent.footer.copyright;


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
