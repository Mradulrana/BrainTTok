
  // <!-- Google Translate Widget -->

  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ru,ko'
    }, 'google_translate_element');
}

function translatePage(language) {
    let selectField = document.querySelector('.goog-te-combo');
    if (selectField) {
        selectField.value = language;
        selectField.dispatchEvent(new Event('change'));
    }
}

document.addEventListener('DOMContentLoaded', function() {
  let langBtns = document.querySelectorAll('.langBtn');
  let langDropdownContents = document.querySelectorAll('.langDropdownContent');

  langBtns.forEach(function(langBtn) {
      langBtn.addEventListener('click', function() {
          langDropdownContents.forEach(function(langDropdownContent) {
              langDropdownContent.classList.toggle('show');
          });
          console.log("click");
      });
  });

  window.addEventListener('click', function(event) {
      if (!event.target.matches('.langBtn')) {
          langDropdownContents.forEach(function(langDropdownContent) {
              if (langDropdownContent.classList.contains('show')) {
                  langDropdownContent.classList.remove('show');
              }
          });
      }
  });
});
