// Function to open tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Remove the active class from all tab buttons
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add the active class to the button
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

// Initialize the first tab as active
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
    
    // Modal functionality
    const payButton = document.getElementById('pay-button');
    const modal = document.getElementById('payment-successful-modal');
    const closeModal = document.getElementById('close-modal');
    const backToHomeButton = document.getElementById('back-to-home');

    payButton.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    backToHomeButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
