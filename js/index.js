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



// Implement Nav Links
let allNavLinks = document.links;
// console.log(siteContent.nav["nav-item-1"])

for (let i=1; i < 6; i++){
  // console.log(siteContent.nav[`nav-item-${i}`]);
  let navFix = siteContent.nav[`nav-item-${i}`];
  // console.log(allNavLinks[i])
  allNavLinks[i].innerText = navFix;
}


// Implement Call to Action (cta)
const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta.h1; //'DOM IS AWESOME'

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button; //'Get Started'

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Implement Main Content

const mainContent_texts = document.querySelectorAll('.main-content h4, .main-content p');
// const mainContent_h4_p = document.querySelectorAll('.text-content > h4, .text-content > p'); -> This selects the same tags
// console.log(mainContent_texts);
arrayMCTexts = Array.from(mainContent_texts);
// console.log(arrayMCTexts);
// console.log(siteContent['main-content']['features-h4'])

arrayMCTexts[0].textContent = siteContent["main-content"]['features-h4'];
arrayMCTexts[1].textContent = siteContent["main-content"]['features-content'];
arrayMCTexts[2].textContent = siteContent["main-content"]['about-h4'];
arrayMCTexts[3].textContent = siteContent["main-content"]['about-content'];
arrayMCTexts[4].textContent = siteContent["main-content"]['services-h4'];
arrayMCTexts[5].textContent = siteContent["main-content"]['services-content'];
arrayMCTexts[6].textContent = siteContent["main-content"]['product-h4'];
arrayMCTexts[7].textContent = siteContent["main-content"]['product-content'];
arrayMCTexts[8].textContent = siteContent["main-content"]['vision-h4'];
arrayMCTexts[9].textContent = siteContent["main-content"]['vision-content'];

//Random code that didn't work -->

// arrayMC_h4_p = Array.from(mainContent_h4_p);
// console.log(arrayMC_h4_p);

// This makes the dangerous assumption that object keys are in order
// const mainContentFix = arrayMC_h4_p.map(item => {
//   for (let i=0; i<arrayMC_h4_p.length; i ++){
//     console.log(siteContent['main-content']);
//     return item = siteContent['main-content'][Object.keys(item)][i]
//   }
// });
  // console.log(siteContent["main-content"][`features-h4`]);
  // let h4Fix = siteContent["main-content"][i];
  // mc_h4[i].innerText = h4Fix;

const mainContentImg = document.querySelector('.middle-img');
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Implement Contact
const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

//const contactP = document.querySelectorAll('.contact p');
const contactP1 = document.querySelector('.contact p');
contactP1.textContent = siteContent['contact']['address'];

const contactP2 = contactP1.nextElementSibling;
contactP2.textContent = siteContent['contact']['phone'];

const contactP3 = contactP2.nextElementSibling;
contactP3.textContent = siteContent['contact']['email'];

// Implement Footer
const footerP = document.querySelector('footer'); // only one element in the footer
footerP.textContent = siteContent['footer']['copyright'];



//Adding Content

//Turning Nav Links to Green
for (let i = 0; i < allNavLinks.length; i++) {
  allNavLinks[i].style.color = 'green'
}

//Add 2 items to navigation
const rightLink = document.createElement("a");
rightLink.setAttribute('href', "#Righty")
rightLink.textContent = " -----> RightyLink";
rightLink.style.color = 'darkred';
allNavLinks[5].appendChild(rightLink); // append to last node in allNavLinks
// Is there an easy way to add spacing between the last node and this one??

const leftLink = document.createElement("a");
leftLink.setAttribute('href', "#Lefty")
leftLink.textContent = "LeftyLink <----- ";
leftLink.style.color = 'darkred';
allNavLinks[0].prepend(leftLink);

// STRETCH - Update Styles
for (let i = 0; i < allNavLinks.length; i++) {
  allNavLinks[i].style.fontWeight = 'bold'
}

const mainContent_p = document.querySelectorAll('.main-content p');
for (let i = 0; i < mainContent_p.length; i++) {
  mainContent_p[i].style.fontStyle = 'oblique'
  mainContent_p[i].style.padding = '5%';
  mainContent_p[i].style.border = 'thin dotted slategray'
}