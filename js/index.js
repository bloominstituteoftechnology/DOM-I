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

 
// });

const header = document.querySelector('header');
 
 
const navItems = document.querySelectorAll('a')


// NAV SECTION
navItems.forEach((value, index) => 
{value.innerText = siteContent["nav"][`nav-item-${index++ }`]})

header.append(navItems)


//IMG SECTION
const ctaIMG = document.querySelector('#cta-img');
ctaIMG.src = "img/header-img.png";

const logo = document.querySelector('#logo-img');
logo.src = "img/logo.png";
 
const middleImg = document.querySelector('.middle-img');
middleImg.src ='img/mid-page-accent.jpg';

//************************** */
//CTA 
const ctaSec = document.querySelector('.cta');
 
const DOA = document.getElementsByTagName('h1')[0];
 
DOA.innerText = siteContent['cta']['h1'];
  // DOA.style.display = inline-flex;

// let button = document.getElementsByTagName("button")[0];
// button.innerText = siteContent['cta']['button'];

let button = document.querySelector('button');
button.textContent ='GET STARTED'

//MAIN CONTENT//
mainContent = document.querySelector('.main-content');
// mainContent.style.backgroundColor = 'yellow';

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerText =
 siteContent['main-content']['features-h4'];

 let featuresP = document.getElementsByTagName('p')[0];
 featuresP.innerText = siteContent['main-content']['features-content'];

 let aboutH4 = document.getElementsByTagName('h4')[1];

  aboutH4.innerText = siteContent['main-content']['about-h4'];

  let aboutP = document.getElementsByTagName('p')[1];
  aboutP.innerText = siteContent['main-content']['about-content'];

  ///BOTTOM ////
  const bottom = document.querySelector('.bottom-content');
 
  let services = document.getElementsByTagName('h4')[2];
  services.innerText = siteContent['main-content']['services-h4']
  let serviceP = document.getElementsByTagName('p')[2];
  serviceP.innerText = siteContent['main-content']['services-content']
  
  let product = document.getElementsByTagName('h4')[3];
  product.innerText = siteContent['main-content']['product-h4']
  let productP = document.getElementsByTagName('p')[3];
  productP.innerText = siteContent['main-content']['services-content']

  let vision = document.getElementsByTagName('h4')[4];
   vision.innerText = siteContent['main-content']['vision-h4']
   let visionP = document.getElementsByTagName('p')[4];
   visionP.innerText = siteContent['main-content']['vision-content']

///CONTACT//
const contact = document.querySelector('.contact');

let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerText = siteContent['contact']['contact-h4'];

let address =  document.getElementsByTagName('p')[5];
address.innerText= siteContent['contact']['address']
let phone =  document.getElementsByTagName('p')[6];
phone.innerText= siteContent['contact']['phone'];
let email = document.getElementsByTagName( 'p')[7];
email.innerText = siteContent['contact']['email'];

///Footer
const copyright = document.getElementsByTagName('p')[8];
copyright.innerText =siteContent['footer']['copyright']



 

//  DOA.style.color =red;
 function ohYeah (){
   const exclaim = document.createElement('p');
   exclaim.textContent = "OH YEAH !!";
   DOA.appendChild(exclaim);
    //  DOA.style.backgroundColor = 'yellow';
     logo.style.backgroundColor ='yellow';

  
  }

   button.addEventListener('click', ohYeah)
   
  