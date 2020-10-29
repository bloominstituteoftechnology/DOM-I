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

// Images

    // Example: Update the img src for the logo
    let logo = document.getElementById("logo-img");
    logo.setAttribute('src', siteContent["nav"]["img-src"])


    // Update the img src for the cta image
    let ctaImg = document.getElementById("cta-img");
    ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

    // Update the img src for the middle image
    let middleImg = document.getElementById("middle-img");
    middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Navigation

    // Update main nav bar
    let navMenu = document.querySelectorAll("a");
    navMenu[0].textContent = siteContent["nav"]["nav-item-1"];
    navMenu[1].textContent = siteContent["nav"]["nav-item-2"];
    navMenu[2].textContent = siteContent["nav"]["nav-item-3"];
    navMenu[3].textContent = siteContent["nav"]["nav-item-4"];
    navMenu[4].textContent = siteContent["nav"]["nav-item-5"];
    navMenu[5].textContent = siteContent["nav"]["nav-item-6"];

// Update the h1 heading
const h1 = document.querySelector("h1");
h1.textContent = "DOM Is Awesome";

// Update the button text
const button = document.querySelector("button");
button.textContent = "Get Started";

// Main Content Section

    // Top Content Section

        // Grab the .top-content h4 tags
        let mainTopTextH4 = document.body.querySelectorAll(".main-content .top-content .text-content h4");

            // Update the first .top-content h4 heading
            mainTopTextH4[0].textContent = siteContent['main-content']["features-h4"];

            // Update the second .top-content h4 heading
            mainTopTextH4[1].textContent = siteContent['main-content']["about-h4"]

        // Grab the .top-content p tags
        let mainTopTextP = document.body.querySelectorAll(".main-content .top-content .text-content p");

            // Update the first .top-content paragraph
            mainTopTextP[0].textContent = siteContent['main-content']["features-content"];

            // Update the second .top-content paragraph
            mainTopTextP[1].textContent = siteContent['main-content']['about-content'];

    // Bottom Content Section

        // Grab the .bottom-content h4 tags
        let mainBottomTextH4 = document.body.querySelectorAll(".main-content .bottom-content .text-content h4");

            // Update the first .bottom-content h4 heading
            mainBottomTextH4[0].textContent = siteContent['main-content']["services-h4"];

            // Update the second .bottom-content h4 heading
            mainBottomTextH4[1].textContent = siteContent['main-content']["product-h4"]

            // Update the third .bottom-content h4 heading
            mainBottomTextH4[2].textContent = siteContent['main-content']["vision-h4"]

        // Grab the .bottom-content p tags
        let mainBottomTextP = document.body.querySelectorAll(".main-content .bottom-content .text-content p");

            // Update the first .bottom-content paragraph
            mainBottomTextP[0].textContent = siteContent['main-content']["services-content"];

            // Update the second .bottom-content paragraph
            mainBottomTextP[1].textContent = siteContent['main-content']['product-content'];    

            // Update the third .bottom-content paragraph
                mainBottomTextP[2].textContent = siteContent['main-content']['vision-content'];    

    // Contact Section

        // Grab the contact h4 heading
        let contactH4 = document.body.querySelector(".contact h4");

            // Update the .contact h4 heading
            contactH4.textContent = siteContent["contact"]["contact-h4"];

        // Grab the .contact paragraph
        let contactP = document.body.querySelectorAll(".contact p");

            // Update the .contact address
            contactP[0].textContent = siteContent['contact']["address"];

            // Update the .contact phone number
            contactP[1].textContent = siteContent['contact']["phone"];

            // Update the .contact email
            contactP[2].textContent = siteContent['contact']["email"];

    // Footer

        // Grab the footer paragraph
        let footer = document.body.querySelector("footer p");

            // Update the footer paragrahp copyright
            footer.textContent = siteContent["footer"]["copyright"]
        