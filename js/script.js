document.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.navigation__checkbox').checked = false;
    });
  });