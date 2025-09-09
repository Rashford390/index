// Send Booking Form Email
function sendBookingMail() {
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
            alert("Booking request sent successfully! ✅");
            document.getElementById("bookingForm").reset();
        })
        .catch(err => {
            console.error("Booking email failed:", err);
            alert("❌ Something went wrong while sending your booking request.");
        });
}

// Send Contact Form Email
function sendContactMail() {
    let parms = {
        name: document.getElementById("contactName").value,
        email: document.getElementById("contactEmail").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("contactMessage").value
    };

    emailjs.send("service_nrmd3lg", "template_44abf0n", parms)
        .then(() => {
            alert("Message sent successfully! ✅");
            document.getElementById("contactForm").reset();
        })
        .catch(err => {
            console.error("Contact email failed:", err);
            alert("❌ Something went wrong while sending your message.");
        });
}

  