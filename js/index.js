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

const aNode = document.querySelectorAll('a');
const newAnchors = Array.from(aNode);
newAnchors.forEach(item => {
  if(newAnchors.indexOf(item) == 0){
    item.textContent = `Services`
  } else if(newAnchors.indexOf(item) == 1){
    item.textContent = `Product`
  } else if(newAnchors.indexOf(item) == 2){
    item.textContent = `Vision`
  } else if(newAnchors.indexOf(item) == 3){
    item.textContent = `Features`
  } else if(newAnchors.indexOf(item) == 4){
    item.textContent = `About`
  } else if(newAnchors.indexOf(item) == 5){
    item.textContent = `Contact`
  };
});

newAnchors.forEach(item => {
  item.style.color = 'green';
});

const navContainer = document.querySelector('nav');
const newLink1 = document.createElement('a');
const newLink2 = document.createElement('a');
newLink1.textContent = 'Blog';
newLink2.textContent = 'Follow Us';
newLink1.style.color = 'green';
newLink2.style.color = 'green';
navContainer.append(newLink1);
newLink1.after(newLink2);

const mainTitle = document.querySelector('h1');
mainTitle.textContent = `Dom is Awesome`;

const button = document.querySelector('button');
button.textContent = `Get Started`;

const image = document.getElementById('cta-img');
image.setAttribute('src', siteContent['cta']['img-src']);

const h4Node = document.querySelectorAll('h4');
const newH4 = Array.from(h4Node);
newH4.forEach(item => {
  if(newH4.indexOf(item) == 0){
    item.textContent = `Features`
  } else if(newH4.indexOf(item) == 1){
    item.textContent = `About`
  } else if(newH4.indexOf(item) == 2){
    item.textContent = `Services`
  } else if(newH4.indexOf(item) == 3){
    item.textContent = `Product`
  } else if(newH4.indexOf(item) == 4){
    item.textContent = `Vision`
  } else if(newH4.indexOf(item) == 5){
    item.textContent = `Contact`
  };
});

const pNode = document.querySelectorAll('p');
const newP = Array.from(pNode);
newP.forEach(item => {
  if(newP.indexOf(item) == 0){
    item.textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`
  } else if(newP.indexOf(item) == 1){
    item.textContent = `About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`
  } else if(newP.indexOf(item) == 2){
    item.textContent = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`
  } else if(newP.indexOf(item) == 3){
    item.textContent = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`
  } else if(newP.indexOf(item) == 4){
    item.textContent = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`
  } else if(newP.indexOf(item) == 5){
    item.textContent = '123 Way 456 Street Somewhere, USA';
  }else if(newP.indexOf(item) == 6){
    item.textContent = `1 (888) 888-8888`;
  } else if(newP.indexOf(item) == 7){
    item.textContent = `sales@greatidea.io`
  } else if(newP.indexOf(item) == 8){
    item.textContent = `Copyright Great Idea! 2018`
  }  
});

const midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src'])