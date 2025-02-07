import { useState } from "react";

const GuidePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profilePicture: "",
    expertise: "",
    languages: "",
    experienceYears: "",
    preferredRegions: "",
    perHour: "",
    perTrip: "",
    rating: "",
    isAvailable: true,
    availabilitySchedule: "",
    linkedIn: "",
    website: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Guide Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 rounded border" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 rounded  border " required />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 rounded  border " required />
        <input type="url" name="profilePicture" placeholder="Profile Picture URL" onChange={handleChange} className="w-full p-2 rounded  border " />
        <input type="text" name="expertise" placeholder="Expertise (comma-separated)" onChange={handleChange} className="w-full p-2 rounded  border" required />
        <input type="text" name="languages" placeholder="Languages (comma-separated)" onChange={handleChange} className="w-full p-2 rounded  border " />
        <input type="number" name="experienceYears" placeholder="Years of Experience" onChange={handleChange} className="w-full p-2 rounded  border " />
        <input type="text" name="preferredRegions" placeholder="Preferred Regions (comma-separated)" onChange={handleChange} className="w-full p-2 rounded border" />
        <input type="number" name="perHour" placeholder="Price per Hour" onChange={handleChange} className="w-full p-2 rounded  border " />
        <input type="number" name="perTrip" placeholder="Price per Trip" onChange={handleChange} className="w-full p-2 rounded  border " />
        <input type="number" name="rating" placeholder="Rating (0-5)" onChange={handleChange} className="w-full p-2 rounded  border " min="0" max="5" />
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="isAvailable" onChange={handleChange} checked={formData.isAvailable} className="w-5 h-5" />
          <span>Available</span>
        </label>
        <input type="text" name="availabilitySchedule" placeholder="Availability Schedule" onChange={handleChange} className="w-full p-2 rounded  border " />
        <input type="url" name="linkedIn" placeholder="LinkedIn Profile" onChange={handleChange} className="w-full p-2 rounded  border " />
        <input type="url" name="website" placeholder="Website" onChange={handleChange} className="w-full p-2 rounded  border " />
        <button type="submit" className="w-full  p-2 rounded btn btn-primary ">Register</button>
      </form>
    </div>
  );
};

export default GuidePage;
