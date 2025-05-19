function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add sticky navigation functionality
window.addEventListener('scroll', function() {
  const desktopNav = document.querySelector("#desktop-nav");
  const hamburgerNav = document.querySelector("#hamburger-nav");
  
  if (window.scrollY > 50) {
    desktopNav.classList.add("sticky");
    hamburgerNav.classList.add("sticky");
  } else {
    desktopNav.classList.remove("sticky");
    hamburgerNav.classList.remove("sticky");
  }
});

// Typing animation
document.addEventListener('DOMContentLoaded', function() {
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["Web Development", "UI/UX Designing", "Programming", "Problem Solving"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Animate progress bars when they come into view
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  progressBars.forEach(bar => {
    observer.observe(bar);
  });
}

// Call the function when the page loads
window.addEventListener('load', animateProgressBars);

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send this data to a server
      // For now, we'll just show an alert
      alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
      
      // Reset the form
      contactForm.reset();
    });
  }
});

// Scroll to top button
window.addEventListener('scroll', function() {
  const scrollBtn = document.getElementById('scrollToTop');
  
  if (scrollBtn) {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.getElementById('scrollToTop');
  
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});