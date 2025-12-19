const form = document.querySelector('.contact-form__form');
        
            form.addEventListener('submit', function(event) {
              event.preventDefault(); 
        
              const firstName = document.getElementById('first-name').value.trim();
              const phone = document.getElementById('phone').value.trim();
              const email = document.getElementById('email').value.trim();
        
              if (!firstName || !phone || !email) {
                alert('Пожалуйста, заполните все обязательные поля.');
                return;
              }
        
              alert('Форма успешно отправлена!');
              form.reset();
            });
          