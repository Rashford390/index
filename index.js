// Initialize EmailJS (use the correct public key from your EmailJS dashboard)
(function() {
    emailjs.init("Sg-hQFVrhysdruzvl"); // Replace with your actual Public Key
})();

// Handle Booking Form
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let parms = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            service: document.getElementById("service").value,
            destination: document.getElementById("destination").value,
            travel_date: document.getElementById("date").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_nrmd3lg", "template_44abf0n", parms)
            .then(() => {
                alert("✅ Booking request sent successfully!");
                bookingForm.reset();
            })
            .catch(err => {
                console.error("Booking email failed:", err);
                alert("❌ Something went wrong while sending your booking request.");
            });
    });
}

// Handle Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let parms = {
            name: document.getElementById("contactName").value,
            email: document.getElementById("contactEmail").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("contactMessage").value
        };

        emailjs.send("service_nrmd3lg", "template_kfmvj07", parms)
            .then(() => {
                alert("✅ Message sent successfully!");
                contactForm.reset();
            })
            .catch(err => {
                console.error("Contact email failed:", err);
                alert("❌ Something went wrong while sending your message.");
            });
    });
}
