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

//updating nav
let navigation = document.querySelectorAll('nav a');
navigation[0].text = siteContent.nav['nav-item-1'];
navigation[1].text = siteContent.nav['nav-item-2'];
navigation[2].text = siteContent.nav['nav-item-3'];
navigation[3].text = siteContent.nav['nav-item-4'];
navigation[4].text = siteContent.nav['nav-item-5'];
navigation[5].text = siteContent.nav['nav-item-6'];


navigation.forEach((element) => {
  element.style.color = 'green'
});

const newNav = document.querySelector('nav');

const newItem = document.createElement('a');
newItem.innerText = 'Social Page';
newItem.style.color = 'green';
newNav.appendChild(newItem);

const signUp = document.createElement('a');
signUp.innerText = 'Sign Up';
signUp.style.color = 'green';
newNav.prepend(signUp);

//header 

const callAction = document.querySelector('.cta-text h1');
callAction.innerHTML= siteContent.cta['h1']

const start = document.querySelector('.cta-text button');
start.innerText = siteContent['cta']['button']

const headerImg = document.getElementById('cta-img');
headerImg.src = siteContent['cta']['img-src']
console.log(headerImg)

//Updating the Main-Content
const mainHeader = document.querySelectorAll('.text-content h4');
mainHeader[0].innerText = siteContent['main-content']['features-h4'];
mainHeader[1].innerText = siteContent['main-content']['about-h4'];
mainHeader[2].innerText = siteContent['main-content']['services-h4'];
mainHeader[3].innerText = siteContent['main-content']['product-h4'];
mainHeader[4].innerText = siteContent['main-content']['vision-h4'];

mainHeader.forEach((element) => {
	element.style.color = 'green';
});


const mainContent = document.querySelectorAll('.text-content p');
mainContent[0].innerText = siteContent['main-content']['features-content'];
mainContent[1].innerText = siteContent['main-content']['about-content'];
mainContent[2].innerText = siteContent['main-content']['services-content'];
mainContent[3].innerText = siteContent['main-content']['product-content'];
mainContent[4].innerText = siteContent['main-content']['vision-content']

mainContent.forEach((element) => {
  element.style.color = 'green',
  // element.style.background = 'black'
});

mainContent.setAttribute('backgroundColor', 'green');

const middleImg = document.getElementById('middle-img')
middleImg.src = siteContent['main-content']['middle-img-src'];


//contact info

const contactHead = document.querySelector('.contact h4');
contactHead.innerText = siteContent['contact']['contact-h4'];

const contactText = document.querySelectorAll('.contact p');
contactText[0].innerText = siteContent['contact']['address'];
contactText[1].innerText = siteContent['contact']['phone'];
contactText[2].innerText = siteContent['contact']['email'];

// footer

const footerText = document.querySelector('footer p');
footerText.innerText = siteContent['footer']['copyright']