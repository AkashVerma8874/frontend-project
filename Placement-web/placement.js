// Apply Job Function
function applyJob(position, company) {
    alert(`You have applied for the ${position} position at ${company}!`);
}

// Smooth Scrolling for Navigation
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        let targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Form Validation
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name.trim() === "" || email.trim() === "") {
        alert("Please fill in all fields.");
    } else {
        alert(`Thank you, ${name}! We will contact you soon.`);
        this.reset();
    }
});
