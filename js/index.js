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

//nav
let nav = document.querySelectorAll("nav a");
  nav[0].innerHTML = "Services";
  nav[0].style.color = "green";

  nav[1].innerHTML = "Product";
  nav[1].style.color = "green";

  nav[2].innerHTML = "Vision";
  nav[2].style.color = "green";

  nav[3].innerHTML = "Features";
  nav[3].style.color = "green";

  nav[4].innerHTML = "About";
  nav[4].style.color="green";

  nav[5].innerHTML = "Contact";
  nav[5].style.color = "green";
  

  

  //cta
  let ctaText = document.querySelector('.cta-text h1');
  ctaText.innerHTML = "DOM <BR> is <BR> awsome";


  let button = document.querySelector('.cta-text button');
  button.innerHTML = 'Get Started';

  let img = document.querySelector('#cta-img');
  img.setAttribute('src',"img/header-img.png" );
  

  // main
  let features = document.querySelectorAll(".text-content h4");
  let featuresp = document.querySelectorAll(".text-content p");
  features[0].innerHTML = siteContent['main-content']['features-h4'];
  featuresp[0].innerHTML = siteContent['main-content']['features-content'];

  features[1].innerHTML = siteContent['main-content']['about-h4'];
  featuresp[1].innerHTML = siteContent['main-content']['about-content']
 
  let img2 = document.querySelector('#middle-img');
  img2.setAttribute('src','img/mid-page-accent.jpg');


  features[2].innerHTML = siteContent['main-content']['services-h4'];
  featuresp[2].innerHTML = siteContent['main-content']['services-content'];
   
  
  features[3].innerHTML = siteContent['main-content']['product-h4'];
  featuresp[3].innerHTML = siteContent['main-content']['product-content'];

  features[4].innerHTML = siteContent['main-content']['vision-h4'];
  featuresp[4].innerHTML = siteContent['main-content']['vision-content']

  // contact 

  let contact = document.querySelector('.contact h4');
  contact.innerHTML = 'Contact';


  let contactP = document.querySelectorAll('.contact p');

  contactP[0].innerHTML = "123 Way 456 Street <br>Somewhere, USA";
  contactP[1].innerHTML = "1 (888) 888-8888";
  contactP[2].innerHTML = "sales@greatidea.io";
  
  // footer

  let footer = document.querySelector('footer p');

  footer.innerHTML = "Copyright Great Idea! 2018"
  
  const navBar = document.querySelector('nav');
  
  const firstItem = document.createElement('a');
  
  const lastItem = document.createElement('a');

  firstItem.href = '#';
  firstItem.textContent = 'Prepend';
  firstItem.style.color ='green';

  lastItem.href = '#';
lastItem.textContent = 'Append';
lastItem.style.color = 'green';

navBar.prepend(firstItem);
navBar.append(lastItem);
