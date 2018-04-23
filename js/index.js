const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-6": "About",
    "nav-item-5": "Contact",
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

/** 
 * Selectors to <nav>'s childs
 */
let nav = document.querySelector('nav');
// console.log(nav);
let nav_a = Array.from(   nav.getElementsByTagName('a')    );
// console.log(nav_a);
nav_a_length = nav_a.length;
nav_a.forEach( (a, index) => {
  // console.log(a);
  let aux = `nav-item-${index+1}`
  // console.log(aux);
  a.textContent = siteContent.nav[aux];
});

/**
 * Selectors to <section.cta>
 */
let cta = document.getElementsByClassName('cta').item(0);
// console.log(cta);
cta.querySelector('h1').textContent = siteContent.cta.h1;
let ctaButton = cta.getElementsByTagName('button').item(0);
ctaButton.textContent = siteContent.cta.button;

/** Handling with the <img> */
// OPTION 1
// console.log(document.getElementById('cta-img'));
let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent.cta["img-src"])
//OPTION 2
// console.log(cta.getElementsByTagName('img'));
// cta.getElementsByTagName('img').item(0).setAttribute('src', siteContent.cta["img-src"]);

/**
 * Selectors to <section.main-content>
 */
/** TOP CONTENT */
let mainTop = document.getElementsByClassName('top-content').item(0);
// console.log(mainTop);
/** MIDDLE CONTENT */
let mainMiddle = document.getElementById('middle-img');
// console.log(mainMiddle);
/** BOTTOM CONTENT */
let mainBottom = document.querySelector('.bottom-content');
// console.log(mainBottom);
/** HANDLING WITH CONTENT */
// Prepare DATA to insert to DOM
const JSONMainContent = siteContent['main-content'];
let topContent = [];
topContent.push(`<h4>${JSONMainContent['about-h4']}</h4><p>${JSONMainContent['about-content']}</p>`);
topContent.push(`<h4>${JSONMainContent['features-h4']}</h4><p>${JSONMainContent['features-content']}</p>`);
// console.log(top['1']);
let bottomContent = [];
bottomContent.push(`<h4>${JSONMainContent['services-h4']}</h4><p>${JSONMainContent['services-content']}</p>`);
bottomContent.push(`<h4>${JSONMainContent['product-h4']}</h4><p>${JSONMainContent['product-content']}</p>`);
bottomContent.push(`<h4>${JSONMainContent['vision-h4']}</h4><p>${JSONMainContent['vision-content']}</p>`);
// ADD content to Top Content
console.log(mainTop.getElementsByClassName('text-content'));
let topTextContent = Array.from( mainTop.getElementsByClassName('text-content') );
topTextContent.forEach( (item, index) => {
  item.innerHTML = topContent[index];
})
// ADD content to Middle Content
mainMiddle.setAttribute('src', JSONMainContent["middle-img-src"]);
// ADD content to Bottom Content
const bottomTextContent = Array.from( mainBottom.getElementsByClassName('text-content') )
bottomTextContent.forEach( (item, i) => {
  item.innerHTML = bottomContent[i];
});

/**
 * Selectors to <section.contact>
 */
let contact = document.querySelectorAll('section.contact').item(0);
// console.log(contact);
/** HANDLING WITH CONTENT */
const contactContent = siteContent.contact
// ADD content to <h4>
document.querySelector('.contact h4').textContent = contactContent['contact-h4'];
// ADD content to <p>s
const contactPs = contact.querySelectorAll('p');
contactPs.item(0).textContent = contactContent.address;
contactPs.item(1).textContent = contactContent.phone;
contactPs.item(2).textContent = contactContent.email;

/**
 * Selectors to <footer>
 */
console.log(document.querySelector('footer'));
document.querySelector('footer').innerHTML = `<p>${siteContent.footer.copyright}</p>`;


/**
 * TASK 3
 */
/** CHANGE color to <a>s */
// Option-1
nav.style.color = `green`;
for ( let a of nav_a ) {
  a.style.color = "inherit";
}
// Option-2
// for ( let a of nav_a ) {
//   a.style.color = "green";
// }

/** ADD new Node to <nav> */
const newA = document.createElement('a');
newA.textContent = "new <a>";
nav.appendChild(newA);

/**
 * STRETCH GOALS
 */
/** UPDATE STYLES */
console.log(ctaButton);
ctaButton.style.cssText = 'background-color: aqua; border-radius: 2rem;';
contact.style.cssText = `display: flex; flex-direction: column;`

/** 
 * ADD BUTTON THAT UPDATES CONTENT
 * toggle 'display: none' on random <div.text-content> Elements
 */
const allContent = topTextContent.concat(bottomTextContent);
console.log(allContent);
function toggleMainContent () {
  const randomNode = Math.floor(Math.random()*allContent.length);
  const item = allContent[randomNode];
  item.classList.toggle('no-visible') ? item.style.display = 'none' : item.style.display = 'block';
}
ctaButton.textContent = "Play with me!";
ctaButton.style.width = '200px';
ctaButton.addEventListener('click', toggleMainContent);