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
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll("nav a");
nav.forEach((element, index)   =>  {
    return element.innerHTML = siteContent.nav[`nav-item-${index + 1}`];
});
const ctaH1 = document.querySelector(".cta .cta-text h1");
const ctaButton = document.querySelector(".cta .cta-text button")
const ctaImg = document.getElementById("cta-img");
ctaH1.innerHTML = siteContent.cta.h1;
ctaButton.innerHTML = siteContent.cta.button;
ctaImg.src = siteContent.cta["img-src"];
const addHtmlToSection = function(contentArea, arrayOfContentNames) {
    const content = document.querySelectorAll(`.${contentArea} .text-content`);
    content.forEach((item, index)    =>  {
        let h4 = item.querySelector(`h4`)
        let p = item.querySelector(`p`)
        h4.innerHTML = siteContent["main-content"][`${arrayOfContentNames[index]}-h4`];
        p.innerHTML = siteContent["main-content"][`${arrayOfContentNames[index]}-content`];
    });
}
addHtmlToSection("top-content", ["features", "about"]);
addHtmlToSection("bottom-content", ["services", "product", "vision"]);
const middleImg = document.getElementById("middle-img")
middleImg.src = siteContent["main-content"]["middle-img-src"];
const contactH4 = document.querySelector(".contact h4");
const contactP = document.querySelectorAll(".contact p");
contactH4.innerHTML = siteContent.contact["contact-h4"];
contactP.forEach((item, index) =>  {
    const contactInfoArr = ["address", "phone", "email"];
    return item.innerHTML = siteContent.contact[contactInfoArr[index]]
})
const footer = document.querySelector("footer p");
footer.innerHTML = siteContent.footer.copyright;

nav.forEach((item)  =>  {
    return item.style.color = "green";
});
const anchorFAQ = document.createElement("A");
const faqText = document.createTextNode("FAQ");
anchorFAQ.appendChild(faqText);
anchorFAQ.style.color = "green";
document.getElementsByTagName("nav")[0].appendChild(anchorFAQ)
