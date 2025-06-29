import { useState } from "react";

export default function FoundReportForm() {
  const [formData, setFormData] = useState({
    itemName: "",
    dateFound: "",
    timeFound: "",
    category: "",
    brand: "",
    primaryColor: "",
    secondaryColor: "",
    location: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image. It is required for Found Reports.");
      return;
    }

    // You can now send `formData` and `image` to your backend here
    console.log("Found Report Submitted:", formData);
    console.log("Image:", image);
    alert("Found report submitted!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-4">Submit Found Property</h2>
      <p className="text-center text-gray-600 mb-6">
        Please provide the following details about the item you found.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          placeholder="What was Found"
          required
          className="w-full border p-2 rounded"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="date"
            name="dateFound"
            value={formData.dateFound}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="time"
            name="timeFound"
            value={formData.timeFound}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="primaryColor"
            value={formData.primaryColor}
            onChange={handleChange}
            placeholder="Primary Color"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="secondaryColor"
            value={formData.secondaryColor}
            onChange={handleChange}
            placeholder="Secondary Color"
            className="w-full border p-2 rounded"
          />
        </div>

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Found At Location"
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description (optional)"
          className="w-full border p-2 rounded"
          rows="4"
        />

        {/* Compulsory Image Upload */}
        <div>
          <label className="block font-medium mb-1 text-red-600">Upload Image <span className="text-sm text-gray-500">(required)</span></label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
            required
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mt-4 h-48 object-cover rounded shadow"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
        >
          Submit Found Report
        </button>
      </form>
    </div>
  );
}
