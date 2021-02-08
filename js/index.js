const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

const { nav, cta, 'main-content': mainContent, contact, footer } = siteContent;
// Images
const logo = document.getElementById('logo-img');
logo.setAttribute('src', nav['img-src']);

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', cta['img-src']);

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', mainContent['middle-img-src']);

// Nav
const navItems = document.querySelectorAll('nav > a');
navItems.forEach((navItem, ind) => {
	navItem.textContent = nav[`nav-item-${ind + 1}`]; // Uses string literals to dynamically access the iterating key names to access the title of each nav item
	navItem.style.color = 'green';
});
// Appending and Pre-pending two new nav items
const appendingChild = document.querySelectorAll('nav > a')[0].cloneNode(true);
appendingChild.setAttribute('href', '#');
appendingChild.textContent = 'Blog';

document.querySelector('nav').appendChild(appendingChild);

const prePendingChild = appendingChild.cloneNode(true);
prePendingChild.setAttribute('href', '#');
prePendingChild.textContent = 'Home';

document.querySelector('nav').prepend(prePendingChild);
// CTA
const ctaH1 = document.querySelector('.cta-text > h1');
ctaSplit = cta.h1.split(' ');
ctaH1.innerHTML = ctaSplit.join(' <br>');

const ctaBtn = document.querySelector('.cta-text > button');
ctaBtn.textContent = cta['button'];
// Main Section
const mainContentKeys = Object.keys(mainContent);
mainContentKeys.splice(4, 1); // Removes the image key
const mainTextContent = document.querySelectorAll('.text-content');
mainTextContent.forEach((contentSection) => {
	contentSection.querySelector('h4').textContent =
		mainContent[mainContentKeys.shift()];
	contentSection.querySelector('p').textContent =
		mainContent[mainContentKeys.shift()];
});

// Contact
const contactKeys = Object.keys(contact);
const contactSection = document.querySelector('.contact');
const contactSectionChildNodes = contactSection.childNodes;
let contactSectionChildren = [...contactSectionChildNodes];
contactSectionChildren = contactSectionChildren.filter(({ nodeName }) => {
	return nodeName !== '#text';
});

contactSectionChildren.forEach((child, ind) => {
	child.textContent = contact[contactKeys[ind]];
});

const contactAddress = document.querySelectorAll('.contact > p')[0];
let addressArray = contact.address.split(' ');
addressArray.splice(4, 0, '<br>');
contactAddress.innerHTML = addressArray.join(' ');

// Footer
const footerCopyright = document.querySelector('footer > p');
footerCopyright.textContent = footer['copyright'];

// !STRETCH

const bodySelector = document.querySelector('body');

ctaBtn.addEventListener('click', () => {
	bodySelector.classList.toggle('dark');
});
