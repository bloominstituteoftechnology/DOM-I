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

var mySelection = document.querySelectorAll('a');
console.log(mySelection);
for( var x = 0; x < mySelection.length; x++){
  mySelection[x].textContent = siteContent["nav"]["nav-item-"+(x+1)];
}
//mySelection = document.querySelector('.cta-text');
mySelection = document.querySelector('h1');
mySelection.textContent = siteContent["cta"]["h1"];
mySelection = document.querySelector('button');
mySelection.textContent = siteContent["cta"]["button"];
mySelection = document.querySelector('#cta-img');
mySelection.setAttribute("src", siteContent["cta"]["img-src"]);

//main content
mySelection = document.querySelectorAll('h4');
var prefix = ["features-", "about-", "services-", "product-", "vision-"];
for( var x = 0; x < mySelection.length; x++){
  mySelection[x].textContent = siteContent["main-content"][prefix[x] + "h4"];
}

mySelection = document.querySelectorAll('p');
for( var x = 0; x < mySelection.length; x++){
  mySelection[x].textContent = siteContent["main-content"][prefix[x] + "content"];
}

mySelection = document.querySelector('.middle-img');
mySelection.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

mySelection = document.querySelectorAll('h4');
mySelection[mySelection.length-1].textContent = siteContent["contact"]["contact-h4"];

mySelection = document.querySelectorAll('p');
mySelection[mySelection.length-4].textContent = siteContent["contact"]["address"];
mySelection[mySelection.length-3].textContent = siteContent["contact"]["phone"];
mySelection[mySelection.length-2].textContent = siteContent["contact"]["email"];
mySelection[mySelection.length-1].textContent = siteContent["footer"]["copyright"];

console.log(mySelection);

//*****
mySelection = document.querySelectorAll('a');
for( var x = 0; x < mySelection.length; x++){
  mySelection[x].style.color = 'green';
}

var node = document.createElement('a');  
node.href = "#";        
node.textContent = "Test";
node.style.color = "green";        
mySelection = document.querySelector('nav');
mySelection.appendChild(node);

node = document.createElement('a');  
node.href = "#";        
node.textContent = "Test2"; 
node.style.color = "green";  
mySelection.prepend(node); 


