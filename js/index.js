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
    "button": "Night Mode",
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

document.getElementById("cta-img").setAttribute('src', siteContent['cta']['img-src'])

document.getElementById("middle-img").setAttribute('src', siteContent['main-content']['middle-img-src'])

const a =  document.getElementsByTagName("a")

for (var i = 0; i < a.length; i++) {
  a[i].textContent = siteContent["nav"][`nav-item-${i + 1}`]
}

const fillQueryContent = (query, tag, content, index=0) => {
  document.querySelector(query).getElementsByTagName(tag)[index].textContent = content
}

fillQueryContent(".cta-text", "h1", siteContent["cta"]["h1"])
fillQueryContent(".cta-text", "button", siteContent["cta"]["button"])

let mainContent = []
for (const prop in siteContent["main-content"]) {
  if (!prop.includes("img")) {
    mainContent.push(prop)
  }
}

let index = 0
document.querySelector(".main-content").querySelectorAll(".text-content").forEach(div => {
  div.getElementsByTagName("h4")[0].textContent = siteContent["main-content"][mainContent[index]]
  div.getElementsByTagName("p")[0].textContent = siteContent["main-content"][mainContent[index+ 1]]
  index += 2
})

Array.from(document.querySelector(".contact").children).forEach((child, index) => {
  child.textContent = siteContent["contact"][Object.keys(siteContent["contact"])[index]]
})

document.getElementsByTagName("footer")[0].children[0].textContent = siteContent["footer"]["copyright"]

document.getElementsByTagName("nav")[0].appendChild(
  document.createElement("a")
)

document.getElementsByTagName("nav")[0].prepend(
  document.createElement("a")
)

document.getElementsByTagName("nav")[0].lastChild.textContent = "Careers"
document.getElementsByTagName("nav")[0].lastChild.setAttribute("href", "#")

document.getElementsByTagName("nav")[0].firstChild.textContent = "Home"
document.getElementsByTagName("nav")[0].firstChild.setAttribute("href", "#")

Array.from(document.getElementsByTagName("a")).forEach((a) => {
  const originalColor = a.style.color
  a.onmousedown = () => {
    a.style.color = "Chartreuse"
    a.style.textShadow = "0 0 3px #2b8c01, 0 0 5px #1a5700"
  }
  a.onmouseup = () => {
    a.style.color = originalColor
    a.style.textShadow = null
  }
})

document.getElementById("night-mode-button").addEventListener('click', () => {
  document.getElementsByTagName("html")[0].classList.toggle("night-mode")
  document.getElementsByTagName("html")[0].classList.toggle("day-mode")
})
