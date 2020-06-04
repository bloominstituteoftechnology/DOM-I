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

var aTag = document.querySelectorAll('a')
console.log(aTag);

aTag[0].textContent = siteContent.nav["nav-item-1"];
aTag[0].style.color = 'green';
console.log(aTag[0]);

aTag[1].textContent = siteContent.nav["nav-item-2"];
aTag[1].style.color = 'green';
console.log(aTag[1]);


aTag[2].textContent = siteContent.nav["nav-item-3"];
aTag[2].style.color = 'green';
console.log(aTag[2]);


aTag[3].textContent = siteContent.nav["nav-item-4"];
aTag[3].style.color = 'green';
console.log(aTag[3]);


aTag[4].textContent = siteContent.nav["nav-item-5"];
aTag[4].style.color = 'green';
console.log(aTag[4]);


aTag[5].textContent = siteContent.nav["nav-item-6"];
aTag[5].style.color = 'green';
console.log(aTag[5]);



//for(var i = 0; i < 'a'.length; i++) {
   // 'a'[i].textContent = siteContent.nav["nav-item-1"]
//}
//console.log(aTag)

// CTA SECTION

const cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

const ctaH = document.querySelector("h1");
console.log(ctaH);

ctaH.textContent = siteContent.cta.h1;


const ctaB = document.querySelector("button");
console.log(ctaB)

ctaB.textContent = siteContent.cta.button;

// TITLES H4
const titles = document.querySelectorAll('h4')
console.log(titles)

titles[0].textContent = siteContent["main-content"]["features-h4"];
console.log(titles[0]);

titles[1].textContent = siteContent["main-content"]["about-h4"];
console.log(titles[1]);

titles[2].textContent = siteContent["main-content"]["services-h4"];
console.log(titles[2]);

titles[3].textContent = siteContent["main-content"]["product-h4"]
console.log(titles[3]);

titles[4].textContent = siteContent["main-content"]["vision-h4"]
console.log(titles[4])

titles[5].textContent = siteContent.contact["contact-h4"]
console.log(titles[5]);

//PARAGRAPHS
const paragraphs = document.querySelectorAll('p')
console.log(paragraphs);

paragraphs[0].textContent = siteContent["main-content"]["features-content"]
console.log(paragraphs[0]);

paragraphs[1].textContent = siteContent["main-content"]["about-content"]
console.log(paragraphs[1])

paragraphs[2].textContent = siteContent["main-content"]["services-content"]
console.log(paragraphs[2]);

paragraphs[3].textContent = siteContent["main-content"]["product-content"]
console.log(paragraphs[3])

paragraphs[4].textContent = siteContent["main-content"]["vision-content"]
console.log(paragraphs[4]);

paragraphs[5].textContent = siteContent.contact.address
console.log(paragraphs[5])

paragraphs[6].textContent = siteContent.contact.phone
console.log(paragraphs[6])

paragraphs[7].textContent = siteContent.contact.email
console.log(paragraphs[7])


//MIDDLE IMG SRC
const mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
console.log(mainImg);


/*Footer Section */

const footerCR = document.querySelector("footer p");
footerCR.textContent = siteContent.footer.copyright;

console.log(footerCR)






