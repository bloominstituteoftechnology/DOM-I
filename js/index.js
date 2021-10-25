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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


//updating HTML with the JSON Data

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const links = document.querySelectorAll('a');

links.forEach((currentValue, i) => currentValue.textContent = Object.values(siteContent.nav)[i]);
links.forEach((currentValue, i) => (currentValue.textContent = Object.values(siteContent.nav)[i]));

links.forEach(item => item.style.color = 'green');
links.forEach((item) => (item.style.color = 'green'));

const addLink = document.querySelector('nav');

const newAtag = document.createElement('a');
newAtag.textContent = "Outreach";
newAtag.textContent = 'Outreach';
newAtag.href = '#';
newAtag.style.color = "green";
newAtag.style.color = 'green';
addLink.appendChild(newAtag);

const newH3 = document.createElement('h3');
newH3.textContent = "Navigation:";
newH3.textContent = 'Navigation:';
newH3.style.fontSize = '20px';
addLink.prepend(newH3);

// console.log(addLink);


const ctaH1 = document.querySelectorAll('h1');
ctaH1[0].innerHTML = siteContent.cta.h1;


const btn = document.querySelectorAll('button');
btn[0].textContent = siteContent.cta.button;
// console.log(btn);

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta["img-src"];
ctaImg.src = siteContent.cta['img-src'];

const topH4 = document.querySelectorAll('h4');
topH4[0].textContent = siteContent['main-content']["features-h4"];
topH4[1].textContent = siteContent['main-content']["about-h4"];
topH4[2].textContent = siteContent['main-content']["services-h4"];
topH4[3].textContent = siteContent['main-content']["product-h4"];
topH4[4].textContent = siteContent['main-content']["vision-h4"];
topH4[5].textContent = siteContent["contact"]["contact-h4"];
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];
topH4[2].textContent = siteContent['main-content']['services-h4'];
topH4[3].textContent = siteContent['main-content']['product-h4'];
topH4[4].textContent = siteContent['main-content']['vision-h4'];
topH4[5].textContent = siteContent['contact']['contact-h4'];

const pTags = document.querySelectorAll('p');
pTags[0].textContent = siteContent["main-content"]["features-content"];
pTags[1].textContent = siteContent["main-content"]["about-content"];
pTags[2].textContent = siteContent["main-content"]["services-content"];
pTags[3].textContent = siteContent["main-content"]["product-content"];
pTags[4].textContent = siteContent["main-content"]["vision-content"];
pTags[5].textContent = siteContent["contact"]["address"];
pTags[6].textContent = siteContent["contact"]["phone"];
pTags[7].textContent = siteContent["contact"]["email"];
pTags[8].textContent = siteContent["footer"]["copyright"];

const midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];
pTags[0].textContent = siteContent['main-content']['features-content'];
pTags[1].textContent = siteContent['main-content']['about-content'];
pTags[2].textContent = siteContent['main-content']['services-content'];
pTags[3].textContent = siteContent['main-content']['product-content'];
pTags[4].textContent = siteContent['main-content']['vision-content'];
pTags[5].textContent = siteContent['contact']['address'];
pTags[6].textContent = siteContent['contact']['phone'];
pTags[7].textContent = siteContent['contact']['email'];
pTags[8].textContent = siteContent['footer']['copyright'];

const midImg = document.getElementById('middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

const footer = document.querySelector('footer');
// console.log(footer);
const update = document.createElement('button');
update.textContent = "update";
update.textContent = 'update';
footer.appendChild(update);
update.style.fontSize = '30px';
update.style.width = '20%';

update.addEventListener('click', event => {
  ctaH1[0].innerHTML = "<h1>Content <br>has been<br> Updated</h1>";
  console.log("yes this works!");
update.addEventListener('click', (event) => {
	ctaH1[0].innerHTML = '<h1>Content <br>has been<br> Updated</h1>';
	console.log('yes this works!');
});

footer.style.display = 'flex';
// footer.style.alignItems = 'space-around';
// footer.style.justifyContent = 'space-around';
footer.style.flexDirection = 'column';
pTags[8].style.marginBottom = '20px'; 
pTags[8].style.marginBottom = '20px';




// #### Create selectors to point your data into elements

// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images. Use the IDs to update src path content

// #### Update the HTML with the JSON data

// * [x] Remember, NO direct updating of the HTML source is allowed.
// * [x] Using your selectors, update the content to match the example file.
// * [x] Remember to update the src attributes on images

// #### Add new content

// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

// ### Task 3: Stretch

// * [ ] Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.  
// * [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

// #### Stretch Project: Digital Timer

// This project is heavier on logic but employs some DOM manipulation to achieve its goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.

// ## Submission Format

// **Follow these steps for completing your project.**

// * [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
