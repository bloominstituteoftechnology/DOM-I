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

//Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

var aTag = document.querySelectorAll('a')
console.log(aTag, 'navigation');

aTag[0].textContent = siteContent.nav["nav-item-1"];
aTag[0].style.color = 'green';
console.log(aTag[0], 'navigation');

aTag[1].textContent = siteContent.nav["nav-item-2"];
aTag[1].style.color = 'green';
console.log(aTag[1], 'navigation');


aTag[2].textContent = siteContent.nav["nav-item-3"];
aTag[2].style.color = 'green';
console.log(aTag[2], 'navigation');


aTag[3].textContent = siteContent.nav["nav-item-4"];
aTag[3].style.color = 'green';
console.log(aTag[3], 'navigation');


aTag[4].textContent = siteContent.nav["nav-item-5"];
aTag[4].style.color = 'green';
console.log(aTag[4], 'navigation');


aTag[5].textContent = siteContent.nav["nav-item-6"];
aTag[5].style.color = 'green';
console.log(aTag[5], 'navigation');



//for(var i = 0; i < 'a'.length; i++) {
   // 'a'[i].textContent = siteContent.nav["nav-item-1"]
//}
//console.log(aTag)

// CTA SECTION

const cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])
console.log(cta, 'cta');

const ctaH = document.querySelector("h1");
console.log(ctaH, 'cta');

ctaH.textContent = siteContent.cta.h1;
ctaH.style.wordSpacing = '991px';
ctaH.style.marginLeft = '25%'


const ctaB = document.querySelector("button");
console.log(ctaB, 'cta')

ctaB.textContent = siteContent.cta.button;
ctaB.style.marginLeft = '22%'
console.log(ctaB, 'cta')

// TITLES H4
const titles = document.querySelectorAll('h4')
console.log(titles, 'main content')

titles[0].textContent = siteContent["main-content"]["features-h4"];
titles[0].style.color = 'lime';
console.log(titles[0], 'main content');


titles[1].textContent = siteContent["main-content"]["about-h4"];
titles[1].style.color = 'lime';
console.log(titles[1], 'main content');


titles[2].textContent = siteContent["main-content"]["services-h4"];
titles[2].style.color = 'turquoise';
console.log(titles[2], 'main content');

titles[3].textContent = siteContent["main-content"]["product-h4"]
titles[3].style.color = 'turquoise';
console.log(titles[3], 'main content');

titles[4].textContent = siteContent["main-content"]["vision-h4"]
titles[4].style.color = 'turquoise';
console.log(titles[4], 'main content')

titles[5].textContent = siteContent.contact["contact-h4"]
titles[5].style.color = 'lime';
console.log(titles[5], 'contact');

//PARAGRAPHS
const paragraphs = document.querySelectorAll('p')
console.log(paragraphs);

paragraphs[0].textContent = siteContent["main-content"]["features-content"]
console.log(paragraphs[0], 'main content');

paragraphs[1].textContent = siteContent["main-content"]["about-content"]
console.log(paragraphs[1], 'main content')

paragraphs[2].textContent = siteContent["main-content"]["services-content"]
console.log(paragraphs[2], 'main content');

paragraphs[3].textContent = siteContent["main-content"]["product-content"]
console.log(paragraphs[3], 'main content')

paragraphs[4].textContent = siteContent["main-content"]["vision-content"]
console.log(paragraphs[4], 'main content');

paragraphs[5].textContent = siteContent.contact.address
console.log(paragraphs[5], 'contact')

paragraphs[6].textContent = siteContent.contact.phone
console.log(paragraphs[6], 'contact')

paragraphs[7].textContent = siteContent.contact.email
console.log(paragraphs[7], 'contact')


// MIDDLE IMG SRC //
const mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
console.log(mainImg, 'main content middle image');


// APPRENDCHILD //
const newContent = document.createElement('img');
console.log(newContent, 'apprendchild');

newContent.setAttribute('src','https://i.postimg.cc/k55bTCjp/bandwidth-close-up-computer-connection-1148820.jpg');
newContent.style.width = '876px';
newContent.style.height = '182px';
newContent.style.marginTop = '4%'
console.log(newContent, 'apprendchild');

const mainContentI = document.querySelector('.main-content');
console.log(mainContentI, 'apprendchild');

mainContentI.appendChild(newContent);
console.log(mainContentI, 'apprendchild');


// PREPEND //
const preContent = document.createElement('img');
console.log(preContent, 'prepend');

preContent.setAttribute('src','https://i.postimg.cc/0jZzxJ30/technology-computer-display-text-330771.jpg')
preContent.style.width = '876px';
preContent.style.height = '279px';
preContent.style.marginBottom = '5%'
console.log(preContent, 'prepend');

const ctaC = document.querySelector('.contact');
ctaC.prepend(preContent);
console.log(ctaC, 'prepend');



// FOOTER SECTION //

const footerCR = document.querySelector("footer p");
footerCR.textContent = siteContent.footer.copyright;
footerCR.style.marginTop = '10%'
console.log(footerCR, 'footer')






