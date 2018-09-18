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

let h4 = document.querySelectorAll("h4");

//NAV


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let aselect = document.getElementsByTagName("a");

let navBuild = document.createElement('a');
let navSelect = document.querySelector('nav');
navSelect.appendChild(navBuild);
navSelect.appendChild(navBuild);

  [].forEach.call(aselect, function (curr, i) {
    aselect[i].innerText = siteContent["nav"]["nav-item-" + (i+1)];
    aselect[i].style.color = 'red';
  });

aselect[5].innerText = 'Woop';
aselect[6].innerText = 'Loop';




////////////////////////////////////

//HEADER 
let headerimg = document.getElementById("cta-img");
headerimg.setAttribute('src', siteContent["cta"]["img-src"]);

let header1 = document.querySelector('h1');
header1.innerText = siteContent['cta']['h1'];

let button = document.querySelector('button');
button.innerText = siteContent['cta']['button'];

///////////////////////////////////

//MAIN CONTENT
let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
/// TOP
let topClass = document.getElementsByClassName('top-content');
topClass[0].children[0].children[0].innerText = siteContent['main-content']['features-h4'];
topClass[0].children[0].children[1].innerText = siteContent['main-content']['features-content'];
topClass[0].children[1].children[0].innerText = siteContent['main-content']['about-h4'];
topClass[0].children[1].children[1].innerText = siteContent['main-content']['about-content'];

/// BOTTOM
let bottomClass = document.getElementsByClassName('bottom-content');
bottomClass[0].children[0].children[0].innerText = siteContent['main-content']['services-h4'];
bottomClass[0].children[0].children[1].innerText = siteContent['main-content']['services-content'];
bottomClass[0].children[1].children[0].innerText = siteContent['main-content']['product-h4'];
bottomClass[0].children[1].children[1].innerText = siteContent['main-content']['product-content'];
bottomClass[0].children[2].children[0].innerText = siteContent['main-content']['vision-h4'];
bottomClass[0].children[2].children[1].innerText = siteContent['main-content']['vision-content'];
//CONTACT 
let contactClass = document.getElementsByClassName('contact');
contactClass[0].children[0].innerText = siteContent['contact']['contact-h4'];
contactClass[0].children[1].innerText = siteContent['contact']['address'];
contactClass[0].children[2].innerText = siteContent['contact']['phone'];
contactClass[0].children[3].innerText = siteContent['contact']['email'];

///////////////////////////////////

//FOOTER
let footer = document.querySelector("footer");
footer.innerText = siteContent['footer']['copyright'];

///////////////////////////////////