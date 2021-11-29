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

// Create selectors to access the relevant elements
 // Header
 const header = document.querySelector("header");
 const nav = document.querySelector("nav");
 const linkOne = document.querySelector("a:nth-of-type(1)");
 const linkTwo = document.querySelector("a:nth-of-type(2)");
 const linkThree = document.querySelector("a:nth-of-type(3)");
 const linkFour = document.querySelector("a:nth-of-type(4)");
 const linkFive = document.querySelector("a:nth-of-type(5)");
 const linkSix = document.querySelector("a:nth-of-type(6)");
 const logo = document.querySelector("#logo-img");
 
 // CTA
 const getStartedButton = document.querySelector("button");
 const getStartedText = document.querySelector("h1");
 const ctaImage = document.querySelector("#cta-img");
 
 // Main content
 const featuresTitle = document.querySelector(".text-content:nth-of-type(1) h4");
 const featuresParagraph = document.querySelector(".text-content:nth-of-type(1) p");
 
 const aboutTitle = document.querySelector(".text-content:nth-of-type(2) h4");
 const aboutParagraph = document.querySelector(".text-content:nth-of-type(2) p");
 
 const servicesTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
 const servicesParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
 
 const productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
 const productParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
 
 const visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
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
 linkOne.textContent = siteContent["nav"]["nav-item-1"];
 linkTwo.textContent = siteContent["nav"]["nav-item-2"];
 linkThree.textContent = siteContent["nav"]["nav-item-3"];
 linkFour.textContent = siteContent["nav"]["nav-item-4"];
 linkFive.textContent = siteContent["nav"]["nav-item-5"];
 linkSix.textContent = siteContent["nav"]["nav-item-6"];
 
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
 linkOne.classList.add("italic");
 linkTwo.classList.add("italic");
 linkThree.classList.add("italic");
 linkFour.classList.add("italic");
 linkFive.classList.add("italic");
 linkSix.classList.add("italic");
 
 // Footer
 footerText.classList.add("bold");
 
// Add image sources
accentImage.src = siteContent["images"]["accent-img"];
 
logo.src = siteContent["images"]["logo-img"];
 
ctaImage.src = siteContent["images"]["cta-img"];