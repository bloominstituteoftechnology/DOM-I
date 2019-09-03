const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Operation save the penguins object
const operationSaveThePenguinsData = {
  nav: {
    "nav-item-1": "Penguins",
    "nav-item-2": "Population",
    "nav-item-3": "Visit",
    "nav-item-4": "Satelites",
    "nav-item-5": "About",
    "nav-item-6": "Support",
    "img-src": "img/kinguin.png"
  },
  cta: {
    h1: "King Penguin Colony Drops",
    button: "Save the Penguins",
    "img-src": "img/penguins.jpg"
  },
  "main-content": {
    "features-h4": "Populations Drop",
    "features-content":
      "Researchers hadn’t visited the remote island in 30 years when there were 500,000 breeding pairs. Satellite images now indicate perhaps as few as 60,000 pairs.",
    "about-h4": "A Future Visit",
    "about-content":
      "Researchers plan to do a head count on the island but they can’t get there until late fall 2019 at the earliest, because of the cost and timing issues, said Dr. Weimerskirch, research director of the Chizé Centre for Biological Studies at the French National Centre for Scientific Research. ",
    "middle-img-src": "img/middle-penguins.jpg",
    "services-h4": "Donate",
    "services-content":
      "You can donate to the research to help save the penguins.",
    "product-h4": "Educate",
    "product-content":
      "Help spread the word about the problem with the population of king penguins by telling your friends and family.",
    "vision-h4": "Tony's Vision",
    "vision-content":
      "This page idea was conceptualized by a user named Tony in the Unofficial Lambda Club discord. Contact him if you would like to learn more."
  },
  contact: {
    "contact-h4": "Contact",
    address: "Save the Penguins",
    phone: "1-800-PENGUINS",
    email: "contact@savethepenguins.tony"
  },
  footer: {
    copyright: "Copyright Tony's Operation Save The Penguins! 2019"
  }
};

const renderModal = () => {
  let modal = document.createElement("div");
  modal.style.width = "100vw";
  modal.style.height = "110vh";
  modal.style.zIndex = "100";
  modal.style.position = "absolute";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.backgroundColor = "#000D";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.setAttribute("id", "modal");

  let modalParent = document.querySelector("body");
  modalParent.appendChild(modal);

  modalParent.style.overflow = "hidden";

  let form = document.createElement("div");
  form.style.width = "100%";
  form.style.fontSize = "1rem";
  form.style.color = "#fff";
  form.style.borderRadius = "10px";
  form.style.padding = "20px";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.innerHTML = `
  <h2>Navigation</h2>
  <section>
  <strong> #1 </strong><input type="text" id="nav-item-1" label="nav-item-1">
  <strong>#2 </strong><input type="text" id="nav-item-2" label="nav-item-2">
  <strong>#3 </strong><input type="text" id="nav-item-3" label="nav-item-3">
  <strong>#4 </strong><input type="text" id="nav-item-4" label="nav-item-4">
  <strong>#5 </strong><input type="text" id="nav-item-5" label="nav-item-5">
  <strong>#6 </strong><input type="text" id="nav-item-6" label="nav-item-6">
  </section>

  <h2>Logo Image</h2>
  <section>
  <strong>Logo Image: </strong><input type="text" id="logo-img-src">
  </section>

  <h2>Call to Action</h2>
  <section>
  <div>
  <strong>Heading: </strong><input type="text" id="cta-h1">
  </div>
  <div>
  <strong>Button Text: </strong><input type="text" id="cta-button">
  </div>
  <div>
  <strong>Image: </strong><input type="text" id="cta-image-src">
  </div>
  </section>
  
  <h2>Main Content</h2>
  <section>
  
  <div>
  <strong>Section #1 Heading: </strong><input type="text" id="section-1-h1">
  <strong>Section #1 Content: </strong><textarea id="section-1-content"></textarea>
  </div>

  <div>
  <strong>Section #2 Heading: </strong><input type="text" id="section-2-h1">
  <strong>Section #2 Content: </strong><textarea id="section-2-content"></textarea>
  </div>
  
  <div>
  <strong>Section #3 Heading: </strong><input type="text" id="section-3-h1">
  <strong>Section #3 Content: </strong><textarea id="section-3-content"></textarea>
  </div>
  
  <div>
  <strong>Section #4 Heading: </strong><input type="text" id="section-4-h1">
  <strong>Section #4 Content: </strong><textarea id="section-4-content"></textarea>
  </div>

  <div>
  <strong>Section #5 Heading: </strong><input type="text" id="section-5-h1">
  <strong>Section #5 Content: </strong><textarea id="section-5-content"></textarea>
  </div>
  </section>
  
  <h2>Middle Image</h2>
  <section>
  <strong>Middle Image: </strong><input type="text" id="middle-img-src">
  </section>

  <h2>Contact</h2>
  <section>
  <strong>Contact Heading: </strong><input type="text" id="contact-heading">
  <strong>Contact Address: </strong><input type="text" id="contact-address">
  <strong>Contact Phone: </strong><input type="text" id="contact-phone">
  <strong>Contact Email: </strong><input type="text" id="contact-email">
  </section>
  
  <h2>Footer</h2>
  <section>
  <strong>Footer Content: </strong><input type="text" id="footer-content">
  </section>

  <section>
  <button id="modal-button" style="margin:20px auto; width:200px; height:30px; border-radius:20px; cursor:pointer; font-size:1.2rem;">Render Content</button>
  <button id="penguin-modal-button" style="margin:20px auto; width:200px; height:30px; border-radius:20px; cursor:pointer; font-size:1.2rem;">Operation Save the Penguins</button>
  </section>
`;
  modal.appendChild(form);
  let formFields = form.querySelectorAll("input");

  formFields.forEach(element => {
    element.style.borderRadius = "10px";
    element.style.height = "30px";
    element.style.width = "150px";
    element.style.margin = "5px 5px";
    element.style.padding = "5px";
  });

  let formTextAreas = form.querySelectorAll("textarea");

  formTextAreas.forEach(element => {
    element.style.borderRadius = "5px";
    element.style.height = "30px";
    element.style.width = "200px";
    element.style.margin = "5px 5px";
    element.style.padding = "5px";
  });

  let formSections = form.querySelectorAll("section");

  formSections.forEach(element => {
    element.style.display = "flex";
    element.style.flexWrap = "wrap";
    element.style.textAlign = "center";
    element.style.margin = "0 10px";
  });

  let modalButton = document.getElementById("modal-button");
  modalButton.addEventListener("click", renderCustom);

  let penguinModalButton = document.getElementById("penguin-modal-button");
  penguinModalButton.addEventListener("click", renderOperationSaveThePenguins);
};

