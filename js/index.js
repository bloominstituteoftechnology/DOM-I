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

const aTag = document.querySelectorAll('nav a')
aTag[0].textContent = siteContent['nav']['nav-item-1'];
aTag[1].textContent = siteContent['nav']['nav-item-2'];
aTag[2].textContent = siteContent['nav']['nav-item-3'];
aTag[3].textContent = siteContent['nav']['nav-item-4'];
aTag[4].textContent = siteContent['nav']['nav-item-5'];
aTag[5].textContent = siteContent['nav']['nav-item-6'];


aTag.forEach(tag =>{tag.style.color = "green"});


const h1El = document.querySelector('h1');
h1El.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const image1 = document.querySelector('#cta-img'); // grab the items from the HTML
image1.setAttribute('src', siteContent['cta']['img-src']); //reference the source with set attribute this take

const h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];
h4[5].textContent = siteContent['contact']['contact-h4'];

const sectionP = document.querySelectorAll('p');
sectionP[0].textContent = siteContent['main-content']['features-content'];
sectionP[1].textContent = siteContent['main-content']['about-content'];
sectionP[2].textContent = siteContent['main-content']['services-content'];
sectionP[3].textContent = siteContent['main-content']['product-content'];
sectionP[4].textContent = siteContent['main-content']['vision-content'];
sectionP[5].textContent = siteContent['contact']['address'];
sectionP[6].textContent = siteContent['contact']['phone'];
sectionP[7].textContent = siteContent['contact']['email'];
sectionP[8].textContent = siteContent['footer']['copyright'];

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const homeLink = document.createElement('a');
homeLink.textContent = 'Home';
homeLink.href = '#';
document.querySelector('nav').prepend(homeLink);

const myBlog = document.createElement('a');
myBlog.textContent = 'Blog';
myBlog.href = '#';
document.querySelector('nav').appendChild(myBlog);







