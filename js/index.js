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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo (Do likewise for the rest of the images)
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]); 

// set header image
const logo2 = document.getElementById("cta-img"); 
console.log(logo2); 
logo2.src = "img/header-img.png"; 

// Add new link in navigation element, at the end, called Services [and then comment it out]
const headerElement = document.querySelector('header');
headerElement;
const newLink = document.createElement('a');
newLink;
// newLink.textContent = "Services";
// newLink;
// headerElement.appendChild(newLink);

// Give the Services link a green color
newLink.style.color = "green";
newLink;

// Add new link to navigation, to the front, called Product
// const firstLink = document.createElement('a');
// firstLink;
// firstLink.textContent = "Product";
// firstLink;
// headerElement.prepend(firstLink);

// Update all links in navigation bar using querySelectorAll
// const linkElements = document.querySelectorAll('nav a');
// linkElements;
// linkElements[0].textContent = "Alison";
// linkElements[0];
// linkElements[1].textContent = "Product";
// linkElements[1];
// linkElements[2].textContent = "Vision";
// linkElements[2];
// linkElements[3].textContent = "Features";
// linkElements[3];
// linkElements[4].textContent = "About";
// linkElements[4];
// linkElements[5].textContent = "Contact";
// linkElements[5];
// console.log(linkElements);

// Better way to do the above
let navBar = document.querySelector('nav'); // draw out from html doc the entire nav 
console.log(navBar);
let navLinks = navBar.querySelectorAll('a'); // now draw out all the anchor tags on the html doc within nav
console.log(navLinks);
let ObjNav = siteContent.nav; // draw out just the navs from the siteContent object; could use this too: siteContent["nav"]
console.log(ObjNav);
let navValues = Object.values(ObjNav); // all the values in the ObjNav object, store in a variable called navValues
console.log(navValues);
[...navLinks].forEach((link, index) => {
    link.textContent = navValues[index];
    link.setAttribute('style', 'color: green');
    // navBar.removeChild(navBar.lastChild); //trying to remove logo link
    
})


// Bonus' suggestion: try to use a different loop for the contact (and refer to the previous loop we used for the navs)
let contactSection = document.querySelector('section.contact'); // storing the Contact info in the Section tag in a variable called contactSection
console.log(contactSection);
let headerContact = contactSection.querySelector('h4'); // draw out just the Contact header
headerContact.textContent = siteContent.contact['contact-h4']; // set the HTML value of the Contact header (H4) to the JavaScript key value pair for the Contact object within siteContent 
console.log(headerContact);

// The Upper Body Paragraphs, Headings and Para Content
let upperBodyHeadings = document.querySelectorAll('h4'); 
console.log(upperBodyHeadings); 
upperBodyHeadings[0].textContent = "Features"; 
upperBodyHeadings[1].textContent = "About";

let middleBodyParas = document.querySelectorAll('p'); 
console.log(middleBodyParas); 
middleBodyParas[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 
middleBodyParas[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 

// Middle Image
const logo3 = document.getElementById("middle-img"); 
console.log(logo3); 
logo3.src = "img/mid-page-accent.jpg"; 

//The Lower Body Headings and Paragraphs
upperBodyHeadings[2].textContent = "Services"; 
upperBodyHeadings[3].textContent = "Product";
upperBodyHeadings[4].textContent = "Vision";

middleBodyParas[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 
middleBodyParas[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 
middleBodyParas[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 

// the Contact Paragraph
let contactParas = contactSection.querySelectorAll('p'); // draw out just the paragraphs in the Contact section
console.log(contactParas);
let ObjParas = siteContent.contact; // taking the Contact object with siteContent and storing in a variable called ObjParas
console.log(ObjParas);
let paraValues = Object.values(ObjParas); // draw out just the paragraph values and set them in an object called paraValues 
console.log(paraValues);
[...contactParas].forEach((p, index) => { // call the forEach method over the contactParas array?
    p.textContent = paraValues[index + 1];
})

// the Button
const getStartedButton = document.querySelector('button');
console.log(getStartedButton); 
getStartedButton.textContent = "Get Started"; // add the "Get Started" label to the button

// Populate Features paragraph, heading and content
const featPara = document.querySelector('h1'); 
console.log(featPara);
featPara.textContent = "Dom Is Awesome"; 

// the Footer
const footerCopy = document.querySelector('footer'); 
console.log(footerCopy);
footerCopy.textContent = "Copyright Great Idea! 2018";  