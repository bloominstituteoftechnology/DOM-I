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

// Header

const topNav = document.querySelectorAll('a');
for(let i = 0; i < topNav.length; i++){
  topNav[i].textContent = siteContent['nav'][`nav-item-${i + 1}`];
}

const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];

// Main Content
// Top Content
const mainContHeader = document.querySelectorAll('.main-content h4');
const mainContPara = document.querySelectorAll('.main-content p')

mainContHeader[0].textContent = siteContent['main-content']['features-h4'];
mainContPara[0].textContent = siteContent['main-content']['features-content'];

mainContHeader[1].textContent = siteContent['main-content']['about-h4'];
mainContPara[1].textContent = siteContent['main-content']['about-content'];

//Image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom Content
mainContHeader[2].textContent = siteContent['main-content']['services-h4'];
mainContPara[2].textContent = siteContent['main-content']['services-content'];

mainContHeader[3].textContent = siteContent['main-content']['product-h4'];
mainContPara[3].textContent = siteContent['main-content']['product-content'];

mainContHeader[4].textContent = siteContent['main-content']['vision-h4'];
mainContPara[4].textContent = siteContent['main-content']['vision-content'];

// Contact
const contactHeader = document.querySelector('.contact h4');
const contactPara = document.querySelectorAll('.contact p');

contactHeader.textContent = siteContent['contact']['contact-h4'];

contactPara[0].textContent = siteContent['contact']['address'];
contactPara[1].textContent = siteContent['contact']['phone'];
contactPara[2].textContent = siteContent['contact']['email'];

// Footer
const footer = document.querySelector('footer')

footer.textContent = siteContent['footer']['copyright'];






