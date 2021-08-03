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

/*header*/
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('nav').appendChild(blogLink)

let navLinks = document.querySelectorAll('a');
for(let i = 0; i < navLinks.length; i++) {
  let individualLinks = navLinks[i];
  individualLinks.style.color = 'green';
}

document.querySelector('nav a:nth-of-type(1)').textContent = siteContent['nav']['nav-item-1'];
document.querySelector('nav a:nth-of-type(2)').textContent = siteContent['nav']['nav-item-2'];
document.querySelector('nav a:nth-of-type(3)').textContent = siteContent['nav']['nav-item-3'];
document.querySelector('nav a:nth-of-type(4) ').textContent = siteContent['nav']['nav-item-4'];
document.querySelector('nav a:nth-of-type(5) ').textContent = siteContent['nav']['nav-item-5'];
document.querySelector('nav a:nth-of-type(6)').textContent = siteContent['nav']['nav-item-6'];



/*button,top image*/

let tempTxt = document.querySelector('h1');
const lbr = '\n'
tempTxt.style.whiteSpace = 'pre';
tempTxt.textContent = 'DOM' + lbr + 'IS' + lbr + 'Awesome';


let buttonTxt = document.querySelector('button');
buttonTxt.textContent = siteContent['cta']['button'];

let circularImg = document.getElementById('cta-img');
circularImg.setAttribute('src', siteContent['cta']['img-src']);


/*Main Content*/

document.querySelector('.top-content .text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('.top-content .text-content:nth-of-type(1) p').textContent = siteContent['main-content']['features-content'];
document.querySelector('.top-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.top-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content'];

const middleImg = document.getElementById('middle-img').setAttribute("src", siteContent['main-content']['middle-img-src']);

document.querySelector('.bottom-content .text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['services-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(1) p').textContent = siteContent['main-content']['services-content'];
document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content'];
document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content'];

/*contact*/
document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4']
const address = document.querySelector('.contact p:nth-of-type(1)').textContent = siteContent['contact']['address']
const phoneNumber = document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent['contact']['phone']
const email = document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent['contact']['email']

console.log(address)

/*footer*/
document.querySelector('footer p').textContent = siteContent['footer']['copyright']