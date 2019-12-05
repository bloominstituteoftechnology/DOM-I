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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Header Nav


const domIsAwesome = document.querySelector('.cta-text > h1');
domIsAwesome.innerHTML = `DOM <br> Is <br> Awesome`


// Header
const theNav    = document.querySelectorAll('nav a')
const ctaH1     = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg    = document.querySelector('#cta-img')

// Top Content
const topContentH4 = Array.from(document.querySelectorAll('.top-content .text-content h4'));
const topContentP  = Array.from(document.querySelectorAll('.top-content .text-content p'));

// Bottom Content
const bottomContentH4 = Array.from(document.querySelectorAll('.bottom-content .text-content h4'));
const bottomContentP  = Array.from(document.querySelectorAll('.bottom-content .text-content p'));

// Middle Image
const middleImg = document.querySelector('#middle-img')

// Contact
const contactH4 = document.querySelectorAll('.contact h4')
const contactP = document.querySelectorAll('.contact p')

// Footer
const footer = document.querySelector('footer');

// header nav
theNav[0].textContent = siteContent['nav']['nav-item-1'];
theNav[1].textContent = siteContent['nav']['nav-item-2'];
theNav[2].textContent = siteContent['nav']['nav-item-3'];
theNav[3].textContent = siteContent['nav']['nav-item-4'];
theNav[4].textContent = siteContent['nav']['nav-item-5'];
theNav[5].textContent = siteContent['nav']['nav-item-6'];

// class="cta"
ctaH1.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src']

// class="top-content"
topContentH4[0].textContent = siteContent['main-content']['features-h4']
topContentP[0].textContent  = siteContent['main-content']['features-content']
topContentH4[1].textContent = siteContent['main-content']['about-h4']
topContentP[1].textContent  = siteContent['main-content']['about-content']

// middle-img-src"
middleImg.src = siteContent['main-content']['middle-img-src']

// class="bottom-content"
bottomContentH4[0].textContent = siteContent['main-content']['services-h4']
bottomContentP[0].textContent  = siteContent['main-content']['services-content']
bottomContentH4[1].textContent = siteContent['main-content']['product-h4']
bottomContentP[1].textContent  = siteContent['main-content']['product-content']
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4']
bottomContentP[2].textContent  = siteContent['main-content']['vision-content']

//  class="contact"
contactH4[0].textContent = siteContent['contact']['contact-h4']
contactP[0].textContent  = siteContent['contact']['address']
contactP[1].textContent  = siteContent['contact']['phone']
contactP[2].textContent  = siteContent['contact']['email']

// footer
footer.textContent = siteContent['footer']['copyright']

// * [ ] Change the color of the navigation text to be green.
theNav.forEach(link => link.style.color = 'green');


// ## Task 3: Add new content
// * [ ] Utilize `.appendChild()` and `.prepend()` to 
// add two new items to the navigation system. 
// You can call them whatever you want.
const nav = document.getElementsByTagName('nav');
const blog   = document.createElement('a')
const services = document.createElement('a')

blog.innerHTML = "Blog"
blog.href = "#"
blog.style.color = "green"

services.innerHTML = "Employment"
services.href = "#"
services.style.color = "green"

nav[0].appendChild(blog);
nav[0].appendChild(services);

