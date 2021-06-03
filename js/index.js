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

// Get nav links and fill with with content
let navLinks = document.querySelectorAll('header > nav > a');
// console.log(navLinks);
navLinks[0].innerHTML = 'Services';
navLinks[1].innerHTML = 'Product';
navLinks[2].innerHTML = 'Vision';
navLinks[3].innerHTML = 'Features';
navLinks[4].innerHTML = 'About';
navLinks[5].innerHTML = 'Contact';

// change color to green
// navLinks.style.color = 'green';  <- This one doesn't work
navLinks.forEach(a => a.style.color = 'green');

// get nav
let mainNav = document.querySelector('nav');
// appendchild and prepend
let homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.innerHTML = 'Home';
let jobsLink = document.createElement('a');
jobsLink.href = '#';
jobsLink.innerHTML = 'Careers';
mainNav.prepend(homeLink);
mainNav.appendChild(jobsLink);


// testing to see if the content was added

// for(let i = 0; i < navLinks.length; i ++){
//   console.log(navLinks[i]);
// }

// Get cta-text, change h1 and button
let ctaHeading = document.querySelector('.cta-text > h1');
// did it work?
// console.log(ctaHeading); 
ctaHeading.innerHTML = 'DOM<br> Is<br> Awesome';
// check to see if it was changed
// console.log(ctaHeading);
let ctaButton = document.querySelector('.cta-text > button');
// did it work?
// console.log(ctaButton);
ctaButton.innerHTML = 'Get Started';
// change html background on button click
ctaButton.addEventListener('click', function ChangeBgColor(){
  const htmlDoc = document.querySelector('html');
  if(htmlDoc.style.background = '#fff'){
    htmlDoc.style.background = '#ddd';
  }else{
    htmlDoc.style.background = '#fff';
  }
  // trying to set up a toggle, but this isn't working, for some reason...ask in class
})
// change cta image
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', 'img/header-img.png');
// get top content
let topContent = document.querySelector('.top-content');
// console.log(topContent);
// top content features
let topContentHeadings = topContent.querySelectorAll('h4');
topContentHeadings[0].textContent = 'Features';
topContentHeadings[1].textContent = 'About';
// is it still working?
// console.log(topContentHeadings[1]);
let topContentParagraphs = topContent.querySelectorAll('p');
topContentParagraphs[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topContentParagraphs[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// still working?
// console.log(topContentParagraphs[0]);
// console.log(topContentParagraphs[1]);
// code snippets image
let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', 'img/mid-page-accent.jpg');
// get bottom content
let bottomContent = document.querySelector('.bottom-content');
let bottomContentHeadings = bottomContent.querySelectorAll('h4');
bottomContentHeadings[0].textContent = 'Services';
bottomContentHeadings[1].textContent = 'Product';
bottomContentHeadings[2].textContent = 'Vision';
// still working?
// console.log(bottomContentHeadings[1]);
let bottomContentParagraphs = bottomContent.querySelectorAll('p');
bottomContentParagraphs[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContentParagraphs[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContentParagraphs[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// get contact section heading and change it
let contactHeading = document.querySelector('.contact > h4');
contactHeading.innerHTML = 'Contact';
// get contact p tags
let contactInfo = document.querySelectorAll('.contact > p');
contactInfo[0].innerHTML = '123 Way 456 Street<br> Somewhere, USA';
contactInfo[1].innerHTML = '1 (888) 888-8888';
contactInfo[2].innerHTML = 'sales@greatidea.io';
// get footer copyright 
let copyrightInfo = document.querySelector('footer > p');
copyrightInfo.textContent = 'Copyright Great Idea! 2018';
// change css for copyright info
copyrightInfo.style.background = '#333';
copyrightInfo.style.color = '#fff';