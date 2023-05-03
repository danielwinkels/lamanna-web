$(document).ready(function() {
    $('form').on('submit', function(event) {
      event.preventDefault(); // Verhindert das Neuladen der Seite
  
      var formData = $(this).serialize(); // Sammelt die Formulardaten
  
      $.ajax({
        type: 'POST',
        url: 'submit-callback.php', // Ändern Sie diese URL auf Ihr eigenes Server-Skript zum Verarbeiten der Daten
        data: formData,
        success: function(response) {
          // Aktionen, die durchgeführt werden, wenn das Formular erfolgreich abgesendet wurde
          alert('Ihre Rückrufbitte wurde erfolgreich gesendet!');
        },
        error: function() {
          // Aktionen, die durchgeführt werden, wenn ein Fehler beim Absenden des Formulars auftritt
          alert('Beim Senden Ihrer Rückrufbitte ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
        }
      });
    });
  });
  