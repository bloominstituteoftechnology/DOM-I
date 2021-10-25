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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//NOTES ON NEEDFUL:: TEXT CONTENT OF <a> nav tags!
//ServicesX ProductX VisionX FeaturesX AboutX ContactX

let navItem1 = document.querySelector('a:nth-of-type(1)');
navItem1.textContent=(siteContent['nav']['nav-item-1']);

let navItem2 = document.querySelector('a:nth-of-type(2)');
navItem2.textContent=(siteContent['nav']['nav-item-2']);

let navItem3 = document.querySelector('a:nth-of-type(3)');
navItem3.textContent=(siteContent['nav']['nav-item-3']);

let navItem4 = document.querySelector('a:nth-of-type(4)');
navItem4.textContent=(siteContent['nav']['nav-item-4']);

let navItem5 = document.querySelector('a:nth-of-type(5)');
navItem5.textContent=(siteContent['nav']['nav-item-5']);

let navItem6 = document.querySelector('a:nth-of-type(6)');
navItem6.textContent=(siteContent['nav']['nav-item-6']);

//change nav text to be green!

//  let navColor = document.querySelectorAll('nav a');
navItem1.style.color = 'green';
navItem2.style.color = 'green';
navItem3.style.color = 'green';
navItem4.style.color = 'green';
navItem5.style.color = 'green';
navItem6.style.color = 'green';





// console.log(navColor);

//cta section
//cta text content needed for div class 'cta-text'
//<h1> DOM <br> Is <br> Awesome </h1>

let header = document.querySelector('h1');
header.textContent=(siteContent['cta']['h1']);

//we will worry about the br later!


//button text content 'Get Started'

let button = document.querySelector('button');
button.textContent=(siteContent['cta']['button']);

//// img id #cta-img src needed:: img/header-img.png

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src','img/header-img.png');

//main content sectionr
//class top-content 
//// class text-content
//I THINK WE NEED TO SELECT MAIN CONTENT THEN SEARCH AS NODELIST!
//ie featuresHeader[n].textContent= bla bla where n is the index of the particular thing we want to change?


//////// features-h4
//////// features-content (<p>)

let featuresHeader = document.querySelector('.main-content h4:nth-of-type(1)');
featuresHeader.textContent=(siteContent['main-content']['features-h4']);

console.log(featuresHeader);

let featuresContent = document.querySelector('.main-content p');
featuresContent.textContent=(siteContent['main-content']['features-content']);

//////// about-h4
//////// about-content (<p>)
// let aboutHeader = document.querySelector('.main-content h4');
// aboutHeader.textContent=(siteContent['main-content']['about-h4']);

let aboutHeader=document.querySelectorAll('h4')[2];
console.log(aboutHeader);

aboutHeader.textContent=(siteContent['main-content']['about-h4']);

let aboutContent=document.querySelectorAll('.main-content p')[2];
aboutContent.textContent=(siteContent['main-content']['about-content']);



//middle-img id src needs updated to
// middle-img-src

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src',siteContent['main-content']['middle-img-src']);

//bottom content sectionr
//class bottom-content
//// class text-content
//////// services-h4 qsAll(h4)[3]
//////// services-content qsAll p [3]

let servicesHeader = document.querySelectorAll('h4')[3];
servicesHeader.textContent=(siteContent['main-content']['services-h4']);

let servicesContent = document.querySelectorAll('.main-content p')[3];
servicesContent.textContent=(siteContent['main-content']['services-content']);


//////// product-h4 [4]
//////// product-content p[4]

let productHeader = document.querySelectorAll('h4')[4];
productHeader.textContent=(siteContent['main-content']['product-h4']);

let productContent = document.querySelectorAll('.main-content p')[4];
productContent.textContent=(siteContent['main-content']['product-content']);

//////// vision-h4 [5]
//////// vision-content p[5]

let visionHeader = document.querySelectorAll('h4')[5];
visionHeader.textContent=(siteContent['main-content']['vision-h4']);

let visionContent = document.querySelectorAll('p')[5];
visionContent.textContent=(siteContent['main-content']['vision-content']);

//I am only a little bit pulling my hair over that last one

//contact sectionr
//class contact
//// contact-h4

let contactHeader = document.querySelectorAll('h4')[6];
 contactHeader.textContent=(siteContent['contact']['contact-h4']);

console.log(contactHeader);

//////// address (<br> between 'Street' and 'Somewhere')
//////// phone
//////// email ((alle* <p>))

//footer 
//copyright <p>

let footer = document.querySelector('footer p');
footer.textContent=(siteContent['footer']['copyright']);