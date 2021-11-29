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
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!');


// Create selectors to access the relevant elements
  // Header
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const logo = document.querySelector("#logo-img");

  // CTA
  const getStartedText = document.querySelector("h1");
  const getStartedButton = document.querySelector("button");
  const ctaImage = document.querySelector("#cta-img");

  // Main content
  const featuresTitle = document.querySelector(".text-content:nth-of-type(1) h4");
  const aboutTitle = document.querySelector(".text-content:nth-of-type(2) h4");
  const servicesTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
  const productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
  const visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
  const featuresParagraph = document.querySelector(".text-content:nth-of-type(1) p");
  const aboutParagraph = document.querySelector(".text-content:nth-of-type(2) p");
  const servicesParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
  const productParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
  const visionParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");

  const accentImage = document.querySelector("#middle-img");

  // Contact
  const contactTitle = document.querySelector(".contact h4");
  const address = document.querySelector(".contact p:nth-of-type(1)");
  const phone = document.querySelector(".contact p:nth-of-type(2)");
  const email = document.querySelector(".contact p:nth-of-type(3)");

  // Footer
  const footerText = document.querySelector("footer a");


// Add text contents
  // Header
const navLinks = document.querySelectorAll("nav a");
const linkTexts = Object.values(siteContent.nav);
navLinks.forEach((link, i) => {
  link.textContent = linkTexts[i];
  link.classList.add("italic");
});


  // CTA
  getStartedText.textContent = siteContent["cta"]["h1"];
  getStartedButton.textContent = siteContent["cta"]["button"];

  // Main content
    // Titles
    featuresTitle.textContent = siteContent["main-content"]["features-h4"];
    aboutTitle.textContent = siteContent["main-content"]["about-h4"];
    servicesTitle.textContent = siteContent["main-content"]["services-h4"];
    productTitle.textContent = siteContent["main-content"]["product-h4"];
    visionTitle.textContent = siteContent["main-content"]["vision-h4"];
    // Paragraphs
    featuresParagraph.textContent = siteContent["main-content"]["features-content"];
    aboutParagraph.textContent = siteContent["main-content"]["about-content"];;
    servicesParagraph.textContent = siteContent["main-content"]["services-content"];
    productParagraph.textContent = siteContent["main-content"]["product-content"];
    visionParagraph.textContent = siteContent["main-content"]["vision-content"];

  // Contact
  contactTitle.textContent = siteContent["contact"]["contact-h4"];
  address.textContent = siteContent["contact"]["address"];
  phone.textContent = siteContent["contact"]["phone"];
  email.textContent = siteContent["contact"]["email"];

  // Footer
  footerText.textContent = siteContent["footer"]["copyright"];

// Add class names
  // Header

  // navLinks.forEach(function(link){
  //   link.textContent = linkTexts.classList.add("italic");
  // });

  // Footer
  footerText.classList.add("bold");

// Add image sources
logo.src = siteContent["images"]["logo-img"];
ctaImage.src = siteContent["images"]["cta-img"];
accentImage.src = siteContent["images"]["accent-img"];