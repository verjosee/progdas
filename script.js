// Smooth scrolling for navigation
const learnBtn = document.querySelector(".btn[href='#testimoni']");
if (learnBtn) {
    learnBtn.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector("#testimoni");
        if (target) {
            target.scrollIntoView({ 
                behavior: "smooth",
                block: "start" // Explicitly define scroll position
            });
        }
    });
}

// Form handling
const form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        
        // Add form validation before submission
        if (validateForm(form)) {
            // Simulate form submission
            alert("Pesan berhasil terkirim");
            form.reset();
        }
    });
}

// Form validation function
function validateForm(form) {
    const requiredFields = form.querySelectorAll("[required]");
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = "red";
        } else {
            field.style.borderColor = "";
        }
    });
    
    if (!isValid) {
        alert("Harap isi semua field yang wajib diisi");
    }
    
    return isValid;
}

// Scroll-to-top button with debouncing
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Throttle scroll event for better performance
let scrollTimeout;
window.addEventListener("scroll", () => {
    // Clear the timeout if it exists
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    // Set a new timeout
    scrollTimeout = setTimeout(() => {
        if (document.documentElement.scrollTop > 200) {
            scrollTopBtn.style.display = "block";
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.style.display = "none";
            scrollTopBtn.classList.remove("visible");
        }
    }, 10); // 10ms delay
});

// Scroll to top with smooth behavior
if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        
        // Optional: Hide button immediately when clicked
        setTimeout(() => {
            scrollTopBtn.style.display = "none";
            scrollTopBtn.classList.remove("visible");
        }, 300);
    });
}

// Additional: Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
