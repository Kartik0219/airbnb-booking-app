let editingBookingId = null; // Store the ID of the booking being edited

// Fetch and display all bookings
const loadBookings = async () => {
  try {
    const response = await fetch('/api/bookings');
    const data = await response.json();
    const tableBody = document.getElementById('data');
    tableBody.innerHTML = ''; // Clear previous data

    data.forEach(booking => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${booking.client_name}</td>
        <td>${booking.email}</td>
        <td>${new Date(booking.start_date).toLocaleDateString()}</td>
        <td>${new Date(booking.end_date).toLocaleDateString()}</td>
        <td>${booking.listing_id}</td>
        <td>${booking.phone}</td>
        <td>${booking.address}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editBooking('${booking._id}')">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteBooking('${booking._id}')">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Failed to load bookings:', error);
  }
};

// Handle form submission to add or update a booking
document.getElementById('bookingForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent page reload

  const data = {
    client_name: document.getElementById('client_name').value,
    email: document.getElementById('email').value,
    start_date: document.getElementById('start_date').value,
    end_date: document.getElementById('end_date').value,
    listing_id: document.getElementById('listing_id').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value
  };

  try {
    if (editingBookingId) {
      // Update booking (PUT request)
      await fetch(`/api/bookings/${editingBookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      editingBookingId = null; // Reset the editing ID
      document.getElementById('formTitle').textContent = 'Add a New Booking';
      document.getElementById('cancelEdit').classList.add('d-none'); // Hide cancel button
    } else {
      // Create new booking (POST request)
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    }

    event.target.reset(); // Clear form fields
    loadBookings(); // Reload bookings list
  } catch (error) {
    console.error('Error saving booking:', error);
  }
});

// Edit a booking by loading its data into the form
const editBooking = async (id) => {
  try {
    const response = await fetch(`/api/bookings/${id}`);
    const booking = await response.json();

    // Load booking data into the form
    document.getElementById('client_name').value = booking.client_name;
    document.getElementById('email').value = booking.email;
    document.getElementById('start_date').value = booking.start_date.split('T')[0];
    document.getElementById('end_date').value = booking.end_date.split('T')[0];
    document.getElementById('listing_id').value = booking.listing_id;
    document.getElementById('phone').value = booking.phone;
    document.getElementById('address').value = booking.address;

    // Update the form title and show cancel button
    document.getElementById('formTitle').textContent = 'Edit Booking';
    document.getElementById('cancelEdit').classList.remove('d-none');
    editingBookingId = id; // Store the booking ID being edited
  } catch (error) {
    console.error('Failed to load booking for editing:', error);
  }
};

// Cancel editing and reset the form
document.getElementById('cancelEdit').addEventListener('click', () => {
  editingBookingId = null;
  document.getElementById('bookingForm').reset();
  document.getElementById('formTitle').textContent = 'Add a New Booking';
  document.getElementById('cancelEdit').classList.add('d-none');
});

// Delete a booking
const deleteBooking = async (id) => {
  try {
    await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
    loadBookings(); // Reload bookings list
  } catch (error) {
    console.error('Failed to delete booking:', error);
  }
};

// Load bookings when the page loads
window.addEventListener('DOMContentLoaded', loadBookings);
