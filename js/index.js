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

let navLinks = document.querySelectorAll(".container header nav a");

for (let i = 0; i < 6; i++) {
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
}

document.querySelector('#logo-img').src = siteContent.nav["img-src"];

document.querySelector('.cta .cta-text h1').textContent = siteContent.cta['h1'];
document.querySelector('.cta .cta-text button').textContent = siteContent.cta['button'];
document.querySelector('.cta #cta-img').src = siteContent.cta['img-src'];

document.querySelectorAll('.main-content .top-content .text-content h4')[0].textContent = siteContent["main-content"]["features-h4"];
document.querySelectorAll('.main-content .top-content .text-content h4')[1].textContent = siteContent["main-content"]["about-h4"];
document.querySelectorAll('.main-content .top-content .text-content p')[0].textContent = siteContent["main-content"]["features-content"];
document.querySelectorAll('.main-content .top-content .text-content p')[1].textContent = siteContent["main-content"]["about-content"];

document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];

const bottomContentDivs = document.querySelector(".bottom-content").children;
const titles = ['services', 'product', 'vision'];
for (let i = 0; i < bottomContentDivs.length; i++) {
  bottomContentDivs[i].children[0].textContent = siteContent["main-content"][`${titles[i]}-h4`];
  bottomContentDivs[i].children[1].textContent = siteContent["main-content"][`${titles[i]}-content`];
}

document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"];
const contactPara = document.querySelectorAll('.contact p');
contactPara[0].textContent = siteContent["contact"]["address"];
contactPara[1].textContent = siteContent["contact"]["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];

let nav = document.querySelector("nav");
let preNav = document.createElement("a");
preNav.href = "#";
preNav.textContent = "Prelink";
let postNav = document.createElement("a");
postNav.href = "#";
postNav.textContent = "Postlink";
nav.prepend(preNav);
nav.appendChild(postNav);

for (let i = 0; i < nav.children.length; i++) {
  nav.children[i].style.color = 'green';
}