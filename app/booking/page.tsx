"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Standard',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Booking</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Check-In Date:</label>
          <input 
            type="date" 
            name="checkIn" 
            value={formData.checkIn} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Check-Out Date:</label>
          <input 
            type="date" 
            name="checkOut" 
            value={formData.checkOut} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Room Type:</label>
          <select 
            name="roomType" 
            value={formData.roomType} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
      <Link href="/" className="text-blue-500 hover:underline mt-4">Go Back Home</Link>
    </div>
  );
};

export default Booking;
