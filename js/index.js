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
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItem= document.getElementsByTagName('a')[0]
navItem.textContent="Services"

let navItem1= document.getElementsByTagName('a')[1]
navItem1.textContent="Product"

let navItem2= document.getElementsByTagName('a')[2]
navItem2.textContent="Vision"

let navItem3= document.getElementsByTagName('a')[3]
navItem3.textContent="Features"

let navItem4= document.getElementsByTagName('a')[4]
navItem4.textContent="About"

let navItem5= document.getElementsByTagName('a')[5]
navItem5.textContent="Contact"

let headLine= document.querySelector('h1')
headLine.textContent=siteContent.cta.h1;

let headLine1= document.querySelector('button')
headLine1.textContent=siteContent.cta.button;

let headerImg=document.getElementById( "cta-img")
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainContent= document.querySelectorAll("top-content,h4")[0];
mainContent.textContent=siteContent["main-content"]["features-h4"]
let mainContent1= document.querySelectorAll("top-content,p")[0];
mainContent1.textContent=siteContent["main-content"]["features-content"]

let mainContent2= document.querySelectorAll('top-content,h4')[1];
mainContent2.textContent=siteContent['main-content']['about-h4']
let mainContent3=document.querySelectorAll("top-content,p")[1]
mainContent3.textContent=siteContent["main-content"]["about-content"]


let middleImg=document.getElementById( "middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainContent4=document.querySelectorAll("top-content,h4")[2]
mainContent4.textContent=siteContent["main-content"]["services-h4"]
let mainContent5=document.querySelectorAll("top-content,p")[2]
mainContent5.textContent=siteContent["main-content"]["services-content"]

let mainContent6=document.querySelectorAll("top-content,h4")[3]
mainContent6.textContent=siteContent["main-content"]["product-h4"]
let mainContent7=document.querySelectorAll("top-content,p")[3]
mainContent7.textContent=siteContent["main-content"]["product-content"]

let mainContent8=document.querySelectorAll("top-content,h4")[4]
mainContent8.textContent=siteContent["main-content"]["vision-h4"]
let mainContent9=document.querySelectorAll("top-content,p")[4]
mainContent9.textContent=siteContent["main-content"]["vision-content"]



let contact_h4= document.getElementsByTagName('h4')[5]
contact_h4.textContent=siteContent["contact"]["contact-h4"]

let contact_p= document.getElementsByTagName('p')[5]
contact_p.textContent=siteContent["contact"]["address"]

let contact_phone= document.getElementsByTagName('p')[6]
contact_phone.textContent=siteContent["contact"]["phone"]

let contact_email= document.querySelectorAll('p')[7]
contact_email.textContent=siteContent["contact"]["email"]

let footer_p= document.getElementsByTagName('p')[8]
footer_p.textContent=siteContent["footer"]["copyright"]

let newContent=document.createElement('footer')
newContent.textContent="Thank you"
let body=document.querySelector('body')

body.appendChild(newContent)
newContent.style.color='green'

let newContent1=document.createElement('nav')
newContent1.textContent='Hello'
let body1=document.querySelector('body')
body1.prepend(newContent1)
newContent1.style.color='green'








