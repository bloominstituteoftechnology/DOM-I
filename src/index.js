const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//header nav

//header a1

//header a2

//header a3

//header a4

//header a5

//header a6


//logo image
const logoImg = document.querySelector('#logo-img');
logoImg.src= siteContent.images["logo-img"];

//cta text h1
const ctaText1 = document.querySelector("h1")
ctaText1.textContent = siteContent.cta.h1;

//cta button
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

//cta image
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-image"];

//Top content 
const topContent = document.querySelector(".top-content");

//H4 1
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];

//P 1
topContent.children[0].childre3n[1].textContent = siteContent["main-content"]["features-content"];

//H4 2
topContent.chidlren[1].children[0].textContent = siteContent["main-content"]["about-h4"];

//P 2
topContent.chidlren[1].chidlren[1].textContent =siteContent["main-content"]["about-content"];

//middle image
const accentImg = document.querySelector('#middle-img');
accentImg.src = siteContent.images["accent-img"];

//Bottom content
const bottomContent = document.querySelector(".bottom-content");

//H4 1
bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];

//P 1
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];

//H4 2
bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];

//P 2
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];

//H4 3
bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];

//P 3
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];

//contact h4
const contact = document.querySelector("section.contact");
contact.children[0].textContent = siteContent.contact["contact-h4"];

//contact p1
contact.children[1].textContent = siteContent.contact.address;

//contact p2
contact.children[2].textContent= siteContent.contact.phone;

//contact p3
contact.children[3].textContent = siteContent.contact.email;

//footer a
const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold');






