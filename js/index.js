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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let cta = document.getElementById('cta-img');
cta.setAttribute('src', siteContent["cta"]["img-src"])

let middleimg = document.getElementById('middle-img');
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// NAV
let services = document.getElementsByTagName('a')[0];
services.innerHTML = 'Services';


let product = document.getElementsByTagName('a')[1];
product.innerHTML = 'Product';

let vision = document.getElementsByTagName('a')[2];
vision.innerHTML = 'Vision';

let about = document.getElementsByTagName('a')[3];
about.innerHTML = 'About';

let contact = document.getElementsByTagName('a')[4];
contact.innerHTML = 'Contact';

let newNav = document.querySelector('nav');
let store = document.createElement('a');
let blog = document.createElement('a');

store.href = '#';
store.textContent = 'Store';
store.style.color = 'green';
blog.href = '#';
blog.textContent = 'Blog';
blog.style.color = 'green';

newNav.appendChild(blog);
newNav.prepend(store);

// Tried changing color of nav by updating class syntax.

let navList = document.querySelectorAll('nav a')
for (let i = 0; i < navList.length; i++) {
  navList[i].textContent = siteContent['nav'][`nav-item-${i + 1}`];
  navList[i].style.color = 'green';
};



// HEADER

let h1 = document.getElementsByTagName('h1')[0];
h1.innerText = siteContent['cta']['h1'];

let button = document.getElementsByTagName("button")[0];
button.innerText = siteContent['cta']['button'];

// main-content

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerText = siteContent['main-content']['features-h4'];

let featuresContent = document.getElementsByTagName('p')[0];
featuresContent.innerText = siteContent['main-content']['features-content'];

let aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.innerText = siteContent['main-content']['about-h4'];

let aboutContent1 = document.getElementsByTagName('p')[1];
aboutContent1.innerText = siteContent['main-content']['about-content'];

let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerText = siteContent['main-content']['services-h4'];

let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerText = siteContent['main-content']['services-content'];

let productH4 = document.getElementsByTagName('h4')[3];
productH4.innerText = siteContent['main-content']['product-h4'];

let productContent = document.getElementsByTagName('p')[3];
productContent.innerText = siteContent['main-content']['product-content'];

let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerText = siteContent['main-content']['vision-h4'];

let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerText = siteContent['main-content']['vision-content'];

// Contact

let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerText = siteContent['contact']['contact-h4'];

let address = document.getElementsByTagName('p')[5];
address.innerText = siteContent['contact']['address'];

let phone = document.getElementsByTagName('p')[6];
phone.innerText = siteContent['contact']['phone'];

let email = document.getElementsByTagName('p')[7];
email.innerText = siteContent['contact']['email'];

//footer
let footer = document.getElementsByTagName('p')[8];
footer.innerText = siteContent['footer']['copyright'];