// Default  navigation selector
let navigation = document.querySelector("nav");

// Global Change button
let changeButton = document.createElement("button");
changeButton.textContent = "loading..";
changeButton.style.display = "inline";
changeButton.style.marginTop = "-10px";
changeButton.setAttribute("id", "nuke-button");
navigation.appendChild(changeButton);


// Render page with data and update nav button label
const renderPage = (data, buttonLabel) => {
  let site = data;
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute("src", site["nav"]["img-src"]);

  //Navigation
  let navigationLinks = document.querySelectorAll("nav a");

  navigationLinks.forEach((element, num) => {
    if (num < 7) {
      element.textContent = site.nav[`nav-item-${num + 1}`];
      element.style.color = "green";
      element.style.margin = "0 5px";
    }
  });

  let homeLink = document.createElement("a");
  homeLink.textContent = "Home";
  homeLink.style.color = "green";
  navigation.prepend(homeLink);

  changeButton.textContent = buttonLabel;

  // Call to Action
  let ctaH1 = document.querySelector(".cta-text h1");
  let ctaButton = document.querySelector(".cta button");
  let ctaImage = document.querySelectorAll(".cta")[0].childNodes[3];
  let h1Content = site.cta.h1
    .split(" ")
    .map((element, num) =>
      num < 2 ? (element = ` ${element} <br> `) : element
    )
    .join(" ");

  ctaH1.innerHTML = h1Content;
  ctaButton.textContent = site.cta.button;
  ctaImage.src = site.cta["img-src"];

  // Top content
  let topContent = document.querySelectorAll(".top-content .text-content");

  topContent.forEach((element, num) => {
    switch (num) {
      case 0:
        element.childNodes[1].textContent = site["main-content"]["features-h4"];
        element.childNodes[3].textContent =
          site["main-content"]["features-content"];
        break;

      case 1:
        element.childNodes[1].textContent = site["main-content"]["about-h4"];
        element.childNodes[3].textContent =
          site["main-content"]["about-content"];
        break;

      default:
        break;
    }
  });

  // Middle image
  let middleImage = document.querySelector("#middle-img");
  middleImage.src = site["main-content"]["middle-img-src"];

  //Bottom content
  let bottomContent = document.querySelectorAll(
    ".bottom-content .text-content"
  );

  bottomContent.forEach((element, num) => {
    switch (num) {
      case 0:
        element.childNodes[1].textContent = site["main-content"]["services-h4"];
        element.childNodes[3].textContent =
          site["main-content"]["services-content"];
        break;

      case 1:
        element.childNodes[1].textContent = site["main-content"]["product-h4"];
        element.childNodes[3].textContent =
          site["main-content"]["product-content"];
        break;

      case 2:
        element.childNodes[1].textContent = site["main-content"]["vision-h4"];
        element.childNodes[3].textContent =
          site["main-content"]["vision-content"];
        break;

      default:
        break;
    }
  });

  // Contact
  let contactSectionH4 = document.querySelector(".contact h4");
  contactSectionH4.textContent = site.contact["contact-h4"];

  let contactParagraphs = document.querySelectorAll(".contact p");

  contactParagraphs.forEach((element, num) => {
    switch (num) {
      case 0:
        element.textContent = site["contact"].address;
        break;

      case 1:
        element.textContent = site["contact"].phone;
        break;

      case 2:
        element.textContent = site["contact"].email;
        break;

      default:
        break;
    }
  });

  // Footer
  let footerParagraph = document.querySelector("footer p");
  footerParagraph.textContent = site.footer.copyright;
};

