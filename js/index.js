const siteContent = {
    "header": {
        "logo-img": "img/logo.png"
    },
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "cta-img": "img/header-img.png"
    },
    "main-content": {
        "top-content": {
            "h4": ["Features", "About"],
            "p": [
                "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
                "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
            ]
        },
        "bottom-content": {
            "h4": [
                "Services",
                "Product",
                "Vision"
            ],
            "p": [
                "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
                "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
                "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
            ]
        },
        "middle-img": "img/mid-page-accent.jpg",
    },
    "contact": {
        "h4": "Contact",
        "p": [
            "123 Way 456 Street Somewhere, USA",
            "1 (888) 888-8888",
            "sales@greatidea.io"
        ],
    },
    "footer": {
        "p": "Copyright Great Idea! 2018"
    },
};


function renderNav(el, chProps) {
    // For nav element

    for (let i in chProps) {
        el.children[i].innerHTML = siteContent.nav[chProps[i]];
        el.children[i].style.color = "mediumseagreen";
    }
}

function renderImg(props) {
    // For images

    if (!Array.isArray(props)) props = [props];

    let img = document.getElementById(props[props.length - 1]);
    img.setAttribute('src', props.reduce((obj, prop) => {
        return obj[prop]
    }, {...siteContent}));
}

function renderEl(el, props) {
    // For all other elements

    if (!Array.isArray(props)) props = [props];

    let val = props.reduce((obj, prop) => {
        return obj[prop]
    }, {...siteContent});

    if (el && el.length && Array.isArray(val)) {
        for (let i = 0; i < el.length; i++) {
            i = parseInt(i);
            el[i].innerHTML = val[i]
        }
    } else if (el && el.length) {
        el[0].innerHTML = val
    } else if (el) {
        el.innerHTML = val
    }
}

function addLink(el, text) {
    // Append nav link

    let newLink = document.createElement("a");
    newLink.innerHTML = text;
    newLink.style.color = "mediumseagreen";
    el.appendChild(newLink);
}

function getEl(parent, prop) {
    return function (el = parent.getElementsByClassName(prop)) {
        return el[0] ? el : parent.getElementsByTagName(prop)
    }();
}

function render() {
    let contentProps = Object.keys(siteContent);

    for (let contentProp of contentProps) {
        let chProps = Object.keys(siteContent[contentProp]),
            el = getEl(document, contentProp)[0];

        if (contentProp === "nav") {
            // Edit nav tag

            renderNav(el, chProps);
            addLink(el, "New Link");
        } else {
            // Not nav tag, img?

            for (let chProp of chProps) {
                if (chProp.includes('img')) {
                    renderImg([contentProp, chProp])
                } else {
                    // Not img, children?

                    let child = getEl(el, chProp);

                    //    If there is a child of the child, get grandchild props
                    if (typeof siteContent[contentProp][chProp] === 'object' && !Array.isArray(siteContent[contentProp][chProp])) {
                        let gChildProps = Object.keys(siteContent[contentProp][chProp]);

                        for (let gChildProp of gChildProps) {
                            let gChild = getEl(child[0], gChildProp);

                            if (gChildProp.includes('img')) {
                                renderImg([contentProp, chProp, gChildProp])
                            } else {
                                renderEl(gChild, [contentProp, chProp, gChildProp])
                            }

                        }
                    } else {
                        renderEl(child, [contentProp, chProp])
                    }

                }


            }
        }


    }

}

render();


