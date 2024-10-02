$(document).ready(function() {

  // Sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  
    // Update the active section in the header
    updateActiveSection();
  });
  
  $(".header ul li a").click(function(e) {
    e.preventDefault(); 
  
    var target = $(this).attr("href");
  
    if ($(target).hasClass("active-section")) {
      return; 
    }
  
    if (target === "#home") {
      $("html, body").animate(
        {
          scrollTop: 0 
        },
        500
      );
    } else {
      var offset = $(target).offset().top - 40; 
  
      $("html, body").animate(
        {
          scrollTop: offset
        },
        500
      );
    }
  
    $(".header ul li a").removeClass("active");
    $(this).addClass("active");
  });
  
  // Initial content revealing js
  ScrollReveal({
    distance: "100px",
    duration: 2000,
    delay: 200
  });
  
  ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
    origin: "left"
  });
  ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
    origin: "right"
  });
  ScrollReveal().reveal(".project-title, .contact-title", {
    origin: "top"
  });
  ScrollReveal().reveal(".projects, .contact", {
    origin: "bottom"
  });

  // Contact form to Google Sheets
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyJxWGpx5fs0h3QW6Js9X-m1ccSlg-0bMMKzU4306wREkThm9RgsaWlcC61SD3M1llY/exec';
  const form = document.forms['submitToGoogleSheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      if (response.ok) {
        msg.innerHTML = "Message sent successfully";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      } else {
        msg.innerHTML = "Failed to send message. Please try again.";
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      msg.innerHTML = "An error occurred. Please try again.";
    });
  });

  function updateActiveSection() {
    var scrollPosition = $(window).scrollTop();
  
    if (scrollPosition === 0) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#home']").addClass("active");
      return;
    }
  
    $("section").each(function() {
      var target = $(this).attr("id");
      var offset = $(this).offset().top;
      var height = $(this).outerHeight();
  
      if (
        scrollPosition >= offset - 40 &&
        scrollPosition < offset + height - 40
      ) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#" + target + "']").addClass("active");
      }
    });
  }
});

// https://script.google.com/macros/s/AKfycbwejucCE1KkiSgkFyjZTecDupA6OIKnb6S6kF2Dq68wTwChpAZW-m0eYgHEmnk4g2xipA/exec

// AKfycbxu8vrsoAJZyP7NxbcPwK1LIR8EQBylhQt_5M9pnze9khHLJ1VGNwpkCcUZnoC34OQddg