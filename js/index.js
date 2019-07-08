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
////nav
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll('a');

nav[0].textContent = 'Services';
nav[1].textContent = 'Product';
nav[2].textContent = 'Vision';
nav[3].textContent = 'Features';
nav[4].textContent = 'About';
nav[5].textContent = 'Contact';

const nav2 = document.querySelector('nav');
const newATag = document.createElement('a');
const otherNewATag = document.createElement('a');
const questionsText = document.createTextNode('Questions');
const subscribeText = document.createTextNode('Subscribe');

newATag.appendChild(questionsText);
nav2.prepend(newATag);///puts questions at beginning of nav tabs
otherNewATag.appendChild(subscribeText);
nav2.append(otherNewATag);////puts subscribe at end of nav tabs

const allNavLinks = document.querySelectorAll('nav a');
allNavLinks.forEach((link) => {
  link.style.color = 'green';
})


///cta

// /// "cta": {
//   "h1": "DOM Is Awesome",
//   "button": "Get Started",
//   "img-src": "img/header-img.png"
// },

const header = document.querySelector('#cta-img');
header.src = siteContent.cta['img-src'];

const button = document.querySelector('button');
button.textContent= 'Get Started';
button.style.color= 'black';

const Title = document.querySelector('.cta-text h1');
Title.innerHTML = 'DOM<br> IS <br> AWESOME';
Title.style.color= 'green';
Title.onmouseover = logMouseOver;

function logMouseOver(){
  Title.innerHTML = 'THE BEES KNEES';
  Title.style.color= 'blue';

  setTimeout (function(){
   Title.innerHTML = 'DOM<br> IS <br> AWESOME';
   Title.style.color= 'green';
  }, 1000);
}

////middle

// //  "main-content": {
//   "features-h4":"Features",
//   "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "about-h4":"About",
//   "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "middle-img-src": "img/mid-page-accent.jpg",
//   "services-h4":"Services",
//   "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "product-h4":"Product",
//   "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "vision-h4":"Vision",
//   "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
// },

const featureH4 = document.querySelector('.text-content h4');
featureH4.textContent='Features';

const featureContent = document.querySelector('.text-content p');
featureContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';
featureContent.style.color='blue';
featureContent.style.fontSize= '18px';



const midImg = document.querySelector('.main-content img');
midImg.src = siteContent['main-content']['middle-img-src'];

const bottom = document.querySelectorAll('.bottom-content .text-content h4')
bottom[0].textContent = 'Services';
bottom[1].textContent = 'Product';
bottom[2].textContent = 'Vision';

const bottom2 = document.querySelectorAll('.bottom-content .text-content p');
bottom2[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottom2[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottom2[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottom2[0].style.color= 'green';
bottom2[2].style.color= 'green';
bottom2[1].style.color= 'blue';

bottom2[0].style.fontSize= '18px';
bottom2[1].style.fontSize= '18px';
bottom2[2].style.fontSize= '18px';



///contact
// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",

const contact = document.querySelectorAll('.contact p');
contact[0].textContent ="123 Way 456 Street Somewhere, USA";
contact[1].textContent ="1 (888) 888-8888";
contact[2].textContent ="sales@greatidea.io";

contact[0].style.color= 'blue';
contact[1].style.color= 'green';
contact[2].style.color= 'blue';

contact[0].style.fontSize= '18px';
contact[1].style.fontSize= '18px';
contact[2].style.fontSize= '18px';



////footer
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;
footer.style.color= 'green';
footer.style.fontSize= '18px';

