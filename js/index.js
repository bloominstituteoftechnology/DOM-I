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

//================= Nav Bar Elements and Methods Here ===========//

const navItems = document.querySelectorAll("a");
navItems.forEach((link, i) => {
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
})

navItems.forEach((link, i) => {
navItems[i].style.color = "darkgreen";
})

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//=================  CTA Elements and Methods Here  ==============//
const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.setAttribute('style', 'white-space: pre;');
ctaHeader.textContent = "DOM \r\n";
ctaHeader.textContent += "IS \r\n";
ctaHeader.textContent += "AWESOME";
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);



//=================  Main Content Elements and Methods  ============//
const h4 = document.getElementsByTagName("h4");
let mainContentArray = ["features", "about", "services", "product", "vision"];

for (let i = 0; i < mainContentArray.length; i++) {
  h4[i].textContent = siteContent["main-content"][`${mainContentArray[i]}-h4`]; 
}

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const midContentP = document.querySelectorAll(".main-content p");
let midContentArray = mainContentArray;
for (let i = 0; i < midContentArray.length; i++) {
  midContentP[i].textContent = siteContent["main-content"][`${midContentArray[i]}-content`];
}
//=================  Contact Elements and Methods  ===============//

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = "Contact";
const contactText = document.querySelectorAll(".contact p");
let contactArray = ["address", "phone", "email"];
for (let i = 0; i < contactArray.length; i++) {
  contactText[i].textContent = siteContent["contact"][`${contactArray[i]}`];
};
//=================  Footer Elements and Methods  ===============//
const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent.footer.copyright;






