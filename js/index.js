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

// Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Update navigation items
const navElement = document.querySelectorAll('header nav a');
for (let i = 0; i < navElement.length; i++) {
  navElement[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
};

// Update CTA items
const ctaH1 = document.querySelector('.cta .cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('.cta #cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// Update main content
const mainTop = document.querySelectorAll('.main-content .top-content .text-content');
for (let i = 0; i < mainTop.length; i++) {
  let subject = ['features', 'about'];
  mainTop[i].querySelector('h4').textContent = siteContent['main-content'][`${subject[i]}-h4`];
  mainTop[i].querySelector('p').textContent = siteContent['main-content'][`${subject[i]}-content`];
};

const midImg = document.querySelector('.main-content .middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const mainBot = document.querySelectorAll('.main-content .bottom-content .text-content');
for (let i = 0; i < mainBot.length; i++) {
  let subject = ['services', 'product', 'vision'];
  mainBot[i].querySelector('h4').textContent = siteContent['main-content'][`${subject[i]}-h4`];
  mainBot[i].querySelector('p').textContent = siteContent['main-content'][`${subject[i]}-content`];
};

// Update contact
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
for (let i = 0; i < contactP.length; i++) {
  let subject = ['address', 'phone', 'email'];
  contactP[i].textContent = siteContent['contact'][`${subject[i]}`];
}

// Update footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];