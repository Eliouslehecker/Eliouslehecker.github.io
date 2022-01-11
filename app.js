const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
  event.preventDefault();

   btn.value = 'Envoi...';

   const serviceID = 'gmail';
   const templateID = 'template_ycfgbfi';

   emailjs.sendForm('gmail','template_ycfgbfi', this)
    .then(() => {
      btn.value = 'Envoyer';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Envoyer';
      alert(JSON.stringify(err));
    });
});
