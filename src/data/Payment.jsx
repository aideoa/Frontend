import React, { useState } from 'react';

function Payment() {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    phone: '',
    amount: '',
    productinfo: 'Product Name'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual PayU payment link
    const paymentLink = 'https://payu.in/pay/772D6562666EF8254F28F4D297C8B6CF';

    // Redirect to the PayU payment link
    window.location.href = paymentLink;
  };

  return (
    <div className="App">
      <h2>Pay with PayU</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
