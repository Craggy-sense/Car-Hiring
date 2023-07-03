function calculatePrice() {
  var carType = document.getElementById('car-type').value;
  var startDate = document.getElementById('start-date').value;
  var endDate = document.getElementById('end-date').value;

  // Perform price calculation based on the selected car type, start date, and end date
  // Update the car details and total price on the page
  var carDetails = document.getElementById('car-details');
  carDetails.innerHTML = "Car Type: Car " + carType + "<br>" +
                          "Start Date: " + startDate + "<br>" +
                          "End Date: " + endDate;

  var totalPrice = document.getElementById('total-price');
  var price = calculateTotalPrice(carType, startDate, endDate); // Replace this with your actual price calculation logic
  totalPrice.textContent = "Total Price: $" + price.toFixed(2);
  document.getElementById('booking-details').style.display = 'block'; // Show the booking details
}

function calculateTotalPrice(carType, startDate, endDate) {
  // Replace this with your actual price calculation logic
  // Calculate the total price based on the selected car type, start date, and end date
  // Return the calculated price
  // Example:
  var pricePerDay = 50; // Price per day for the car
  var days = Math.floor((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)); // Calculate the number of days
  var totalPrice = pricePerDay * days;

  return totalPrice;
}
// Array of car images
var carImages = [
  "noah.jpeg",
  "mazda_cx5.jpeg",
  "nissan-note.jpg",
  // Add more image filenames as needed
];

// Function to change the service image randomly
function changeServiceImage() {
  var randomIndex = Math.floor(Math.random() * carImages.length);
  var serviceImage = document.getElementById("service-image");
  serviceImage.src = carImages[randomIndex];
}

// Change the service image every 3 seconds
setInterval(changeServiceImage, 3000);

