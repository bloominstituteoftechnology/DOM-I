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

const nav = document.querySelector('nav')
const aTag = document.querySelector('nav').querySelectorAll('a');

aTag.forEach(element => {
   element.style.color = 'green'
    });

 var node = document.createElement("a");
 var textNode = document.createTextNode("Invert");
 node.appendChild(textNode);
 document.querySelector('nav').appendChild(node).id = "invert";
  var node2 = document.createElement("a");
  var textNode2 = document.createTextNode("Classic");
  node2.appendChild(textNode2);
 
  document.querySelector('nav').prepend(node2);
  let invert = document.getElementById('invert')
// let revert = document.getElementById("revert").style.display = "none"

  invert.addEventListener('click', ()=>{
     document.querySelector('*').style.color = "white"
     document.querySelector("*").style.backgroundColor = "black"
     
     
  })
  
//   revert.addEventListener('click', ()=>{
//     document.querySelector('*').style.color = "black"
//     document.querySelector("*").style.backgroundColor = "white"
//  })
 
aTag[0].textContent = siteContent["nav"]["nav-item-1"];
aTag[1].textContent = siteContent["nav"]["nav-item-2"];
aTag[2].textContent = siteContent["nav"]["nav-item-3"];
aTag[3].textContent = siteContent["nav"]["nav-item-4"];
aTag[4].textContent = siteContent["nav"]["nav-item-5"];
aTag[5].textContent = siteContent["nav"]["nav-item-6"];



 

 

// end nav




// cta
let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"])

let button = document.querySelector("button")
button.textContent = "Get Started"

let ctaH1 = document.querySelector(".cta-text h1")
ctaH1.textContent = "DOM Is Awesome"
// end cta

//main-content
let featuresH4 = document.querySelector(".main-content").querySelectorAll('h4');
let featureCont = document.querySelector(".main-content").querySelectorAll('p');
featuresH4[0].textContent = siteContent["main-content"]["features-h4"];
featureCont[0].textContent = siteContent['main-content']['features-content'];
featuresH4[1].textContent = siteContent["main-content"]["about-h4"];
featureCont[1].textContent = siteContent['main-content']['about-content'];
const middleImg = document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src'])
featuresH4[2].textContent = siteContent["main-content"]["services-h4"];
featureCont[2].textContent = siteContent['main-content']['services-content'];
featuresH4[3].textContent = siteContent["main-content"]["product-h4"];
featureCont[3].textContent = siteContent['main-content']['product-content'];
featuresH4[4].textContent = siteContent["main-content"]["vision-h4"];
featureCont[4].textContent = siteContent['main-content']['vision-content'];
// end main-content

// contact
let contactH4 = document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4']
let contactPTags = document.querySelector('.contact').querySelectorAll('p');
contactPTags[0].textContent = siteContent['contact']['address'];
contactPTags[1].textContent = siteContent['contact']['phone'];
contactPTags[2].textContent = siteContent['contact']['email'];
// end contact

// footer
let footer = document.querySelector("footer p").textContent = siteContent['footer']['copyright']