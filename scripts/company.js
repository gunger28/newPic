window.onload = function(){
    sendForm();
    
    
    };
          
    
    function sendForm() {
        document.querySelector('#form').addEventListener('submit', async function(event) {
            event.preventDefault();
    
            const formData = Object.fromEntries(new FormData(event.target).entries());
            const {name, phone, message} = formData;
            let type = "simple";
            const body = `type=${type}&name=${name}&phone=${phone}&mes=${message}`;

            url = '../php/sendMail.php';
            options = {
                method : 'POST',
                body,
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            };
    
            const response = await fetch(url, options);
            const status = await response.text();
    
            if (+status === 1) {
                alert('Заявка успешно отправлена! Скоро с вами свяжется наш сотрудник.');
                  document.querySelectorAll('.input').forEach(input => input.value = '');
                 document.querySelector('.message').value = '';
                 window.history.replaceState({}, document.title, location.protocol + '//' + location.host + location.pathname);
            }
            else alert("Произошла ошибка, попробуйте позже");
        });
        
    };
    
   