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

/*## Task 1: Create selectors to point your data into elements
* [ ] Create selectors by using any of the DOM element's methods
* [ ] Note that IDs have been used on all images.  Use the IDs to update src path content*/

const headerLine = document.getElementById("cta-img");
headerLine.setAttribute('src', siteContent["cta"]["img-src"])


const middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])



/*## Task 2: Update the HTML with the JSON data
* [ ] Remember, NO direct updating of the HTML source is allowed.
* [ ] Using your selectors, update the content to match the example file.
* [ ] Remember to update the src attributes on images.*/

const navbar = document.getElementsByTagName("a");

const navItem1 = navbar[0];
navItem1.textContent = siteContent["nav"]["nav-item-1"]
const navItem2 = navbar[1];
navItem2.textContent = siteContent["nav"]["nav-item-2"]
const navItem3 = navbar[2];
navItem3.textContent = siteContent["nav"]["nav-item-3"]
const navItem4 = navbar[3];
navItem4.textContent = siteContent["nav"]["nav-item-4"]
const navItem5 = navbar[4];
navItem5.textContent = siteContent["nav"]["nav-item-5"]
const navItem6 = navbar[5];
navItem6.textContent = siteContent["nav"]["nav=item-6"]

const headText = document.querySelector("h1")
headText.textContent = siteContent["cta"]["h1"]

const button = document.querySelector(".cta .cta-text button")
button.textContent = siteContent["cta"]["button"]

const contentHeader = document.querySelectorAll("h4")
contentHeader[0].textContent = siteContent["main-content"]["features-h4"]
contentHeader[1].textContent = siteContent["main-content"]["about-h4"]
contentHeader[2].textContent = siteContent["main-content"]["services-h4"]
contentHeader[3].textContent = siteContent["main-content"]["product-h4"]
contentHeader[4].textContent = siteContent["main-content"]["vision-h4"]

const pageContent = document.querySelectorAll("p")
pageContent[0].textContent = siteContent["main-content"]["features-content"]
pageContent[1].textContent = siteContent["main-content"]["about-content"]
pageContent[2].textContent = siteContent["main-content"]["services-content"]
pageContent[3].textContent = siteContent["main-content"]["product-content"]
pageContent[4].textContent = siteContent["main-content"]["vision-content"]

const contactInfo = document.querySelector(".contact")
contactInfo.getElementsByTagName("h4")[0].textContent = siteContent["contact"]["contact-h4"]
contactInfo.getElementsByTagName("p")[0].textContent = siteContent["contact"]["address"]
contactInfo.getElementsByTagName("p")[1].textContent = siteContent["contact"]["phone"]
contactInfo.getElementsByTagName("p")[2].textContent = siteContent["contact"]["email"]

const footerText = document.querySelector("footer")
footerText.innerText = "Copyright Great Idea! 2018"




/*## Task 3: Add new content
* [ ] Change the color of the navigation text to be green.
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system.
 You can call them whatever you want.
* [ ] Check your work by looking at the [original html](original.html) in the browser*/

const navColor = document.querySelectorAll("header nav a")
navColor.forEach(navBar => {
  navBar.style.color = 'green';
})

const blog = document.createElement('a');
const login = document.createElement('a');

blog.textContent = 'Blog';
blog.href = '#';
login.textContent = 'Login';
login.href = '#';

const newNavBar = document.querySelector("header nav")
newNavBar.prepend(login);
newNavBar.appendChild(blog);

//updated nav color 
const navColor2 = document.querySelectorAll("header nav a");
navColor2.forEach(navBar => {
  navBar.style.color = "purple";
})

/*//bottom content 
//services
const thirdHeader = document.querySelectorAll('.bottom-content .text-content h4');
thirdHeader[0].textContent = siteContent['main-content']['services-h4'];
const thirdheadContent = document.querySelectorAll('.bottom-content .text-content p');
thirdheadContent[0].textContent = siteContent['main-content']['services-content'];
//product
const fourthCont = document.querySelectorAll('.bottom-content .text-content h4');
fourthCont[1].textContent = siteContent["main-content"]["product-h4"];
const fourthPara = document.querySelectorAll('.bottom-content .text-content p');
fourthPara[1].textContent = siteContent['main-content']['product-content'];
//vision
const fifthCont = document.querySelector('.bottom-content .text-content h4');
fourthCont[2].textContent = siteContent["main-content"]["vision-h4"];
const fifthPara = document.querySelector('.bottom-content .text-content p');
fourthPara[2].textContent = siteContent['main-content']['vision-content'];*/