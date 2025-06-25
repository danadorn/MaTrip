const toggles = document.querySelectorAll('.faq-toggle');

      toggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
          const content = toggle.nextElementSibling;
          const icon = toggle.querySelector('.icon');

          const isOpen = content.style.maxHeight;

          // Close all
          document.querySelectorAll('.faq-content').forEach((el) => {
            el.style.maxHeight = null;
          });
          document.querySelectorAll('.icon').forEach((i) => {
            i.textContent = '+';
          });

          // If it wasn't open, open this one
          if (!isOpen || isOpen === '0px') {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.textContent = '−';
          }
        });
      });