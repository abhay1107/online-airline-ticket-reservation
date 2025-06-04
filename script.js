document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (from === to) {
    alert("Departure and destination cannot be the same.");
    return;
  }

  const confirmation = document.getElementById("confirmation");
  confirmation.classList.remove("hidden");
  confirmation.innerHTML = `
    <h3>✅ Booking Confirmed!</h3>
    <p><strong>Passenger:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Route:</strong> ${from} ➜ ${to}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
  `;

  this.reset();
});
