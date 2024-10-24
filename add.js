// public/add.js
document.getElementById('addForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
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
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error('Failed to add booking');
    window.location.href = '/';  // Redirect to homepage
  } catch (error) {
    console.error(error);
  }
});
