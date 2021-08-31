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

//Adding the Nav Text and two new children
const navLinks = document.querySelectorAll('nav a');
const navLinksArray = Array.from(navLinks);
const newNavLinks = ['New', 'Exit'];

// navLinksArray.forEach( item => {
//   console.log(item.textContent);
// });

// console.log(Object.values(siteContent.nav)[1]);
for (let i = 0; i < navLinksArray.length; i++){
  navLinksArray[i].style.color = "green";
  navLinksArray[i].textContent = Object.values(siteContent.nav)[i];
}

function CreateNewNavLinks(navLinkElement){
  navLinkElement.forEach( item => {
    const newNavelemt = document.createElement('a');
    newNavelemt.textContent = item;
    newNavelemt.href = '#';
    newNavelemt.style.color = 'green';
    document.querySelector('nav').appendChild(newNavelemt);
    navLinksArray.push(newNavelemt);
  });
}

CreateNewNavLinks(newNavLinks);

// navLinksArray.forEach( item => {
//   console.log(item);
// });


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



//setting .cta heading and button and Image
const headingTextArray = siteContent.cta.h1.split(' ');
let headerText = '';

for (let i = 0; i < headingTextArray.length; i++){
  if ( i < headingTextArray.length - 1){
    headerText += `${headingTextArray[i]}<br>`;
  }else{
    headerText += `${headingTextArray[i]}`;
  }
}

let ctaHeader = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('.cta-text button');
let ctaImage = document.getElementById("cta-img");

ctaHeader.innerHTML = `<h1>${headerText}</h1>`
ctaButton.textContent = siteContent.cta.button;
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// console.log(headerText);

//Container and Images
const mainContainerArray = Array.from(document.querySelector('.main-content').children);
const containerValues = Object.values(siteContent["main-content"]);
let count = 0;

mainContainerArray.forEach (item => {
  if (item.tagName === 'DIV'){
    const textContainers = Array.from(item.querySelectorAll('.text-content'));
    textContainers.forEach ( textCont => {
      textCont.firstChild.textContent = containerValues[count];
      textCont.lastChild.textContent = containerValues[count + 1];
      count += 2;
    });
  }else{
    item.setAttribute('src', containerValues[count]);
    count += 1;
  };
});

//lets make our footer
const contactContent = Array.from(document.querySelector('.contact').children);
const contactData = Object.values(siteContent.contact);

contactContent.forEach ( (text, index) => {
  text.textContent = contactData[index];
});

// console.log(contactContent);

//and let copyright this work
const footerContent = document.querySelector('footer p').textContent = siteContent.footer.copyright;

