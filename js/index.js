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
    "h1": "DOM<br>Is<br>Awesome",
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

let navItems = document.querySelectorAll('a');
let navValues = Object.values(siteContent['nav']);
for (let i = 0; i < navItems.length - 1; i ++) {
  navItems[i].innerText = navValues[i];
}

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.innerText = siteContent['cta']['button'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let MainContentH4 = document.querySelectorAll('.text-content h4');
let MainContentKeys = Object.keys(siteContent['main-content']);
let H4Values = [];
MainContentKeys.forEach((key) => {
  if (key.includes('h4')) {
    H4Values.push(siteContent['main-content'][key]);
  }
});

for (let i = 0; i < H4Values.length; i ++) {
  MainContentH4[i].innerText = H4Values[i];
}

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let MainContentP = document.querySelectorAll('.text-content p');
let PValues = [];
MainContentKeys.forEach((key) => {
  if (key.includes('content')) {
    PValues.push(siteContent['main-content'][key]);
  }
});

for (let i = 0; i < PValues.length; i ++) {
  MainContentP[i].innerText = PValues[i];
}

let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent['contact']['contact-h4'];

let contactItems = document.querySelectorAll('.contact p');
let contactValues = Object.values(siteContent['contact']).splice(1, 3);

for (let i = 0; i < contactItems.length; i ++) {
  contactItems[i].innerText = contactValues[i];
}

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];