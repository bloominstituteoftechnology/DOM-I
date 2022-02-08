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

// images

const logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent.images["logo-img"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

const accentImg = document.querySelector("#middle-img");
accentImg.src = siteContent.images["accent-img"];

//nav

const navContent = document.querySelectorAll("nav a");
const navLinks = Object.values(siteContent.nav);
navContent.forEach((link, idx) => {
  link.textContent = navLinks[idx];
  link.classList.add("italic");
});


//cta

const cta = document.querySelector(".cta");
cta.querySelector("h1").textContent = siteContent["cta"]["h1"];
cta.querySelector("button").textContent = siteContent["cta"]["button"];

//top content 

const topContent = document.querySelector(".top-content");
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];

//bot content

const bottomContent = document.querySelector(".bottom-content");
const both4 = bottomContent.querySelectorAll("h4");
both4[0].textContent = siteContent["main-content"]["services-h4"];
both4[1].textContent = siteContent["main-content"]["product-h4"];
both4[2].textContent = siteContent["main-content"]["vision-h4"];
const botp = bottomContent.querySelectorAll("p");
botp[0].textContent = siteContent["main-content"]["services-content"];
botp[1].textContent = siteContent["main-content"]["product-content"];
botp[2].textContent = siteContent["main-content"]["vision-content"];


//contact

const contact = document.querySelector("section.contact");
contact.querySelector('h4').textContent = siteContent.contact["contact-h4"];
contact.querySelector('p:nth-of-type(1)').textContent = siteContent.contact["address"];
contact.querySelector('p:nth-of-type(2)').textContent = siteContent.contact["phone"];
contact.querySelector('p:nth-of-type(3)').textContent = siteContent.contact["email"];

// footer

const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add("bold");

