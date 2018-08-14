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

let navItems = document.querySelectorAll('nav a');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].innerHTML = siteContent['nav']['nav-item-' + (i + 1)];
  navItems[i].style.color = 'green';
  navItems[i].style.textDecoration = 'none';

  navItems[i].addEventListener('mouseenter', function(event) {
    event.target.style.color = 'lime';
  })

  navItems[i].addEventListener('mouseleave', function(event) {
    event.target.style.color = 'green';
  })
}

let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = 'DOM <br> IS <br> AWESOME';

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let mainContentHeading = document.querySelectorAll(".main-content h4");
//top content headers
mainContentHeading[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentHeading[1].innerHTML = siteContent["main-content"]["about-h4"];

//bottom content headers
mainContentHeading[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContentHeading[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentHeading[4].innerHTML = siteContent["main-content"]["vision-h4"];

let mainContentPara = document.querySelectorAll('.main-content p');
//top content paragraphs
mainContentPara[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentPara[1].innerHTML = siteContent["main-content"]["about-content"];

//bottom content paragraphs
mainContentPara[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentPara[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentPara[4].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contactHeading = document.querySelector('.contact h4');
contactHeading.innerHTML = siteContent['contact']['contact-h4'];

let contactPara = document.querySelectorAll('.contact p');
contactPara[0].innerHTML = siteContent["contact"]["address"];
contactPara[1].innerHTML = siteContent["contact"]["phone"];
contactPara[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector('footer');
footer.innerHTML = siteContent['footer']['copyright'];


//Utilize .appendChild() and .prepend() to add two new items to the navigation system

//step 1: create a new tag
let newElement = document.createElement('a');
let newAElement = document.createElement('a');

//step 2: set up the parent reference
let navItemsElement = document.querySelector('nav');

//step 3: append or prepend the child to the parent
navItemsElement.appendChild(newElement);
navItemsElement.prepend(newAElement);

//step 4: update the value
newElement.innerHTML = 'Location';
newAElement.innerHTML = 'Portfolio';

//appendChild
newElement.style.color = 'green';
newElement.style.textDecoration = 'none';
newElement.style.cursor = 'pointer';

newElement.addEventListener('mouseenter', function(event) {
  event.target.style.color = 'lime';
})

newElement.addEventListener('mouseleave', function(event) {
  event.target.style.color = 'green';
})

//prepend
newAElement.style.color = 'green';
newAElement.style.textDecoration = 'none';
newAElement.style.cursor = 'pointer';

newAElement.addEventListener('mouseenter', function(event) {
  event.target.style.color = 'lime';
})

newAElement.addEventListener('mouseleave', function(event) {
  event.target.style.color = 'green';
})



