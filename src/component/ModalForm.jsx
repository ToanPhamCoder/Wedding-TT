import React, { useState } from "react";

const ModalForm = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState(""); // Câu hỏi về tham dự
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build the Google Form prefilled URL with the name, attendance, and message
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdGacbzN5MtKjX4g05OCxw-JAYvFw6Kgx8c5JczUccx4YUq9Q/formResponse?&submit=Submit?usp=pp_url&entry.91355384=${encodeURIComponent(
      name
    )}&entry.87332576=${encodeURIComponent(
      attendance
    )}&entry.153554874=${encodeURIComponent(message)}`;

    // Mở URL Google Form đã điền sẵn
    window.open(formUrl, "_blank");

    // Đóng modal
  };

  return (
    <div className=" flex items-center justify-center mt-4">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        {/* Tên người gửi */}
        <input
          type="text"
          placeholder="Nhập họ tên*"
          className="p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Câu hỏi tham dự */}
        <select
          className="p-2 border rounded"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          required
        >
          <option value="" disabled>
            Bạn có thể tham dự không?
          </option>
          <option value="Có, tôi sẽ tới đó">Có, tôi sẽ tới đó</option>
          <option value="Rất tiếc, tôi không thể tham dự">
            Rất tiếc, tôi không thể tham dự
          </option>
        </select>

        {/* Lời chúc */}
        <textarea
          placeholder="Nhập lời chúc của bạn*"
          className="p-2 border rounded"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/* Nút gửi */}
        <button
          type="submit"
          className="p-2 bg-[#dcbdc5] text-white rounded hover:bg-[#d85878] transition"
        >
          Gửi lời chúc →
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
