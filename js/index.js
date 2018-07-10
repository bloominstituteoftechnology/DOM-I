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


/*
// Nav Elements Individually
let navItem = document.querySelectorAll('nav a');
navItem[0].textContent = siteContent['nav']['nav-item-1'];
navItem[1].textContent = siteContent['nav']['nav-item-2'];
navItem[2].textContent = siteContent['nav']['nav-item-3'];
navItem[3].textContent = siteContent['nav']['nav-item-4'];
navItem[4].textContent = siteContent['nav']['nav-item-5'];
navItem[5].textContent = siteContent['nav']['nav-item-6'];

// Green Nav Items
navItem.forEach(item => item.style.color = 'green');
*/


// Nav Elements through Parent
let navItems = document.querySelector('nav');
navItems.children[0].textContent = siteContent['nav']['nav-item-1'];
navItems.children[1].textContent = siteContent['nav']['nav-item-2'];
navItems.children[2].textContent = siteContent['nav']['nav-item-3'];
navItems.children[3].textContent = siteContent['nav']['nav-item-4'];
navItems.children[4].textContent = siteContent['nav']['nav-item-5'];
navItems.children[5].textContent = siteContent['nav']['nav-item-6'];


// New Nav Items
let firstNewNav = document.createElement('a');
firstNewNav.href = '#';
firstNewNav.textContent = 'HELLO';
navItems.prepend(firstNewNav);

let secondNewNav = document.createElement('a');
secondNewNav.href = '#';
secondNewNav.textContent = 'OLLEH';
navItems.appendChild(secondNewNav);


// Green Nav Items -> Including new items
for (let i = 0; i < navItems.children.length; i++) {
  navItems.children[i].style.color = 'green';
}



// CTA
siteContent['cta']['h1'] = 'DOM <br> Is <br> Awesome'
let ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];

// Button functionality
ctaButton.addEventListener('click', function (e) {
  let posX = e.offsetX;
  let posY = e.offsetY;
  let ranDom = Math.floor(Math.random() * (250 - 50)) + 50;

  document.querySelector('.container').style.backgroundColor = `rgb(${posX}, ${ranDom}, ${posY})`;

  e.preventDefault();
});



// Main Content Top
let topContentHeaders = document.querySelectorAll('.main-content .top-content .text-content h4');
topContentHeaders[0].textContent = siteContent['main-content']['features-h4'];
topContentHeaders[1].textContent = siteContent['main-content']['about-h4'];

let topContentText = document.querySelectorAll('.main-content .top-content .text-content p');
topContentText[0].textContent = siteContent['main-content']['features-content'];
topContentText[1].textContent = siteContent['main-content']['about-content'];

// Main Content img
let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// Main Content Bottom
let bottomContentHeaders = document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomContentHeaders[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeaders[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeaders[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContentText = document.querySelectorAll('.main-content .bottom-content .text-content p');
bottomContentText[0].textContent = siteContent['main-content']['services-content'];
bottomContentText[1].textContent = siteContent['main-content']['product-content'];
bottomContentText[2].textContent = siteContent['main-content']['vision-content'];



// Contact Section
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactTexts = document.querySelectorAll('.contact p');
contactTexts[0].textContent = siteContent['contact']['address'];
contactTexts[1].textContent = siteContent['contact']['phone'];
contactTexts[2].textContent = siteContent['contact']['email'];



// Footer Section
let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];


