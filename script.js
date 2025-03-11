document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let classApplied = document.getElementById("class").value;
    let parentName = document.getElementById("parentName").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;
    let agreement = document.getElementById("agreement").checked;

    if (studentName && dob && gender && classApplied && parentName && contact && address && agreement) {
        alert("Application Submitted Successfully!");
        document.getElementById("admissionForm").reset();
    } else {
        alert("Please fill all required fields.");
    }
});
