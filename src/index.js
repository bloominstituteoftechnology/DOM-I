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
logoImg.src= "http://localhost:9000/img/logo.png";

//cta text h1
const ctaText1 = document.querySelector("h1")
ctaText1.textContent = 'DOM is Awesome'

//cta button
const ctaButton = document.querySelector("button")
ctaButton.textContent = 'Get Started'

//cta image
const ctaImg = document.querySelector("cta-img");
ctaImg.src = "http://localhost:9000/img/cta.png";

//main-content h4 1
const mainContentFirstH4 = document.querySelector("h4")
mainContentFirstH4.textContent = siteContent["main-content"]["features-h4"];

//main content p 1 
const mainContentFirstP = document.querySelectorAll("p");
mainContentFirstP.textContent = siteContent["main-content"]["features-content"];

//main-content h4 2
const mainContentSecondH4 = document.querySelectorAll("h4"[1]);
mainContentSecondH4.textContent = siteContent["main-content"]["about-h4"];

//main content p 2 
const mainContentSecondP = document.querySelectorAll("p"[1]);
mainContentSecondP.textContent = siteContent["main-content"]["about-content"];

//middle image
const accentImg = document.querySelector('#middle-img');
accentImg.src = "http://localhost:9000/img/accent.png";

//main-content h4 3
const mainContentThirdH4 = document.querySelectorAll("h4"[2]);
mainContentThirdH4.textContent = siteContent["main-content"]["services-h4"];

//main content p 3 
const mainContentThirdP = document.querySelectorAll("p"[2]);
mainContentThirdP.textContent = siteContent["main-content"]["services-content"];

//main-content h4 4
const mainContentFourthH4 = document.querySelectorAll("h4"[3]);
mainContentFourthH4.textContent = siteContent["main-content"]["product-h4"];

//main content p 4 
const mainContentFourthP = document.querySelectorAll("p"[3]);
mainContentFourthP.textContent = siteContent["main-content"]["product-content"];

//main-content h4 5
const mainContentFifthH4 = document.querySelectorAll("h4"[4]);
mainContentFifthH4.textContent = siteContent["main-content"]["vision-h4"];

//main content p 5
const mainContentFifthP = document.querySelectorAll("p"[4]);
mainContentFifthP.textContent = siteContent["main-content"]["vision-content"];

//contact h4
const contactH4 = document.querySelector("contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

//contact p1
const contactAddress = document.querySelector("contact p"[0]);
contactAddress.textContent = siteContent.contact.address;

//contact p2
const contactPhone = document.querySelector("contact p"[1]);
contactPhone.textContent = siteContent.contact.phone;

//contact p3
const contactEmail = document.querySelector("contact p"[2]);
contactEmail.textContent = siteContent.contact.email;

//footer a
const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;






