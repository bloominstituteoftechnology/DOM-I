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


// nav content


let navItems=document.querySelectorAll("header nav a")
    navItems[0].innerText=siteContent["nav"]["nav-item-1"];
    navItems[1].innerText=siteContent["nav"]["nav-item-2"];
    navItems[2].innerText=siteContent["nav"]["nav-item-3"];
    navItems[3].innerText=siteContent["nav"]["nav-item-4"]; 
    navItems[4].innerText=siteContent["nav"]["nav-item-5"];
    navItems[5].innerText=siteContent["nav"]["nav-item-6"];

    // <header>
    //         <nav>
    //             <a href="#"></a>
    //             <a href="#"></a>
    //             <a href="#"></a>
    //             <a href="#"></a>
    //             <a href="#"></a>
    //             <a href="#"></a>
    //         </nav>

    //         <img id="logo-img" class="logo" src="" alt="Great Idea! Company logo.">
    //     </header>
   
    //cta content

    let cta= document.getElementsByClassName('cta-text');
    cta.innerHTML = siteContent['cta']['h1'];

    let cta_Button = document.querySelector('button');
    cta_Button.innerHTML = siteContent['cta']['button'];

    let ctaImage = document.getElementById('cta-img');
    ctaImage.setAttribute('src',siteContent['cta']['img-src']);

//     <section class="cta">
//     <div class="cta-text">
//         <h1></h1>
//         <button></button>
//     </div>
//     <img id="cta-img" src="" alt="Image of a code snippet.">
// </section>


// main content

let textContentList = document.querySelectorAll(".text-content");

textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
textContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contactContent=document.getElementsByClassName('.contact');
contactContent[0].innerHTML=siteContent['contact']['contact-h4'];
contactContent[1].innerHTML=siteContent['contact']['contact-p'];
contactContent[2].innerHTML=siteContent['contact']['contact-p'];
contactContent[3].innerHTML=siteContent['contact']['contact-p'];

// footer content

let footerContent=document.getElementsByClassName('footer');
footerContent[0].innerText=siteContent['main-content']['footer-p'];
