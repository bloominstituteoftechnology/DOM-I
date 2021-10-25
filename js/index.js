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


//updating HTML with the JSON Data

// const services = document.querySelectorAll('nav a')
const nav1 = document.querySelector('nav a:nth-of-type(1)');
const nav2 = document.querySelector('nav a:nth-of-type(2)');
const nav3 = document.querySelector('nav a:nth-of-type(3)');
const nav4 = document.querySelector('nav a:nth-of-type(4)');
const nav5 = document.querySelector('nav a:nth-of-type(5)');
const nav6 = document.querySelector('nav a:nth-of-type(6)');

nav1.textContent = siteContent['nav']['nav-item-1'];
nav2.textContent = siteContent['nav']['nav-item-2'];
nav3.textContent = siteContent['nav']['nav-item-3'];
nav4.textContent = siteContent['nav']['nav-item-4'];
nav5.textContent = siteContent['nav']['nav-item-5'];
nav6.textContent = siteContent['nav']['nav-item-6'];

// cta section
const h1 = document.querySelector('.cta-text h1');
//h1.textContent = siteContent['cta']['h1'];
const h1Word = `${h1Word[0]} <br> ${h1Word[1]} <br> ${h1word[2]}`
console.log(h1Word);

h1.prepend(document.createElement('br'));
//h1.inner HTML
//h1.forEach(word => word.append(document.createElement('<br>)));



// <a href="#">Services</a>
// <a href="#">Product</a>
// <a href="#">Vision</a>
// <a href="#">Features</a>
// <a href="#">About</a>
// <a href="#">Contact</a>
// </nav>


let navColor = document.getElementsByClassName('container');
navColor.style.color = 'green';





// #### Create selectors to point your data into elements

// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images. Use the IDs to update src path content

// #### Update the HTML with the JSON data

// * [x] Remember, NO direct updating of the HTML source is allowed.
// * [x] Using your selectors, update the content to match the example file.
// * [x] Remember to update the src attributes on images

// #### Add new content

// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

// ### Task 3: Stretch

// * [ ] Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.  
// * [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

// #### Stretch Project: Digital Timer

// This project is heavier on logic but employs some DOM manipulation to achieve its goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.

// ## Submission Format

// **Follow these steps for completing your project.**

// * [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
