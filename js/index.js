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

let nav = document.querySelector('nav');
// console.log(nav);
// console.log(nav.children);
let i = 1;
for (; i < 7; i++){
  // nav[0].innerText = 'Whee'
  nav.children[i-1].innerText = siteContent['nav']['nav-item-'+i]
  // console.log(siteContent['nav']['nav-item-'+i]);
}


let cta = document.querySelector('section.cta');
// console.log(cta);
let ctaTextHeader = cta.querySelector('div.cta-text h1');
// console.log(ctaTextHeader);
ctaTextHeader.innerHTML = siteContent['cta']['h1'].replaceAll(' ', `<br>`);
let ctaTextButton = cta.querySelector('div.cta-text button');
ctaTextButton.innerText = siteContent['cta']['button'];
let ctaImage = cta.querySelector('img#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src'])


let mainContent = document.querySelector('section.main-content');


let topContent = mainContent.querySelector('.top-content')
let topContentLeft = topContent.querySelectorAll('.text-content')[0]
// console.log(topContentLeft)
topContentLeft.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
topContentLeft.querySelector('p').textContent = siteContent['main-content']['features-content'];
let topContentRight = topContent.querySelectorAll('.text-content')[1];
// console.log(topContentRight)
topContentRight.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
topContentRight.querySelector('p').textContent = siteContent['main-content']['about-content'];


let mainContentImage = mainContent.querySelector('#middle-img');
// console.log(mainContentImage);
mainContentImage.setAttribute('src', siteContent['main-content']['middle-img-src']);


let bottomContent = mainContent.querySelector('.bottom-content');
let bottomContentLeft = bottomContent.querySelectorAll('.text-content')[0];
bottomContentLeft.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
bottomContentLeft.querySelector('p').textContent = siteContent['main-content']['services-content'];
let bottomContentMiddle = bottomContent.querySelectorAll('.text-content')[1];
bottomContentMiddle.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
bottomContentMiddle.querySelector('p').textContent = siteContent['main-content']['product-content'];
let bottomContentRight = bottomContent.querySelectorAll('.text-content')[2];
bottomContentRight.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
bottomContentRight.querySelector('p').textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelector('section.contact');
console.log(contact)
contact.querySelector('h4').textContent = siteContent['contact']['contact-h4'];
console.log(contact.querySelectorAll('p'))
contact.querySelectorAll('p')[0].innerHTML = siteContent['contact']['address'].slice(0, 18) + '<br>' + siteContent['contact']['address'].slice(18);
contact.querySelectorAll('p')[1].textContent = siteContent['contact']['phone'];
contact.querySelectorAll('p')[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer');
footer.querySelector('p').innerText = siteContent['footer']['copyright'];