// Render the defaul Great Idea page.
renderPage(siteContent, "Deface");

// Render a custom page bas
const renderCustom = () => {

  // Capture Form Data
  let ni1 = document.querySelector("#nav-item-1").value;
  let ni2 = document.querySelector("#nav-item-2").value;
  let ni3 = document.querySelector("#nav-item-3").value;
  let ni4 = document.querySelector("#nav-item-4").value;
  let ni5 = document.querySelector("#nav-item-5").value;
  let ni6 = document.querySelector("#nav-item-6").value;

  let logoImage = document.querySelector("#logo-img-src").value;
  let ctah1 = document.querySelector("#cta-h1").value;
  let ctaButton = document.querySelector("#cta-button").value;
  let ctaImageSrc = document.querySelector("#cta-image-src").value;

  let section1Heading = document.querySelector("#section-1-h1").value;
  let section1Content = document.querySelector("#section-1-content").value;
  let section2Heading = document.querySelector("#section-2-h1").value;
  let section2Content = document.querySelector("#section-2-content").value;
  let section3Heading = document.querySelector("#section-3-h1").value;
  let section3Content = document.querySelector("#section-3-content").value;
  let section4Heading = document.querySelector("#section-4-h1").value;
  let section4Content = document.querySelector("#section-4-content").value;
  let section5Heading = document.querySelector("#section-5-h1").value;
  let section5Content = document.querySelector("#section-5-content").value;

  let middleSectionImage = document.querySelector("#middle-img-src").value;

  let contactHeading = document.querySelector("#contact-heading").value;
  let contactAddress = document.querySelector("#contact-address").value;
  let contactPhone = document.querySelector("#contact-phone").value;
  let contactEmail = document.querySelector("#contact-email").value;

  let footerContent = document.querySelector("#footer-content").value;

  const data = {
    nav: {
      "nav-item-1": ni1,
      "nav-item-2": ni2,
      "nav-item-3": ni3,
      "nav-item-4": ni4,
      "nav-item-5": ni5,
      "nav-item-6": ni6,
      "img-src": logoImage
    },
    cta: {
      h1: ctah1,
      button: ctaButton,
      "img-src": ctaImageSrc
    },
    "main-content": {
      "features-h4": section1Heading,
      "features-content": section1Content,
      "about-h4": section2Heading,
      "about-content": section2Heading,

      "middle-img-src": middleSectionImage,
      
      "services-h4": section3Heading,
      "services-content":section3Content,
      "product-h4": section4Heading,
      "product-content":section4Content,
      "vision-h4": section5Heading,
      "vision-content": section5Content
    },
    contact: {
      "contact-h4": contactHeading,
      address: contactAddress,
      phone: contactPhone,
      email: contactEmail
    },
    footer: {
      copyright: footerContent
    }
  };

  console.log("Launching custom data..");
  renderPage(data, "Change Data");

  //Remove event listeners
  let modalButton = document.getElementById("modal-button");
  let penguinModalButton = document.getElementById("penguin-modal-button");
  modalButton.removeEventListener("click", renderCustom);
  penguinModalButton.removeEventListener(
    "click",
    renderOperationSaveThePenguins
  );

  //Allow document overflow again
  document.body.style.overflow = "auto";

  // Remove modal element
  let existingModal = document.querySelector("#modal");
  document.body.removeChild(existingModal);
};

// Render the special Save the King Penguins page
const renderOperationSaveThePenguins = () => {
  console.log("Launching operation save the penguins..");
  renderPage(operationSaveThePenguinsData, "Change");

  //Remove event listeners
  let modalButton = document.getElementById("modal-button");
  let penguinModalButton = document.getElementById("penguin-modal-button");
  modalButton.removeEventListener("click", renderCustom);
  penguinModalButton.removeEventListener(
    "click",
    renderOperationSaveThePenguins
  );

  //Allow document overflow again
  document.body.style.overflow = "auto";

  // Remove modal element
  let existingModal = document.querySelector("#modal");
  document.body.removeChild(existingModal);
};

// Create Page Render Modal
const createModal = () => {
  console.log("Rendering Modal..");
  renderModal();
};

let nuke = document.querySelector("#nuke-button");
nuke.addEventListener("click", createModal);