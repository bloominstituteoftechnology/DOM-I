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

/*
/
/     NAV
/
*/

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navItems = document.querySelectorAll("nav a");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].id = `nav-item-${i + 1}`;
  navItems[i].innerText = siteContent["nav"][`nav-item-${i}`];
}


/*
/
/     CTA
/
*/
const ctaTextH1 = document.querySelector(".cta-text h1");
ctaTextH1.innerText = siteContent["cta"]["h1"];

const ctaTextButton = document.querySelector(".cta-text button");
ctaTextButton.innerText = siteContent["cta"]["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);


/*
/
/     Main Content
/
*/

const featuresContentItems = document.querySelector(".text-content");
const featuresH4 = featuresContentItems.querySelector("h4");
featuresH4.innerText = siteContent["main-content"]["features-h4"];
const featuresP = featuresContentItems.querySelector("p");
featuresP.innerText = siteContent["main-content"]["features-content"];

const aboutContentItems = featuresContentItems.nextElementSibling;
const aboutH4 = aboutContentItems.querySelector("h4");
aboutH4.innerText = siteContent["main-content"]["about-h4"];
const aboutP = aboutContentItems.querySelector("p");
aboutP.innerText = siteContent["main-content"]["about-content"];


const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const servicesContentItems = document.querySelector(".bottom-content .text-content");
const servicesH4 = servicesContentItems.querySelector("h4");
servicesH4.innerText = siteContent["main-content"]["services-h4"];
const servicesP = servicesContentItems.querySelector("p");
servicesP.innerText = siteContent["main-content"]["services-content"];

const productContentItems = servicesContentItems.nextElementSibling;
const productH4 = productContentItems.querySelector("h4");
productH4.innerText = siteContent["main-content"]["product-h4"];
const productP = productContentItems.querySelector("p");
productP.innerText = siteContent["main-content"]["product-content"];

const visionContentItems = productContentItems.nextElementSibling;
const visionH4 = visionContentItems.querySelector("h4");
visionH4.innerText = siteContent["main-content"]["vision-h4"];
const visionP = visionContentItems.querySelector("p");
visionP.innerText = siteContent["main-content"]["vision-content"];

/*
/
/     Contact
/
*/

const contactItems = document.querySelector(".contact");
contactItems.querySelector("h4").innerText = siteContent["contact"]["contact-h4"];
const contactContent = contactItems.querySelectorAll("p");
contactContent[0].innerText = siteContent.contact.address;
contactContent[1].innerText = siteContent.contact.phone;
contactContent[2].innerText = siteContent.contact.email;

/*
/
/     Footer
/
*/

const footerItem = document.querySelector("footer p");
footerItem.innerText = siteContent.footer.copyright;