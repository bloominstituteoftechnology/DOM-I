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
    "h1": "DOM \n Is \n Awesome",
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
    "address" : "123 Way 456 Street \n Somewhere, USA",
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

let navLinks = document.querySelectorAll('nav a'
);
navLinks[0].innerText = siteContent['nav']['nav-item-1']
navLinks[1].innerText = siteContent['nav']['nav-item-2']
navLinks[2].innerText = siteContent['nav']['nav-item-3']
navLinks[3].innerText = siteContent['nav']['nav-item-4']
navLinks[4].innerText = siteContent['nav']['nav-item-5']
navLinks[5].innerText = siteContent['nav']['nav-item-6']
navLinks[0].style = 'color: green;';
navLinks[1].style = 'color: green;';
navLinks[2].style = 'color: green;';
navLinks[3].style = 'color: green;';
navLinks[4].style = 'color: green;';
navLinks[5].style = 'color: green;';


let ctaTitle = document.querySelector('.cta .cta-text h1');
ctaTitle.innerText = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerText = siteContent['cta']['button']

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const topH4 = document.querySelectorAll('.main-content .top-content h4');
topH4[0].innerText = siteContent['main-content']['features-h4']
topH4[1].innerText = siteContent['main-content']['about-h4']

const topContent = document.querySelectorAll('.main-content .top-content p');
topContent[0].innerText = siteContent['main-content']['features-content']
topContent[1].innerText = siteContent['main-content']['about-content']

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const bottomH4 = document.querySelectorAll('.main-content .bottom-content h4')
bottomH4[0].innerText = siteContent['main-content']['services-h4']
bottomH4[1].innerText = siteContent['main-content']['product-h4']
bottomH4[2].innerText = siteContent['main-content']['vision-h4']

const bottomContent = document.querySelectorAll('.main-content .bottom-content p')
bottomContent[0].innerText = siteContent['main-content']['services-content']
bottomContent[1].innerText = siteContent['main-content']['product-content']
bottomContent[2].innerText = siteContent['main-content']['vision-content']

const contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent['contact']['contact-h4']

const contactContent = document.querySelectorAll('.contact p');
contactContent[0].innerText = siteContent['contact']['address']
contactContent[1].innerText = siteContent['contact']['phone']
contactContent[2].innerText = siteContent['contact']['email']

const copyFooter = document.querySelector('footer p');
copyFooter.innerText = siteContent['footer']['copyright']

let blog = document.createElement('a');
let mainNav = document.querySelector('header nav');
blog.innerText = 'Blog';
blog.href = '#';
blog.style = 'color: green;';
mainNav.appendChild(blog);



let bookstore = document.createElement('a');
bookstore.innerText = 'Bookstore';
bookstore.href = '#';
bookstore.style = 'color: green;';
mainNav.prepend(bookstore);




