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

function main(){
  /***********************************************************
  ************************** Header **************************
  ************************************************************/
  const header = document.querySelector('header');
  //==================== Nav Items ====================
  let headerNavItems = header.querySelector('nav').querySelectorAll('a');

  headerNavItems.forEach(function(item, i){
    item.textContent = siteContent["nav"][`nav-item-${i+1}`];
    item.style.color = "green";
  });

  //====================== Image ======================
  let logo = header.querySelector("#logo-img");
  logo.src = siteContent["nav"]["img-src"];

  /***********************************************************
  **************************** CTA ***************************
  ************************************************************/
 let cta = document.querySelector(".cta");
  //===================== CTA-Text ====================
  let ctaText = cta.querySelector(".cta-text");
  //------------------- Title -------------------
  let ctaH1 = ctaText.querySelector('h1');
  ctaH1.textContent = siteContent["cta"]["h1"];
  let ctaH1Words = siteContent["cta"]["h1"].split(" "); // Used to somehow insert <br> here???
  let ctaH1s_Dom = ctaText.querySelector('h1');
  ctaH1s_Dom.textContent = ctaH1Words[0];
  let cta_nodeH1P_Is = document.createElement('h1');
  let cta_textNodeH1P_Is = document.createTextNode(ctaH1Words[1]);
  cta_nodeH1P_Is.appendChild(cta_textNodeH1P_Is);
  let cta_nodeH1P_Awesome = document.createElement('h1');
  let cta_textNodeH1P_Awesome = document.createTextNode(ctaH1Words[2]);
  cta_nodeH1P_Awesome.appendChild(cta_textNodeH1P_Awesome);
  ctaText.appendChild(cta_nodeH1P_Is);
  ctaText.appendChild(cta_nodeH1P_Awesome);

  // align content to pixel perfect
  let ctaH1s = ctaText.querySelectorAll('h1');
  ctaH1s.forEach(function(h1){
    h1.style.margin = 0;
  });
  
  //------------------- Button ------------------
  let ctaButton = ctaText.querySelector('button');
  ctaButton.textContent = siteContent["cta"]["button"];
  ctaButton.style.order = 1;
  ctaButton.style.marginTop = "25px";
  ctaButton.style.paddingTop = "2px";

  //====================== Image ======================
  let ctaImg = cta.querySelector("#cta-img");
  ctaImg.src = siteContent["cta"]["img-src"];

  /***********************************************************
  *********************** Main Content ***********************
  ************************************************************/
  //=================== Top Content ===================
  let topContent = document.querySelector(".top-content");
  let topContentTextContent = topContent.querySelectorAll(".text-content");
  let topContentTextContentH4_LeftBox = topContentTextContent[0].querySelector("h4");
  let topContentTextContentP_LeftBox = topContentTextContent[0].querySelector("p");
  let topContentTextContentH4_RightBox = topContentTextContent[1].querySelector("h4");
  let topContentTextContentP_RightBox = topContentTextContent[1].querySelector("p");

  topContentTextContentH4_LeftBox.textContent = siteContent["main-content"]["features-h4"];
  topContentTextContentP_LeftBox.textContent = siteContent["main-content"]["features-content"];

  topContentTextContentH4_RightBox.textContent = siteContent["main-content"]["about-h4"];
  topContentTextContentP_RightBox.textContent = siteContent["main-content"]["about-content"];

  //=================== Middle Image ==================
  let middleImg = document.querySelector("#middle-img");
  middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

  //================== Bottom Content =================
  let bottomContent = document.querySelector(".bottom-content");
  let bottomContentTextContent = bottomContent.querySelectorAll(".text-content");
  let bottomContentTextContentH4_LeftBox = bottomContentTextContent[0].querySelector("h4");
  let bottomContentTextContentP_LeftBox = bottomContentTextContent[0].querySelector("p");
  let bottomContentTextContentH4_MiddleBox = bottomContentTextContent[1].querySelector("h4");
  let bottomContentTextContentP_MiddleBox = bottomContentTextContent[1].querySelector("p");
  let bottomContentTextContentH4_RightBox = bottomContentTextContent[2].querySelector("h4");
  let bottomContentTextContentP_RightBox = bottomContentTextContent[2].querySelector("p");

  bottomContentTextContentH4_LeftBox.textContent = siteContent["main-content"]["services-h4"];
  bottomContentTextContentP_LeftBox.textContent = siteContent["main-content"]["services-content"];

  bottomContentTextContentH4_MiddleBox.textContent = siteContent["main-content"]["product-h4"];
  bottomContentTextContentP_MiddleBox.textContent = siteContent["main-content"]["product-content"];

  bottomContentTextContentH4_RightBox.textContent = siteContent["main-content"]["vision-h4"];
  bottomContentTextContentP_RightBox.textContent = siteContent["main-content"]["vision-content"];

  /***********************************************************
  ************************** Contact *************************
  ************************************************************/
  let contact = document.querySelector(".contact");
  contact.style.width = "13rem";

  //=================== Contact Title =================
  let contactTitle = contact.querySelector("h4");
  contactTitle.textContent = siteContent["contact"]["contact-h4"];

  //=================== Contact Info =================
  let contactText = contact.querySelectorAll("p");
  let contactText_Address = contactText[0];
  let contactText_Phone = contactText[1];
  let contactText_Email = contactText[2];
  contactText_Address.textContent = siteContent["contact"]["address"];
  contactText_Phone.textContent = siteContent["contact"]["phone"];
  contactText_Email.textContent = siteContent["contact"]["email"];

  /***********************************************************
  ************************** Footer **************************
  ************************************************************/
  let footer = document.querySelector("footer");
  let footerP = footer.querySelector("p");

  footerP.textContent = siteContent["footer"]["copyright"];
}

main();