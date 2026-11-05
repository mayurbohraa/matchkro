/* Navigation state is derived from the button so link clicks cannot desync it. */
const navbar = document.querySelector('#navbar');
const navbarToggle = document.querySelector('#navbar-toggle');
const navbarMenu = document.querySelector('#navbar-menu');

if (navbarToggle && navbarMenu) {
  const setMenuExpanded = (expanded) => {
    navbarToggle.setAttribute('aria-expanded', String(expanded));
  };

  navbarToggle.addEventListener('click', () => {
    setMenuExpanded(navbarToggle.getAttribute('aria-expanded') !== 'true');
  });

  navbarMenu.addEventListener('click', (event) => {
    if (event.target.closest('a') || event.target === navbarMenu) {
      setMenuExpanded(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navbarToggle.getAttribute('aria-expanded') === 'true') {
      setMenuExpanded(false);
      navbarToggle.focus();
    }
  });

  window.matchMedia('(min-width: 992px)').addEventListener('change', () => {
    setMenuExpanded(false);
  });
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  const submitButton = contactForm.querySelector('#submitButton');
  const loader = contactForm.querySelector('#submit-loader');
  const warning = contactForm.querySelector('#message-warning');
  const success = contactForm.querySelector('#message-success');
  let sending = false;

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;

    const name = contactForm.elements.name;
    const message = contactForm.elements.message;
    name.value = name.value.trim();
    message.value = message.value.trim();
    if (!contactForm.reportValidity()) return;

    sending = true;
    submitButton.disabled = true;
    contactForm.setAttribute('aria-busy', 'true');
    warning.style.display = 'none';
    success.style.display = 'none';
    loader.style.display = 'block';

    try {
      // Keep the existing SheetDB integration and field names.
      const response = await fetch('https://sheetdb.io/api/v1/6vuu9mfwp9v8v', {
        method: 'POST',
        body: new URLSearchParams({
          Name: name.value,
          Email: contactForm.elements.email.value.trim(),
          Message: message.value,
          Date: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(15000),
      });

      if (!response.ok) throw new Error('Message request failed');
      const result = await response.json();
      if (Number(result.created) < 1 || !result.created) {
        throw new Error('Message was not saved');
      }
      contactForm.reset();
      success.style.display = 'block';
    } catch {
      warning.textContent = 'Could not send. Retry or email matchkro@gmail.com.';
      warning.style.display = 'block';
    } finally {
      sending = false;
      submitButton.disabled = false;
      contactForm.removeAttribute('aria-busy');
      loader.style.display = 'none';
    }
  });
}
