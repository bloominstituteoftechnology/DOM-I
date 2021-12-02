const { server } = require('./mocks/server')
const { screen } = require('@testing-library/dom')
require('@testing-library/jest-dom/extend-expect')

beforeAll(() => {
  server.listen()
  document.body.innerHTML = `
    <div class="container">
      <header>
        <nav>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </nav>
        <img id="logo-img" class="logo" alt="Great Idea! Company logo">
      </header>
      <section class="cta">
        <div class="cta-text">
          <h1></h1>
          <button></button>
        </div>
        <img id="cta-img" alt="Image of a code snippet">
      </section>
      <section class="main-content">
        <div class="top-content">
          <div class="text-content">
            <h4></h4>
            <p></p>
          </div>
          <div class="text-content">
            <h4></h4>
            <p></p>
          </div>
        </div>
        <img class="middle-img" id="middle-img" alt="Image of code snippets across the screen">
        <div class="bottom-content">
          <div class="text-content">
            <h4></h4>
            <p></p>
          </div>
          <div class="text-content">
            <h4></h4>
            <p></p>
          </div>
          <div class="text-content">
            <h4></h4>
            <p></p>
          </div>
        </div>
      </section>
      <section class="contact">
        <h4></h4>
        <p></p>
        <p></p>
        <p></p>
      </section>
      <footer>
        <a href="#"></a>
      </footer>
    </div>
  `
  require('./src/index.js')
})
afterAll(() => {
  server.close()
})
afterEach(() => {
  server.resetHandlers()
})

describe('text contents', () => {
  test('[1] header nav links contain the correct text', () => {
    expect(screen.getByText('Services', { selector: 'nav a' }))
    expect(screen.getByText('Product', { selector: 'nav a' }))
    expect(screen.getByText('Vision', { selector: 'nav a' }))
    expect(screen.getByText('Features', { selector: 'nav a' }))
    expect(screen.getByText('About', { selector: 'nav a' }))
    expect(screen.getByText('Contact', { selector: 'nav a' }))
  })
  test('[2] call to action elements contain the correct text', () => {
    expect(screen.getByText('DOM Is Awesome'))
    expect(screen.getByText('Get Started'))
  })
  test('[3] main content headings contain the correct text', () => {
    expect(screen.getByText(
      'Features',
      { selector: '.top-content .text-content:nth-of-type(1) h4' }
    ))
    expect(screen.getByText(
      'About',
      { selector: '.top-content .text-content:nth-of-type(2) h4' }
    ))
  })
  test('[4] main content paragraphs contain the correct text', () => {
    expect(screen.getByText(
      /Features content elementum magna eros/,
      { selector: '.top-content .text-content p' }
    ))
    expect(screen.getByText(
      /About content elementum magna eros/,
      { selector: '.top-content .text-content p' }
    ))
  })
  test('[5] bottom content headings contain the correct text', () => {
    expect(screen.getByText(
      'Services',
      { selector: '.bottom-content .text-content h4' }
    ))
    expect(screen.getByText(
      'Product',
      { selector: '.bottom-content .text-content h4' }
    ))
    expect(screen.getByText(
      'Vision',
      { selector: '.bottom-content .text-content h4' }
    ))
  })
  test('[6] bottom content headings contain the correct text', () => {
    expect(screen.getByText(
      /Services content elementum magna eros/,
      { selector: '.bottom-content .text-content p' }
    ))
    expect(screen.getByText(
      /Product content elementum magna eros/,
      { selector: '.bottom-content .text-content p' }
    ))
    expect(screen.getByText(
      /Vision content elementum magna eros/,
      { selector: '.bottom-content .text-content p' }
    ))
  })
  test('[7] contact information elements contain the correct text', () => {
    expect(screen.getByText(
      'Contact',
      { selector: 'section.contact h4' }
    ))
    expect(screen.getByText(
      '123 Way 456 Street Somewhere, USA',
      { selector: 'section.contact p' }
    ))
    expect(screen.getByText('1 (888) 888-8888',
      { selector: 'section.contact p' }
    ))
    expect(screen.getByText(
      'sales@greatidea.io',
      { selector: 'section.contact p' }
    ))
  })
  test('[8] copyright information link contains the correct text', () => {
    expect(screen.getByText(
      /Copyright Great Idea/,
      { selector: 'footer a' }
    ))
  })
})
describe('img sources', () => {
  test('[9] header logo img has the correct src', () => {
    expect(screen.getByAltText(/Company logo/))
      .toHaveAttribute('src', 'http://localhost:9000/img/logo.png')
  })
  test('[10] call to action img has the correct src', () => {
    expect(screen.getByAltText('Image of a code snippet'))
      .toHaveAttribute('src', 'http://localhost:9000/img/cta.png')
  })
  test('[11] middle img has the correct src', () => {
    expect(screen.getByAltText(/Image of code snippets/))
      .toHaveAttribute('src', 'http://localhost:9000/img/accent.png')
  })
})
describe('class names', () => {
  test('[12] nav links have a class name of italic', () => {
    // screen.getAllByText(/[\s\S]*/, { selector: 'nav a' }) // TODO: research which
    for (let link of document.querySelectorAll('nav a')) {
      expect(link).toHaveAttribute('class', 'italic')
    }
  })
  test('[13] no other links have a class name of italic', () => {
    expect(document.querySelector('footer a')).not.toHaveAttribute('class', 'italic')
  })
  test('[14] the footer link has a class name of bold', () => {
    const link = document.querySelector('footer a')
    expect(link).toHaveAttribute('class', 'bold')
  })
  test('[15] no other links have a class name of bold', () => {
    for (let link of document.querySelectorAll('nav a')) {
      expect(link).not.toHaveAttribute('class', 'bold')
    }
  })
})
