document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value;
    let aadhaar = document.getElementById("aadhaar").value.trim();
    let parentPhone = document.getElementById("parentPhone").value.trim();
    let fee = document.getElementById("fee").value.trim();

    if (name === "" || dob === "" || aadhaar === "" || parentPhone === "" || fee === "") {
        alert("All fields are required!");
        return;
    }

    if (!/^\d{12}$/.test(aadhaar)) {
        alert("Enter a valid 12-digit Aadhaar number.");
        return;
    }

    if (!/^\d{10}$/.test(parentPhone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    alert("Admission form submitted successfully!");
});
