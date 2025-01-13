// Age Verification
function verifyAge(isOfAge) {
    if (isOfAge) {
        document.getElementById("age-verification").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        alert("Sorry, you must be 21+ to access this site.");
        window.location.href = "https://google.com"; // Redirect for underage users
    }
}

// Box Selection
function selectBox(boxName) {
    alert(`You selected the ${boxName}.`);
    window.location.href = "customize.html"; // Redirect to customization page
}

// Handle Customization Submission
function handleCustomization(event) {
    event.preventDefault();

    const theme = document.getElementById("theme").value;
    const strain = document.getElementById("strain").value;
    const extras = [...document.querySelectorAll('input[name="extras"]:checked')].map(extra => extra.value);

    alert(`Subscription Complete!\nTheme: ${theme}\nStrain: ${strain}\nExtras: ${extras.join(", ") || "None"}`);
}
