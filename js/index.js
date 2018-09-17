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

//Selectors 

let nav = document.querySelector('nav');
let navList = document.querySelectorAll('nav a');

let navImg = document.querySelector('header img');

let ctaH1 = document.querySelector('.cta h1 ');
let ctaButton = document.querySelector('.cta button');
let ctaImg = document.querySelector('.cta img');
let middleImg = document.querySelector('#middle-img');

//   NAV   \\
for(let i = 0; i < navList.length; i++){
  navList[i].innerText = siteContent['nav'][Object.keys(siteContent['nav'])[i]];
  navList[i].style.color = 'green';
}

navImg.src = siteContent['nav']['img-src'];

//Create and add children to nav
let newItemA = document.createElement('a');
let newItemB = document.createElement('a');
newItemA.innerText = 'Blog';
newItemB.innerText = 'News';
newItemA.style.color = 'green';
newItemB.style.color = 'green';


nav.appendChild(newItemA);
nav.prepend(newItemB);


//    CTA    \\

//Reset h1 text with breaks \\

ctaH1.innerText = siteContent['cta']['h1'].split(' ').join('\n');;
ctaButton.innerText = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];




//   Text Content  \\

// Grab h4 tags
let h4ElemList = document.querySelectorAll('.text-content h4');

//Set reference for h4 keys
let h4ContentArray = ['features-h4',
                      'about-h4', 
                      'services-h4', 
                      'product-h4', 
                      'vision-h4'];

//Give h4s an ID
for(let i = 0; i < h4ElemList.length; i++){
  h4ElemList[i].setAttribute('id', h4ContentArray[i]);

}


//Set innerText for h4s
for(let i = 0; i < h4ElemList.length; i++){
   h4ElemList[i].innerText = siteContent['main-content'][h4ElemList[i].id]
}


//Grab p tags 
let pElemList = document.querySelectorAll('.text-content p');

//Set reference for p content

let pContentArray = ['features-content',
                     'about-content',
                     'services-content', 
                     'product-content',
                     'vision-content'];
                     

//Give ps an ID
for(let i = 0; i < pElemList.length; i++){
  pElemList[i].setAttribute('id', pContentArray[i]);
}

//Set innerText for paragraphs
for(let i = 0; i < pElemList.length; i++){
  pElemList[i].innerText = siteContent['main-content'][pElemList[i].id]
}

//middle img

middleImg.src = siteContent['main-content']['middle-img-src'];




