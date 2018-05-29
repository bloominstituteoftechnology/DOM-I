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
logo.setAttribute("src", siteContent["nav"]["img-src"])

//Header Section updated
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link,i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`]; 
  link.style.color = "green";
});


const freeStuffLink = document.createElement('a');
freeStuffLink.textContent = "Free Items";
freeStuffLink.style.cssText = navLinks[0].style.cssText;
freeStuffLink.setAttribute('href', '#');
nav.prepend(freeStuffLink);

const donationsLink = document.createElement('a');
donationsLink.textContent = "Donations";
donationsLink.style.cssText = navLinks[0].style.cssText;
donationsLink.setAttribute('href', '#');
nav.append(donationsLink);

//CTA Section
const ctaSection = document.querySelector(".cta");
const domText = ctaSection.querySelector(".cta-text h1");

domText.innerHTML = `DOM<br> Is<br> Awesome`;

const domBtn = ctaSection.querySelector(".cta-text button");

domBtn.textContent = `Get Started`;

const ctaImg = ctaSection.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content Section

const mainContentObj = siteContent["main-content"];
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', mainContentObj["middle-img-src"]);

const textContentsH4 = document.querySelectorAll('.main-content h4');

const textContentsP = document.querySelectorAll('.main-content p');

function attachContent(nodes, contentObj,regex) {
  let i = 0;
  const regExp = new RegExp(regex);
  for(let key in contentObj) {
    if(key.match(regExp)) {
      nodes[i].textContent = contentObj[key];
      i++;
    }
  }
}

attachContent(textContentsH4, mainContentObj, /\bh4\b/);
attachContent(textContentsP, mainContentObj, /\b-content\b/);

//Contact Section

const contactSection = document.querySelector('.contact');

const contactHeading = contactSection.querySelector('h4');

contactHeading.textContent = siteContent.contact["contact-h4"];

const address = contactSection.querySelectorAll('p')[0];
address.textContent = siteContent.contact.address;

const phoneNum = contactSection.querySelectorAll('p')[1];
phoneNum.textContent = siteContent.contact.phone;

const email = contactSection.querySelectorAll('p')[2];

email.textContent = siteContent.contact.email;

//Footer

const footerP = document.querySelector('footer p');

footerP.textContent = siteContent.footer.copyright;