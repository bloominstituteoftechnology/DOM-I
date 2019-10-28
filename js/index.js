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

// NAV links //
const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = 'Services';
navLinks[1].textContent = 'Product';
navLinks[2].textContent = 'Vision';
navLinks[3].textContent = 'Features';
navLinks[4].textContent = 'About';
navLinks[5].textContent = 'Contact';
navLinks.forEach(element => {
  element.style.color = 'green';
});

console.log(navLinks);
// CTA //

const ctaText = document.querySelector('h1');
ctaText.textContent = 'DOM is Awesome!';

const ctaButton = document.querySelector('button');
ctaButton.textContent = 'Get Started';

const ctaImage = document.getElementById('cta-img');
ctaImage.src='img/header-img.png';

// Main Content //

const mainH4s = document.getElementsByTagName('h4');
mainH4s[0].textContent = 'Features';
mainH4s[1].textContent = 'About';
mainH4s[2].textContent = 'Services';
mainH4s[3].textContent = 'Product';
mainH4s[4].textContent = 'Vision';

const mainPs = document.getElementsByTagName('p');
mainPs[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainPs[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainPs[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainPs[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainPs[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const middleImg = document.querySelector('.middle-img').src='img/mid-page-accent.jpg';

// Contact //
mainH4s[5].textContent = 'Contact';
mainPs[5].textContent = '123 Way 456 Street Somewhere, USA';
mainPs[6].textContent = '1 (888) 888-8888';
mainPs[7].textContent = 'sales@greatidea.io';

// Footer //

mainPs[8].textContent = 'Copyright Great Idea! 2018';

// Additions and Improvements //

/* ## Task 3: Add new content
* [X] Change the color of the navigation text to be green.
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items 
to the navigation system. You can call them whatever you want.
* [ ] Check your work by looking at the [original html](original.html) 
in the browser */

const falseAttribution = document.createElement('footer');
falseAttribution.textContent = "I created this whole website.  If you feel like you've seen it before, you're mistaken.  Me.  I did it.  Nathan Saygers"
falseAttribution.style.color = 'gray';
document.querySelector('footer').append(falseAttribution);

const greatIdeaWrapUp = document.createElement('div');
greatIdeaWrapUp.textContent = 'GREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEAGREATIDEA';
greatIdeaWrapUp.style.fontSize = '.5rem';
document.querySelector('body').prepend(greatIdeaWrapUp);