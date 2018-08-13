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


const navLinks = document.querySelectorAll('a');
navLinks[0].innerHTML= 'Services';
navLinks[1].innerHTML = 'Product';
navLinks[2].innerHTML = 'Vision';
navLinks[3].innerHTML = 'Features';
navLinks[4].innerHTML = 'About';
navLinks[5].innerHTML = 'Contact';

navLinks[0].style.color = 'green';
navLinks[1].style.color = 'green';
navLinks[2].style.color = 'green';
navLinks[3].style.color = 'green';
navLinks[4].style.color = 'green';
navLinks[5].style.color = 'green';

const newAOne = document.createElement('a');
const newATwo = document.createElement('a');
const parent = document.querySelector('nav');
parent.appendChild(newAOne);
parent.prepend(newATwo);
newAOne.innerText = 'Press';
newAOne.style.color = 'green';
newATwo.innerText = 'Home';
newATwo.style.color = 'green';



let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaText = document.querySelector('h1');
ctaText.innerHTML = 'Dom<br>is<br> Awesome';

const ctaButton = document.querySelector('button');
ctaButton.innerText = 'Get Started';

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

const titles = document.querySelectorAll('h4');
titles[0].innerText = 'Features';
titles[1].innerText = 'About';
titles[2].innerText = 'Services';
titles[3].innerText = 'Product';
titles[4].innerText = 'Vision';
titles[5].innerText = 'Contact';

const paragraphs = document.querySelectorAll('.text-content p');
paragraphs[0].innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[1].innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[2].innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[3].innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[4].innerText = 'Contact content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

const contactPs = document.querySelectorAll('.contact p');
contactPs[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA';
contactPs[1].innerText = '1 (888) 888-8888';
contactPs[2].innerText = 'sales@greatidea.io';

const footer = document.querySelector('footer p');
footer.innerText = 'Copyright Great Idea! 2018';