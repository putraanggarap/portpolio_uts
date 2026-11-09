//effect ngetik

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const textToType = " Putra Anggara Pradita";
    let charIndex = 0;
  
    function typeEffect() {
      if (charIndex < textToType.length) {
        textElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 90); // Kecepatan ngetik (milidetik)
      } else {
        
        const cursor = document.querySelector(".typing-cursor");
        if (cursor) {
          setTimeout(() => {
            cursor.style.display = "none";
          }, 3000);
        }
      }
    }
  
    
    if (textElement) {
      textElement.textContent = ""; 
      setTimeout(typeEffect, 500);  
    }
  });
 //notif form
  document.addEventListener("DOMContentLoaded", function () {
    const typedTextSpan = document.querySelector(".typed-text");
    if (typedTextSpan) {
      const textArray = ["ML Engineer", "Data Scientist", "Web Developer"];
      let textArrayIndex = 0;
      let charIndex = 0;
  
      function type() {
        if (charIndex < textArray[textArrayIndex].length) {
          typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
        } else {
          setTimeout(erase, 2000);
        }
      }
  
      function erase() {
        if (charIndex > 0) {
          typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50);
        } else {
          textArrayIndex++;
          if (textArrayIndex >= textArray.length) textArrayIndex = 0;
          setTimeout(type, 500);
        }
      }
  
      setTimeout(type, 1000);
    }
  });





  const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah berhasil dikirim.");
    contactForm.reset();
  });
}