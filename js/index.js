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

//Setting out all the NAV names to be in line with original.html (is there a way to loop over this?)
let navItems = document.querySelectorAll('nav a');
let arrNavItems = Array.from(navItems);
arrNavItems[0].textContent = siteContent["nav"]["nav-item-1"];
arrNavItems[1].textContent = siteContent["nav"]["nav-item-2"];
arrNavItems[2].textContent = siteContent["nav"]["nav-item-3"];
arrNavItems[3].textContent = siteContent["nav"]["nav-item-4"];
arrNavItems[4].textContent = siteContent["nav"]["nav-item-5"];
arrNavItems[5].textContent = siteContent["nav"]["nav-item-6"];

// mapping over array to change color to green
arrNavItems.map(e => e.style.color = 'green');

// appending an anchor child to the nav bar
let navv = document.querySelector('nav');
const addNavA1 = document.createElement('a');
addNavA1.textContent = 'anchorEnd';
addNavA1.style.color = 'green';
navv.appendChild(addNavA1);

// prepending an anchor child to nav bar
const addNavA2 = document.createElement('a');
addNavA2.textContent = 'anchorBeg';
addNavA2.style.color = 'green';
navv.prepend(addNavA2);


//Section CTA: setting up first section (h1 text,button and image)

  //title / H1
  let title = document.querySelector('h1');
  title.textContent = siteContent["cta"]["h1"];
  let lineBreak = document.createElement('br');
  title.insertAdjacentElement('beforeend',lineBreak);

  // Title Button
  let button = document.querySelector('button');
  button.textContent = siteContent["cta"]["button"];

  // Title image
  let ctaImage = document.getElementById('cta-img');
  ctaImage.setAttribute('src',siteContent["cta"]["img-src"]);

  //Section Main-Content: setting up all the H4's
  let topContentTitles1 = document.getElementsByTagName('h4');
  let arrH4Items = Array.from(topContentTitles1);
  arrH4Items[0].textContent = siteContent["main-content"]["features-h4"];
  arrH4Items[1].textContent = siteContent["main-content"]["about-h4"];
  arrH4Items[2].textContent = siteContent["main-content"]["services-h4"];
  arrH4Items[3].textContent = siteContent["main-content"]["product-h4"];
  arrH4Items[4].textContent = siteContent["main-content"]["vision-h4"];
  arrH4Items[5].textContent = siteContent["contact"]["contact-h4"];

  // Section Main Content: Setting up all the P's
  let mainContentPs = document.getElementsByTagName('p');
  let arrPItems = Array.from(mainContentPs);
  arrPItems[0].textContent = siteContent["main-content"]["features-content"];
  arrPItems[1].textContent = siteContent["main-content"]["about-content"];
  arrPItems[2].textContent = siteContent["main-content"]["services-content"];
  arrPItems[3].textContent = siteContent["main-content"]["product-content"];
  arrPItems[4].textContent = siteContent["main-content"]["vision-content"];
  arrPItems[5].textContent = siteContent["contact"]["address"];
  arrPItems[6].textContent = siteContent["contact"]["phone"];
  arrPItems[7].textContent = siteContent["contact"]["email"];
  arrPItems[8].textContent = siteContent["footer"]["copyright"];

  // Section Main Content: Image
  let mainContentImg = document.getElementById('middle-img');
  mainContentImg.setAttribute('src',siteContent["main-content"]['middle-img-src']);


// putting the br in the middle of h1
// using array methods and loops to traverse between array and object
