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

// ============================================= Variable definitions
const navigation = document.querySelectorAll('a');
const logo = document.getElementById('logo-img');
const ctaText = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button')
const ctaImg = document.querySelector('#cta-img');
const textContentHeaders = document.querySelectorAll('h4');
const textContentParagraphs = document.querySelectorAll('p')
const middleImage = document.getElementById('middle-img')
const footer = document.querySelector('footer');


// ============================================= Navigation and Logo
navigation[0].textContent = siteContent.nav["nav-item-1"];
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];

logo.src = siteContent["nav"]["img-src"];


// ============================================= CTA section
ctaText.textContent = siteContent['cta']['h1']
ctaButton.textContent = siteContent['cta']['button']
ctaImg.src = siteContent['cta']['img-src'];

// ============================================= main content headers
console.log(textContentHeaders);

textContentHeaders[0].textContent = siteContent['main-content']['features-h4'];
textContentHeaders[1].textContent = siteContent['main-content']['about-h4'];
textContentHeaders[2].textContent = siteContent['main-content']['services-h4'];
textContentHeaders[3].textContent = siteContent['main-content']['product-h4'];
textContentHeaders[4].textContent = siteContent['main-content']['vision-h4'];

// ============================================= main content paragraphs

textContentParagraphs[0].textContent = siteContent['main-content']['features-content'];
textContentParagraphs[1].textContent = siteContent['main-content']['about-content'];
textContentParagraphs[2].textContent = siteContent['main-content']['services-content'];
textContentParagraphs[3].textContent = siteContent['main-content']['product-content'];
textContentParagraphs[4].textContent = siteContent['main-content']['vision-content'];


// ============================================= middle image
middleImage.src = siteContent['main-content']['middle-img-src'];



// ============================================= contact
textContentHeaders[5].textContent = siteContent['contact']['contact-h4'];
textContentParagraphs[5].textContent = siteContent['contact']['address'];
textContentParagraphs[6].textContent = siteContent['contact']['phone'];
textContentParagraphs[7].textContent = siteContent['contact']['email'];


// ============================================= footer
footer.textContent = siteContent.footer.copyright;