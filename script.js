document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate name
    if (name.trim() === "") {
        alert("Name is required.");
        return;
    }

    // Validate email (simple regex for example)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate subject
    if (subject.trim() === "") {
        alert("Subject is required.");
        return;
    }

    // Validate message
    if (message.trim() === "") {
        alert("Message cannot be empty.");
        return;
    }

    // If everything is valid, submit the form
    alert("Form submitted successfully!");
    // You can also clear the form fields if needed
    document.getElementById("contactForm").reset();
});
