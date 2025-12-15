function downloadImage() {
    const link = document.createElement("a");
    link.href = "adoption-form.jpg";
    link.download = "Pet-Adoption-Form.jpg";
    link.click();
}

function goHome() {
    window.location.href = "homepage.html";
}


function downloadAlert() {
    alert("Download successful!");
}



