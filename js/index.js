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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent ["main-content"]["middle-img-src"]);


// Nav Items 
let nav = document.querySelectorAll('a');

nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

let navA = document.querySelectorAll("a");
navA.forEach((index, i) => navA[i].textContent = siteContent["nav"][`${Object.keys(siteContent["nav"])[i]}`]);

// Two New Navs

// let newNav1 = document.createElement('a');
// newNav1.appendChild(document.createTextNobe('Support'));
// nav.appendChild(newNav1);

// let newNav2 = document.createElement('a');
// newNav2.appendChild(document.createTextNobe('Home'));
// nav.appendChild(newNav2);



// navA.forEach(navA => navA.style.color = 'green');


// CTA 
let ctah = document.querySelector("h1");
ctah.innerHTML = siteContent['cta']['h1'].split(' ').join(`<br>`);

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];


let headerFour = document.querySelectorAll('h4');

let mainFour = Object.keys(siteContent['main-content']).filter((key) => key.includes('h4'));

headerFour.forEach((index, i) => headerFour[i].textContent = siteContent['main-content'][`${mainFour[i]}`]);

headerFour.forEach(item => item.style.color = "darkgreen");


let mainParagraph = document.querySelectorAll('p');

let mainParagraphContent = Object.keys(siteContent['main-content']).filter((key) => key.includes('content'));

mainParagraph.forEach((index, i) => mainParagraph[i].textContent = siteContent['main-content'][`${mainParagraphContent[i]}`]);


// Contact 

headerFour[5].textContent = siteContent['contact']['contact-h4'];

mainParagraph[5].innerHTML = siteContent['contact']['address'].split('Street ').join(`Street <br>`);

mainParagraph[6].innerHTML = siteContent['contact']['phone'];

mainParagraph[7].innerHTML = siteContent['contact']['email'];

mainParagraph[8].innerHTML = siteContent['footer']['copyright'];

