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

//Update nav links
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach( (cv,ci) => {
  cv.innerHTML = siteContent['nav'][`nav-item-${ci+1}`];
  cv.style.color = "green";
} )

//Update CTA
document.querySelector('.cta-text h1').innerHTML = siteContent['cta']['h1']
document.querySelector('.cta-text button').innerHTML = siteContent['cta']['button']
let ctaImg = document.getElementById('cta-img')
ctaImg.src = siteContent['cta']['img-src']

//Update Main Content

//Update all h4s in Main Content
let tch4 = document.querySelectorAll('.text-content h4');
tch4[0].innerHTML = siteContent['main-content']['features-h4']
tch4[1].innerHTML = siteContent['main-content']['about-h4']
tch4[2].innerHTML = siteContent['main-content']['services-h4']
tch4[3].innerHTML = siteContent['main-content']['product-h4']
tch4[4].innerHTML = siteContent['main-content']['vision-h4']

//Update Main Content Image
let midImg = document.getElementById('middle-img')
midImg.src = siteContent['main-content']['middle-img-src']

//Update all p-tags in Main Content
let tcP = document.querySelectorAll('.text-content p');
tcP[0].innerHTML = siteContent['main-content']['features-content']
tcP[1].innerHTML = siteContent['main-content']['about-content']
tcP[2].innerHTML = siteContent['main-content']['services-content']
tcP[3].innerHTML = siteContent['main-content']['product-content']
tcP[4].innerHTML = siteContent['main-content']['vision-content']

//Update Contact List
let contactNodeList = document.querySelectorAll('.contact');
contactNodeList[0].children[0].innerHTML = siteContent['contact']['contact-h4']
contactNodeList[0].children[1].innerHTML = siteContent['contact']['address']
contactNodeList[0].children[2].innerHTML = siteContent['contact']['phone']
contactNodeList[0].children[3].innerHTML = siteContent['contact']['email']

//Update Footer
document.querySelector('footer p').innerHTML = siteContent['footer']['copyright']

//Add links to nav  - really dumb way
let navBar = document.querySelector('nav');

////  Create the links
let link1 = document.createElement('a');
link1.innerHTML = 'Link7';
let link2 = document.createElement('a');
link2.innerHTML = 'Link8';

////  Append the links
navBar.appendChild(link1);
navBar.appendChild(link2);



//DOM-II project
document.querySelector('.cta-text button').addEventListener( "click", e => {
  alert('You clicked on the button')
})


navBar.addEventListener( "mouseenter", e => {
  console.log('enter')
  navBar.setAttribute('style','background:lightblue')
})
navBar.addEventListener('mouseout', e => {
  console.log('mouseout')
  navBar.setAttribute('style','background:none')
})

ctaImg.addEventListener('dblclick', e =>{
  let style = ctaImg.getAttribute('style');
  if (!style) ctaImg.setAttribute('style','transform: rotate(180deg)')
  else {
    ctaImg.setAttribute('style','transform: rotate(0deg)')
    ctaImg.removeAttribute('style')
  }
})

midImg.addEventListener('mouseover', e => {
  alert('You moused over the image!')
})

