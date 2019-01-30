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

///Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent ['main-content']['middle-img-src']);

///Nav Items
// let nav = document.querySelectorAll('a');
// nav[0].textContent = siteContent['nav']['nav-item-1'];
// nav[1].textContent = siteContent['nav']['nav-item-2'];
// nav[2].textContent = siteContent['nav']['nav-item-3'];
// nav[3].textContent = siteContent['nav']['nav-item-4'];
// nav[4].textContent = siteContent['nav']['nav-item-5'];
// nav[5].textContent = siteContent['nav']['nav-item-6'];

let nav = document.querySelector("nav");

let navA = document.querySelectorAll("a");
navA.forEach((index, i) => navA[i].textContent = siteContent["nav"][`${
  Object.keys(siteContent["nav"])[i]
}`]);

///navigation task 4 add new
navA.forEach(navA => navA.style.color = 'green');

const frontNav = document.createElement('a');
frontNav.href = '#';
frontNav.textContent = 'Ideas';
frontNav.style.color = 'green';

nav.prepend(frontNav);

const backNav = document.createElement('a');
backNav.href = '#';
backNav.textContent = 'DOM';
backNav.style.color = 'green';

nav.append(backNav);
///CTA content
let ctaH = document.querySelector('h1');
ctaH.innerHTML = siteContent['cta']['h1'].split(' ').join(`<br>`);

//stretch add h1 style
ctaH.style.color = 'green';

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

//stretch style to button
ctaButton.style.boxShadow = '5px 5px 10px grey';

///main-content
let headerFours = document.querySelectorAll('h4');

let mainHFours = Object.keys(siteContent['main-content']).filter((key) => key.includes('h4'));

headerFours.forEach((index, i) => headerFours[i].textContent = siteContent['main-content'][`${mainHFours[i]}`]);

//stretch style h4s
headerFours.forEach(item => item.style.color = "darkgreen");

headerFours.forEach(item => item.style.textDecoration = 'underline');

// main content p's
let mainP = document.querySelectorAll('p');

let mainPContent = Object.keys(siteContent['main-content']).filter((key) => key.includes('content'));

mainP.forEach((index, i) => mainP[i].textContent = siteContent['main-content'][`${mainPContent[i]}`]);


/// Contact
headerFours[5].textContent = siteContent['contact']['contact-h4'];

mainP[5].innerHTML = siteContent['contact']['address'].split('Street ').join(`Street <br>`);

mainP[6].innerHTML = siteContent['contact']['phone'];

mainP[7].innerHTML = siteContent['contact']['email'];

/// footer
mainP[8].innerHTML = siteContent['footer']['copyright'];

// Stretch events

ctaH.addEventListener("click", update);

function update() {
  headerFours.forEach(item => item.style.fontSize = '1.8em');

  headerFours.forEach(item => item.style.color = 'black');

  mainP.forEach(item => item.style.color = 'darkgreen');

};
