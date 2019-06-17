const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Go Home",
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

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let nav = document.getElementsByTagName('nav')[0];
// create new anchor to append to the nav bar
let newNavLink = document.createElement('a');
nav.appendChild(newNavLink);


// Update the header children
let navLinks = document.getElementsByTagName('a');
for(let i = 0; i < navLinks.length; i++) {
  let navItem = navLinks.item(i);
  let innerText = 'nav-item-' + (i + 1);
  navItem.innerText = siteContent['nav'][innerText];
  navItem.style.color = 'green';
}



//****** CTA section
// HEADER
let header = document.getElementsByTagName('h1')[0];
let headerText = siteContent['cta']['h1'];
headerText = headerText.split(' ').join('<br>');
header.innerHTML = headerText;
// BUTTON
let getStartedButton = document.getElementsByTagName('button')[0];
getStartedButton.innerText = siteContent['cta']['button'];

//******* Main content

let textContentElements = document.querySelectorAll('.text-content'),
        featuresElement = textContentElements[0],
           aboutElement = textContentElements[1],
        servicesElement = textContentElements[2],
         productElement = textContentElements[3],
          visionElement = textContentElements[4]
            mainContent = siteContent['main-content'];

//******** Features Content
// H4
featuresElement.children.item(0).innerText = mainContent['features-h4'];
// P
featuresElement.children.item(1).innerText = mainContent['features-content'];

//******** About Content
// H4
aboutElement.children.item(0).innerText = mainContent['about-h4'];
// P
aboutElement.children.item(1).innerText = mainContent['about-content'];

//******** Services Content
// H4
servicesElement.children.item(0).innerText = mainContent['services-h4'];
// P
servicesElement.children.item(1).innerText = mainContent['services-content'];

//******** Product Content
// H4
productElement.children.item(0).innerText = mainContent['product-h4'];
// P
productElement.children.item(1).innerText = mainContent['product-content'];

//******** Vision Content
// H4
visionElement.children.item(0).innerText = mainContent['vision-h4'];
// P
visionElement.children.item(1).innerText = mainContent['vision-content'];

//******** Contact Section
let contactContent = siteContent['contact'];
let contactSection = document.getElementsByClassName('contact');
let contactChildren = contactSection[0].children;
// H4
contactChildren.item(0).innerText = contactContent['contact-h4'];
// address
contactChildren.item(1).innerText = contactContent['address'];
// phone number
contactChildren.item(2).innerText = contactContent['phone'];
// email
contactChildren.item(3).innerText = contactContent['email'];

//******** Footer
let footer = document.getElementsByTagName('footer');
footer[0].firstElementChild.innerText = siteContent['footer']['copyright'];
