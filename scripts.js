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
document.addEventListener('DOMContentLoaded', function() {
    // Example order data
    const orderData = {
        items: [
            { name: 'Hotel T-shirt', price: 490, quantity: 1, imgSrc: 'aa.jpg' },
            { name: 'Hotel T-shirt', price: 490, quantity: 1, imgSrc: 'aa.jpg' }
        ],
        subtotal: 980,
        tax: 0,
        shipping: 100,
        discount: 0,
        total: 1080
    };

    // Function to render order summary
    function renderOrderSummary(data) {
        const orderItemsContainer = document.getElementById('order-items');
        orderItemsContainer.innerHTML = ''; // Clear existing items

        data.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'order-item';
            itemElement.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.name}">
                <div>
                    <p>${item.name}</p>
                    <p>$${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            `;
            orderItemsContainer.appendChild(itemElement);
        });

        document.getElementById('subtotal').innerText = `$${data.subtotal}`;
        document.getElementById('tax').innerText = `$${data.tax}`;
        document.getElementById('shipping').innerText = `$${data.shipping}`;
        document.getElementById('discount').innerText = `$${data.discount}`;
        document.getElementById('total').innerText = `$${data.total}`;
    }

    // Render the order summary on page load
    renderOrderSummary(orderData);

    //  succesful payment Modal functionality
    const payButton = document.getElementById('pay-button');
    const modal = document.getElementById('payment-successful-modal');
    const closeModal = document.getElementById('close-modal');
    const backToHomeButton = document.getElementById('back-to-home');

    payButton.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    backToHomeButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

/*shopping modal js*/
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');
    const cartButtons = document.querySelectorAll('.cart-button');
    const bookmarkButtons = document.querySelectorAll('.bookmark-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            alert('Liked!');
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
        });
    });

    bookmarkButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Bookmarked!');
        });
    });
});
