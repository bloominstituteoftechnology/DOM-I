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

//nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const anchorTags = document.querySelectorAll('a');

let counter = 1;
anchorTags.forEach(currentItem => {
  currentItem.textContent = siteContent['nav'][`nav-item-${counter}`];
  currentItem.style.color = 'green';
  counter++
})

const navBar = document.querySelector('nav');

const newAnchorTag1 = document.createElement('a');
newAnchorTag1.textContent = "AppendTag";
newAnchorTag1.style.color = "green";
navBar.appendChild(newAnchorTag1);

const newAnchorTag2 = document.createElement('a');
newAnchorTag2.textContent = "PrependTag";
newAnchorTag2.style.color = "green";
navBar.prepend(newAnchorTag2);


//cta class.
const domIsAwesom = document.querySelector('h1');
domIsAwesom.textContent = siteContent.cta.h1;

const getStartedBtn = document.querySelector('button');
getStartedBtn.textContent = siteContent.cta.button;

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

//main-content class.
const headingFour = document.querySelectorAll('h4');
const paragraphTags = document.querySelectorAll('p');
const middleImg = document.getElementById("middle-img");

headingFour[0].textContent = siteContent["main-content"]["features-h4"];
paragraphTags[0].textContent = siteContent["main-content"]["features-content"];

headingFour[1].textContent = siteContent["main-content"]["about-h4"];
paragraphTags[1].textContent = siteContent["main-content"]["about-content"];

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

headingFour[2].textContent = siteContent["main-content"]["services-h4"];
paragraphTags[2].textContent = siteContent["main-content"]["services-content"];

headingFour[3].textContent = siteContent["main-content"]["product-h4"];
paragraphTags[3].textContent = siteContent["main-content"]["product-content"];

headingFour[4].textContent = siteContent["main-content"]["vision-h4"];
paragraphTags[4].textContent = siteContent["main-content"]["vision-content"];


//contact section.
headingFour[5].textContent = siteContent.contact["contact-h4"];
paragraphTags[5].textContent = siteContent.contact.address;
paragraphTags[6].textContent = siteContent.contact.phone;
paragraphTags[7].textContent = siteContent.contact.email;


//footer.
paragraphTags[8].textContent = siteContent.footer.copyright;

//STRETCH PROBLEMS
const container = document.querySelector('.container');
container.style.padding = "10px ";
container.style.backgroundColor = 'lightgray';

const header = document.querySelector('header');
header.style.borderBottom = '2px solid black';

getStartedBtn.style.backgroundColor = 'silver';
getStartedBtn.style.borderRadius = '5px';

middleImg.style.width = '100%';

const footer = document.querySelector('footer');
footer.style.borderTop = '2px solid black';
footer.style.paddingTop = '10px';



const newH1 = document.createElement('h1');
container.prepend(newH1);

newH1.textContent = 'THIS H1 TEXT IS FOR STRETCH GOAL II. IT WILL APPEAR ONLY IF YOU PRESS THE "GET STARTED" BUTTON';
newH1.style.padding = '40px';
newH1.style.textAlign = 'center';
newH1.style.borderBottom = '2px solid black';
newH1.style.display = 'none';

getStartedBtn.addEventListener('click', (event) => {
  if(newH1.style.display === 'none') {
    newH1.style.display = 'block';
  } else {
    newH1.style.display = 'none';
  }
});