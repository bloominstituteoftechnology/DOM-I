const siteContent = { //this is an object with properties and values.
  'nav': { //document.getElementByTagName('nav') = siteContent['nav']         
    'nav-item-1': 'Services', //menu = siteContent['nav']['nav-item-1']
    'nav-item-2': 'Product', //menu = siteContent['nav']['nav-item-2']
    'nav-item-3': 'Vision', //menu = siteContent['nav']['nav-item-3']
    'nav-item-4': 'Features', //menu = siteContent['nav']['nav-item-4']
    'nav-item-5': 'About', //menu = siteContent['nav']['nav-item-5']
    'nav-item-6': 'Contact', //menu = siteContent['nav']['nav-item-6']
    'img-src': 'img/logo.png'//document.querySelector('#logo-img') = siteContent['nav']['img-src']
  },
  'cta': { //siteContent['cta']
    'h1': 'DOM Is Awesome', //document.querySelector('.cta .cta-text h1') = siteContent['cta']['h1']
    'button': 'Get Started',//document.getElementByTagName('button') = siteContent['cta'][button]
    'img-src': 'img/header-img.png' //document.querySelector('#cta-img) = siteContent['cta']['img-src']
  },
  'main-content': { 
    //topContent 
    'features-h4':'Features',//document.querySelectorAll('.top-content .text-content[0]') = siteContent['main-content']['features-h4']
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.', //document.querySelector('.top-content .text-content[0] p') = siteContent['main-content']['features-content']
    'about-h4':'About', //document.querySelectorAll('.top-content .text-content[1]') = siteContent['main-content']['about-h4']
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.', //document.querySelector('.top-content .text-content[1] p') = siteContent['main-content']['about-content']
    'middle-img-src': 'img/mid-page-accent.jpg', //document.getElementById('middle-img') = siteContent['main-content']['middle-img-src']
    //bottom-content
    'services-h4':'Services',//document.querySelector('.bottom-content .text-content[0] h4')' = siteContent['main-content]['services-h4']
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',//document.querySelector('.bottom-content .text-content[0] p') = siteContent['main-content']['services-content']
    'product-h4':'Product', //document.querySelector('.bottom-content .text-content[1] h4') = siteContent['main-content']['product-h4']
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',//document.querySelector('.bottom-content .text-content[1] p') = siteContent['main-content']['product-content']
    'vision-h4':'Vision',//document.querySelector('.bottom-content .text-content[2] h4') = siteContent['main-content']['vision-h4']
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',//document.querySelector('bottom-content .text-content[2] p') = siteContent['main-content']['vision-content']
  },
  'contact': {//document.getElementsByClassName('contact') = siteContent['contact']
    'contact-h4' : 'Contact',// document.querySelector('.contact h4') = siteContent['contact']['contact-h4']
    'address' : '123 Way 456 Street Somewhere, USA',//document.querySelector('.contact p[1]') = siteContent['contact']['address']
    'phone' : '1 (888) 888-8888',//document.querySelector('.contact p[2]') = siteContent['contact']['phone']
    'email' : 'sales@greatidea.io',//document.querySelector('.contact p[3]') = siteContent['contact']['email']
  },
  'footer': { //siteContent['footer']
    'copyright' : 'Copyright Great Idea! 2018'//document.getElementByTagName('footer') = siteContent['footer']['copyright']
  },
};

//nav menu
let menu = document.getElementsByTagName('a');
let services = menu[0];
  services.innerHTML = siteContent['nav']['nav-item-1'];
  services.style.color = 'green';
let product = menu[1];
  product.innerHTML = siteContent['nav']['nav-item-2'];
  product.style.color = 'green';
let vision = menu[2];
  vision.innerHTML = siteContent['nav']['nav-item-3'];
  vision.style.color = 'green';
let features = menu[3];
  features.innerHTML = siteContent['nav']['nav-item-4'];
  features.style.color = 'green';
let about = menu[4];
  about.innerHTML = siteContent['nav']['nav-item-5'];
  about.style.color = 'green';
let contact = menu[5];
  contact.innerHTML = siteContent['nav']['nav-item-6'];
  contact.style.color = 'green';



let logo = document.querySelector('#logo-img'); 
  logo.setAttribute('src', siteContent['nav']['img-src']); 

//cta
//text
let ctaText = document.querySelector('.cta-text h1');
  ctaText.innerHTML = siteContent['cta']['h1'];
//button
let ctaBut = document.querySelector('.cta-text button');
 ctaBut.innerHTML = siteContent['cta']['button'];
 //circle image
let ctaImg = document.querySelector('.cta img'); 
  ctaImg.setAttribute('src', siteContent['cta']['img-src']); 

//main content
//headlines

let headline = document.getElementsByTagName('h4');
let servicesHeadline = headline[0];
  servicesHeadline.innerHTML = siteContent['main-content']['services-h4'];
let productHeadline = headline[1];
  productHeadline.innerHTML = siteContent['main-content']['product-h4'];
let visionHeadline = headline[2];
  visionHeadline.innerHTML = siteContent['main-content']['vision-h4'];
let featuresHeadline = headline[3];
  featuresHeadline.innerHTML = siteContent['main-content']['features-h4'];
let aboutHeadline = headline[4];
  aboutHeadline.innerHTML = siteContent['main-content']['about-h4'];
let contactHeadline = headline[5];
  contactHeadline.innerHTML = siteContent['contact']['contact-h4'];

//paragraphs

let pTag = document.getElementsByTagName('p');
let servicesPTag = pTag[0];
  servicesPTag.innerHTML = siteContent['main-content']['services-content'];
let productPTag = pTag[1];
  productPTag.innerHTML = siteContent['main-content']['product-content'];
let visionPTag = pTag[2];
  visionPTag.innerHTML = siteContent['main-content']['vision-content'];
let featuresPTag = pTag[3];
  featuresPTag.innerHTML = siteContent['main-content']['features-content'];
let aboutPTag = pTag[4];
  aboutPTag.innerHTML = siteContent['main-content']['about-content'];
let addressPTag = pTag[5];
  addressPTag.innerHTML = siteContent['contact']['address'];
let phonePTag = pTag[6];
  phonePTag.innerHTML = siteContent['contact']['phone'];
let emailPTag = pTag[7];
  emailPTag.innerHTML = siteContent['contact']['email'];
let footerPTag = pTag[8];
  footerPTag.innerHTML = siteContent['footer']['copyright'];

//middle img
let middleImg = document.querySelector('.middle-img'); 
  middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']) 

  //new navs

//create text node to append to "a" element that will then append to
//"nav" element.

//append
let navigator = document.querySelector('nav');
let newNav = document.createElement('a');
newNav.style.color = 'green';           
let newNavText = document.createTextNode('Directions');    // Create a text node
newNav.setAttribute('href', '#');
newNav.appendChild(newNavText);
navigator.appendChild(newNav);  

//prepend
let newNavTwo = document.createElement('a');
newNavTwo.style.color = 'green';
let newNavTextTwo = document.createTextNode('Examples');
newNavTwo.setAttribute('href', '#');
newNavTwo.appendChild(newNavTextTwo);
navigator.prepend(newNavTwo);
