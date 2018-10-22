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
logo.setAttribute('src', siteContent['nav']['img-src'])


const navItem1 = document.querySelectorAll('a');
navItem1[0].innerHTML = siteContent['nav']['nav-item-1'];
navItem1[1].innerHTML = siteContent['nav']['nav-item-2'];
navItem1[2].innerHTML = siteContent['nav']['nav-item-3'];
navItem1[3].innerHTML = siteContent['nav']['nav-item-4'];
navItem1[4].innerHTML = siteContent['nav']['nav-item-5'];
navItem1[5].innerHTML = siteContent['nav']['nav-item-6'];




// navItem1.href = '#';
// navItem1.textContent = 'Services';

// const nav = document.querySelector('nav');
// nav.append(navItem1);

// const navItem2 = document.createElement('a');
// navItem2.href = '#';
// navItem2.textContent = 'Product';

// const nav2 = document.querySelector('nav');
// nav.append(navItem2);

// const navItem3 = document.createElement('a');
// navItem3.href = '#';
// navItem3.textContent = 'Vision';

// const nav3 = document.querySelector('nav');
// nav.append(navItem3);

// const navItem4 = document.createElement('a');
// navItem4.href = '#';
// navItem4.textContent = 'Features';

// const nav4 = document.querySelector('nav');
// nav.append(navItem4);

// const navItem5 = document.createElement('a');
// navItem5.href = '#';
// navItem5.textContent = 'About';

// const nav5 = document.querySelector('nav');
// nav.append(navItem5);

// const navItem6 = document.createElement('a');
// navItem6.href = '#';
// navItem6.textContent = 'Contact';

// const nav6 = document.querySelector('nav');
// nav.append(navItem6);

const mainHeader = document.querySelector('h1');

mainHeader.textContent = 'DOM Is Awesome';

const midImg = document.getElementById('cta-img');
midImg.setAttribute('src', siteContent['cta']['img-src']);