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
    "h1": "DOM Is Awesome ",
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
const navigation = document.querySelectorAll('header a');
const navAdditions = document.querySelector('nav')
const logo = document.getElementById('logo-img');
const ctaText = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button')
const ctaImg = document.querySelector('#cta-img');
const mainContentHeaders = document.querySelectorAll('.main-content h4');
const mainContentParagraphs = document.querySelectorAll('.main-content p')
const contactContentHeaders = document.querySelectorAll('.contact h4');
const contactContentParagraphs = document.querySelectorAll('.contact p')
const middleImage = document.getElementById('middle-img')
const footer = document.querySelector('footer');

// stretch variables
const paragraphs = document.querySelectorAll('p');
const cta = document.querySelector('.cta');
const mainContent = document.querySelector('.main-content');


// ============================================= Navigation and Logo
navigation[0].textContent = siteContent.nav["nav-item-1"];
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];

logo.src = siteContent["nav"]["img-src"];


// ============================================= Navigation Color Change and Additional Nav Items

// add class to navigation to make color green
navigation.forEach(item => item.style.color = 'green');

// additional navigation elements
const newNav1 = document.createElement('a');
const newNav2 = document.createElement('a');

newNav1.href = '#';
newNav1.textContent = 'Awesome';
newNav1.style.color = 'green';

newNav2.href = '#';
newNav2.textContent = 'Secrets';
newNav2.style.color = 'green';

navAdditions.append(newNav1);
navAdditions.append(newNav2);


// ============================================= CTA section
ctaText.textContent = siteContent['cta']['h1']
ctaButton.textContent = siteContent['cta']['button']
ctaImg.src = siteContent['cta']['img-src'];


// ============================================= main content
mainContentHeaders[0].textContent = siteContent['main-content']['features-h4'];
mainContentHeaders[1].textContent = siteContent['main-content']['about-h4'];
mainContentHeaders[2].textContent = siteContent['main-content']['services-h4'];
mainContentHeaders[3].textContent = siteContent['main-content']['product-h4'];
mainContentHeaders[4].textContent = siteContent['main-content']['vision-h4'];

mainContentParagraphs[0].textContent = siteContent['main-content']['features-content'];
mainContentParagraphs[1].textContent = siteContent['main-content']['about-content'];
mainContentParagraphs[2].textContent = siteContent['main-content']['services-content'];
mainContentParagraphs[3].textContent = siteContent['main-content']['product-content'];
mainContentParagraphs[4].textContent = siteContent['main-content']['vision-content'];


// ============================================= middle image
middleImage.src = siteContent['main-content']['middle-img-src'];


// ============================================= contact
contactContentHeaders[0].textContent = siteContent['contact']['contact-h4'];
contactContentParagraphs[0].textContent = siteContent['contact']['address'];
contactContentParagraphs[1].textContent = siteContent['contact']['phone'];
contactContentParagraphs[2].textContent = siteContent['contact']['email'];


// ============================================= footer
footer.textContent = siteContent.footer.copyright;


// ============================================= stretch goals

// general style changes using JS
ctaButton.style.width = "200px";
ctaButton.style.height = "60px";

paragraphs.forEach(items => items.style.color = "#383838");

footer.style.borderTop = "2px solid black";
footer.style.paddingTop = "20px";

// event listener stretch goals
ctaButton.addEventListener('click', function () {
  paragraphs.forEach(items => items.style.color = "red");

});

ctaButton.addEventListener('dblclick', function () {
  paragraphs.forEach(items => items.style.color = "#383838");

});

newNav1.addEventListener('click', function () {
  cta.style.display = "none";
});

newNav2.addEventListener('click', function () {
  cta.style.display = "flex";
});