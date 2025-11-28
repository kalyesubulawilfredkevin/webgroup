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
document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery-item img");


  galleryImages.forEach((img) => {
    img.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.05)"; 
      this.style.transition = "transform 0.3s ease"; 
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
document.addEventListener("DOMContentLoaded", function () {  
  document.querySelector(".btn-hero").addEventListener("click", function (e) {
    
    e.preventDefault();
    alert("🚀 Let's start your adventure! Contact us to plan your dream trip.");
    this.style.transform = "scale(0.95)";
    
    setTimeout(() => (this.style.transform = "scale(1)"), 200);
    
  });

  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const email = this.querySelector('input[type="email"]').value; 
    alert(`📧 Thanks! We'll send travel updates to ${email}`);
    this.reset();
  });
});
/// END .//
//// contact us ///
// // waits until the entire html loads before running the javascrip
document.addEventListener("DOMContentLoaded", function () {
  // Contact form submission
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;

    if (name && email) {
      alert(`✅ Thank you ${name}! We'll contact you at ${email} soon.`);
      this.reset();
    } else {
      alert("📝 Please fill in all required fields (name and email).");
    }
  });
});
