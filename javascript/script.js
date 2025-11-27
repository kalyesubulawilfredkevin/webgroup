// =========
// navbar
// waits until the entire html loads before running the javascript
document.addEventListener("DOMContentLoaded", function () {  
  
  const navbarToggler = document.querySelector(".navbar-toggler"); 
  
  const navbarCollapse = document.getElementById("navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});

//=====Gallery====//
document.addEventListener("DOMContentLoaded", function () {   // waits until the entire html loads before running the javascript
  // Gets all gallery images
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // Add click functionality to each image
  // loops through each image
  galleryImages.forEach((img) => {
    // Add hover effect
    img.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.05)";  // enlages the image for zoom effect
      this.style.transition = "transform 0.3s ease"; // makes the zoom effect smooth
    });

    // Remove hover effect
    img.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });

    // Show alert on click
    img.addEventListener("click", function () {
      alert(
        "✨ Want to visit this amazing place? Contact us to plan your trip!"
      );
    });
  });
});

// ABOUT US ///
////
// waits until the entire html loads before running the javascript
document.addEventListener("DOMContentLoaded", function () {
  // Team member click interaction
  document.querySelectorAll(".card-body img").forEach((img) => {
    img.addEventListener("click", function () {
      const name =
        this.closest(".card-body").querySelector(".card-title").textContent;
      const role =
        this.closest(".card-body").querySelector(".text-primary").textContent;
      alert(
        `Meet ${name} - ${role}\n\nSend us a message to connect with our team!`
      );
    });
  });
});
// END /////

/// index // home page
//  Homepage
// waits until the entire html loads before running the javascript
document.addEventListener("DOMContentLoaded", function () {
  // Hero button animation
  //  function (e)is the callback function that runs when the button is clicked
  document.querySelector(".btn-hero").addEventListener("click", function (e) {
    // Prevents the default behavior of the button click
    e.preventDefault();
    alert("🚀 Let's start your adventure! Contact us to plan your dream trip.");
    this.style.transform = "scale(0.95)";
    // Shrinks the button slightly to create a “press” animation
    setTimeout(() => (this.style.transform = "scale(1)"), 200);
    // after 200 milseconds the button returns to the normal size
  });

  // Newsletter form
  document.querySelector("form").addEventListener("submit", function (e) { // runs when the form is submitted
    e.preventDefault(); //prevents the form from submmiting and rteloading the page again
    const email = this.querySelector('input[type="email"]').value; // finds the email input field
    alert(`📧 Thanks! We'll send travel updates to ${email}`);
    this.reset();
  });
});
/// END .//
//// contact us ///
// // waits until the entire html loads before running the javascrip
document.addEventListener('DOMContentLoaded', function() {
    
    // Contact form submission
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        
        if (name && email) {
            alert(`✅ Thank you ${name}! We'll contact you at ${email} soon.`);
            this.reset();
        } else {
            alert('📝 Please fill in all required fields (name and email).');
        }
    });
    
    
});
