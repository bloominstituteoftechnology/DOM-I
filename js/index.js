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

//testing the commit
// for Menu Links
let navMnu = document.querySelectorAll('a');
// navMnu.forEach((curVal,idx){
//   return (curVal.textContent = Object.values(siteContent.nav)[idx])
//  });

navMnu.forEach((curVal,idx) => (curVal.textContent = Object.values(siteContent.nav)[idx]));

//for header Title
let hdrBigTitle = document.querySelector('h1');
hdrBigTitle.textContent = siteContent.cta.h1

//for button
let hdrbtn = document.querySelector('button');
hdrbtn.textContent = siteContent.cta.button

//for header logo-img
let hdrimg = document.getElementById('cta-img');
hdrimg.setAttribute('src' , siteContent['cta']['img-src'])

/* //for main-content top-content 'h4' 'Features'
let mainCntTopCnt = document.querySelector('.top-content')
//for main-content top-content text-content 'p' 'Features
let mainCntTextCnt = document.querySelector('.text-content')
//for main-content top-content 'h4 'About'
let mainCnt

//for main-content top-content 'h4' 'Features'
mainCntTopCnt.querySelector('h4').textContent = siteContent['main-content']['features-h4']
//for main-content top-content text-content 'p' 'Features'
mainCntTextCnt.querySelector('p').textContent = siteContent['main-content']['features-content']

*/

// Node list main-content top-content 'Features' with 'h4' and 'p' 
let mainCnt = document.querySelectorAll('.text-content')
mainCnt[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
mainCnt[0].querySelector('p').textContent = siteContent['main-content']['features-content']

// main-content top-content 'About' with 'h4' and 'p'
mainCnt[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
mainCnt[1].querySelector('p').textContent = siteContent['main-content']['about-content']

//main-content top-content 'Services' with 'h4' and 'p'
mainCnt[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
mainCnt[2].querySelector('p').textContent = siteContent['main-content']['services-content']

// main-content top-content 'middle-img'
let midImg = document.getElementById('middle-img')
midImg.setAttribute('Src' , siteContent['main-content']['middle-img-src'])

//main-content bottom-content 'Product' with 'h4' and 'p'
mainCnt[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
mainCnt[3].querySelector('p').textContent = siteContent['main-content']['product-content']

//main-content bottom-content 'Vision'
mainCnt[3].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
mainCnt[3].querySelector('p').textContent = siteContent['main-content']['vision-content']

//Contact with 'h4' and 'p'
let contactProfile = document.querySelector('.contact')
//contactVal[0].querySelector('h4').textContent = siteContent['contact']['contact-h4'] 
// contactVal.querySelector('h4').textContent = siteContent['contact']['contact-h4']
// contactVal.querySelector('p').textContent = siteContent['contact']['address']
// contactVal.querySelector('p').textContent = siteContent['contact']['phone']
// contactVal.querySelector('p').textContent = siteContent['contact']['email']

//Contact address 'h4'
contactProfile.querySelector('h4').textContent = siteContent['contact']['contact-h4']

//getting the leaves
let detailContact  = contactProfile.querySelectorAll('p')

//address
detailContact[0].textContent = siteContent['contact']['address']
//phone
detailContact[1].textContent = siteContent['contact']['phone']
//email
detailContact[2].textContent = siteContent['contact']['email']
//footer
let footerVal = document.querySelector('footer');
footerVal.textContent = siteContent['footer']['copyright']

