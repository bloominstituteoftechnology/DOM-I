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

const navigation = document.querySelectorAll('a');
for (i = 0; i < navigation.length; i++) {
  navigation[i].innerHTML = siteContent['nav'][`nav-item-${i+1}`];
  navigation[i].style.color = 'green';
}

const appendNewItem = document.createElement('a');
const prependNewItem = document.createElement('a');
const navi = document.querySelector('nav');
appendNewItem.innerHTML = 'Last';
appendNewItem.href = '#';
prependNewItem.innerHTML = 'First';
appendNewItem.href = '#';
navi.append(appendNewItem);
navi.prepend(prependNewItem);

const topHeading = document.querySelector('h1');
topHeading.innerHTML = siteContent['cta']['h1'];

const topBtn = document.querySelector('button');
topBtn.innerHTML = siteContent['cta']['button'];

const topImg = document.getElementById('cta-img');
topImg.setAttribute('src', siteContent['cta']['img-src']);

const heading = document.querySelectorAll('h4');
heading[0].innerHTML = siteContent['main-content']['features-h4'];
heading[1].innerHTML = siteContent['main-content']['about-h4'];
heading[2].innerHTML = siteContent['main-content']['services-h4'];
heading[3].innerHTML = siteContent['main-content']['product-h4'];
heading[4].innerHTML = siteContent['main-content']['vision-h4'];
heading[5].innerHTML = siteContent['contact']['contact-h4'];

const centerImg = document.getElementById('middle-img');
centerImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const content = document.querySelectorAll('p');
content[0].innerHTML = siteContent['main-content']['features-content'];
content[1].innerHTML = siteContent['main-content']['about-content'];
content[2].innerHTML = siteContent['main-content']['services-content'];
content[3].innerHTML = siteContent['main-content']['product-content'];
content[4].innerHTML = siteContent['main-content']['vision-content'];
content[5].innerHTML = siteContent['contact']['address'];
content[6].innerHTML = siteContent['contact']['phone'];
content[7].innerHTML = siteContent['contact']['email'];
content[8].innerHTML = siteContent['footer']['copyright'];