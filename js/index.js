const siteContent = {
  "nav": {
    // "nav-item-0": "Added Item - Pre"
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    // "nav-item-7": "Added Item - Post"
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
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

// Navigation Bar
// InnerHTML sets or returns the HTML content of an element, specifically <p>.
// navItems = document.querySelectorAll("nav a") creates an array that can be manipulated.
//navItems.forEach(link => link.style.color = "green") creates a minature for loop that adds the color green property to all of the nav items.
// Gray69 seemed to be in line with earlier projects on this "site." Then I had to go and change it to green, lol.

const navItems = document.querySelectorAll("nav a");
navItems[0].innerHTML = siteContent["nav-item-1"]

navItems[1].innerHTML = siteContent["nav-item-2"]

navItems[2].innerHTML = siteContent["nav-item-3"]

navItems[3].innerHTML = siteContent["nav-item-4"]

navItems[4].innerHTML = siteContent["nav-item-5"]

navItems[5].innerHTML = siteContent["nav-item-6"]

navItems.forEach(link => link.style.color = "green")

// The following the appendChild() and prepend() for the navigation bar.
// navItems.appendChild(["nav"]["nav-item-0"])
// navItems.prepend(["nav"]["nav-item-6"])

// Main header for the site, "DOM IS AWESOME"
// Able to narrow search to just the h1 since there is only one on the page.

const DocHeading = document.querySelector("h1");
DocHeading.innerHTML = siteContent["cta"]["h1"]

// Button located under the H1.

const BigBtn = document.querySelector("Button");
BigBtn.innerHTML = siteContent["cta"]["button"]

// Large image located on the side, next to the H1.

const mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

// Const headings = document.getElementsByTagName is exactly the same as with the navigation bar. It creates an array that can be manipulated to properly show the six H4 tags. 
// Notice it only grabs the headers, not the text that it goes with. Also take care to notice it going down the "DOM Tree" from siteContent -> main-content -> features-h4.(or about, etc...) This is essential, since it changes from main-content to contact for the sixth iteration.

headings = document.getElementsByTagName("h4")
headings[0].innerHTML = siteContent["main-content"]["features-h4"]
headings[1].innerHTML = siteContent["main-content"]["about-h4"]
headings[2].innerHTML = siteContent["main-content"]["services-h4"]
headings[3].innerHTML = siteContent["main-content"]["product-h4"]
headings[4].innerHTML = siteContent["main-content"]["vision-h4"]
headings[5].innerHTML = siteContent["contact"]["contact-h4"]

// The following section is for the final graphic on the page. Notice that it is using ByID instead of ByTagName - this is because it is finding just one item, not a variety of the same class.

const bannerImage = document.getElementById("middle-img");
bannerImage.setAttribute('src', siteContent["cta"]["img-src"])

// The following section pushes the copy listed above to the webpage. Notice that the second "branch" for the DOM Tree changes three times to reflect changing positions on the site. There are a total of nine paragraphs.

const paragraphContent = document.getElementsByTagName("p")
paragraphContent[0].innerHTML = siteContent["main-content"]["features-content"]
paragraphContent[1].innerHTML = siteContent["main-content"]["about-content"]
paragraphContent[2].innerHTML = siteContent["main-content"]["services-content"]
paragraphContent[3].innerHTML = siteContent["main-content"]["product-content"]
paragraphContent[4].innerHTML = siteContent["main-content"]["vision-content"]
paragraphContent[5].innerHTML = siteContent["contact"]["address"]
paragraphContent[6].innerHTML = siteContent["contact"]["phone"]
paragraphContent[7].innerHTML = siteContent["contact"]["email"]
paragraphContent[8].innerHTML = siteContent["footer"]["copyright"]

// The following is the appends as requested in task 3.

// const = newNavItemsOne = document.createElement('a');
// const = newNavItemsTwo = document.createElement('a');

// newNavItemsOne.innerText = 'Discover More'
// newNavItemsTwo.innerText = 'More Services';
// navItems.append(newNavItemsOne);
// navItems.prepend(newNavItemsTwo);

// Thoughts on project - I decided to handle this by layer in order to maintain consistency throughout the design. My greatest challenge was in the append and prepend at the end of the project.