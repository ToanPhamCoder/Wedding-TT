import React from "react";
import { useForm } from "react-hook-form";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Build Google Form URL
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdGacbzN5MtKjX4g05OCxw-JAYvFw6Kgx8c5JczUccx4YUq9Q/formResponse?&submit=Submit?usp=pp_url&entry.91355384=${encodeURIComponent(
      data.name
    )}&entry.87332576=${encodeURIComponent(
      data.attendance
    )}&entry.153554874=${encodeURIComponent(data.message)}`;

    // Open the prefilled Google Form in a new tab
    window.open(formUrl, "_blank");
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Tên người gửi */}
      <input
        type="text"
        placeholder="Nhập họ tên*"
        className="p-2 border rounded"
        {...register("name", { required: "Vui lòng nhập họ tên." })}
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      {/* Câu hỏi tham dự */}
      <select
        className="p-2 border rounded"
        {...register("attendance", { required: "Vui lòng chọn một lựa chọn." })}
      >
        <option value="" disabled>
          Bạn có thể tham dự không?
        </option>
        <option value="Có, tôi sẽ tới đó">Có, tôi sẽ tới đó</option>
        <option value="Rất tiếc, tôi không thể tham dự">
          Rất tiếc, tôi không thể tham dự
        </option>
      </select>
      {errors.attendance && (
        <p className="text-red-500 text-sm">{errors.attendance.message}</p>
      )}

      {/* Lời chúc */}
      <textarea
        placeholder="Nhập lời chúc của bạn*"
        className="p-2 border rounded"
        rows="4"
        {...register("message", { required: "Vui lòng nhập lời chúc." })}
      />
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message.message}</p>
      )}

      {/* Nút gửi */}
      <button
        type="submit"
        className="p-2 bg-[#dcbdc5] text-white rounded hover:bg-[#d85878] transition"
      >
        Gửi lời chúc →
      </button>
    </form>
  );
};

export default Modal;
