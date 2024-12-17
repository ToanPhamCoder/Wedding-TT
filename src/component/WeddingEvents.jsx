import React, { useState } from "react";
import { Calendar } from "@nextui-org/calendar";
import "react-calendar/dist/Calendar.css";
import { parseDate } from "@internationalized/date";
import ButtonCommon from "@/common/ButtonCommon";

const WeddingEvent = ({ title, time, location, image, id }) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  // Toggle the calendar modal open/close state
  const toggleCalendarModal = () => setCalendarOpen(!isCalendarOpen);

  // Open location in Google Maps
  const openGoogleMaps = () => {
      if (id === 1) {
      const mapUrl = "https://maps.app.goo.gl/2rRXoJnDeiZXFZ17A";
      window.open(mapUrl, "_blank");
    } else {
      const mapUrl = "https://maps.app.goo.gl/qw7eFSx6bBNC42UG6";
      window.open(mapUrl, "_blank");
    }
  };

  const convertToISODate = (dateString) => {
    console.log("match", dateString);

    // Match against "Ngày DD-MM-YYYY" or "Ngày DD/MM/YYYY"
    const match = dateString.match(/(\d{2})[-/](\d{2})[-/](\d{4})/);
    if (match) {
      const [_, day, month, year] = match;
      // Return in "YYYY-MM-DD" format
      console.log("match", year, month, <day></day>);
      const dateString = `${year}-${month}-${day}`;
      return parseDate(dateString);
    }

    return null; // Return null if the format doesn't match
  };

  return (
    <div className="bg-white shadow-lg rounded-md p-4 mb-6 flex items-center space-x-4">
      {/* Event Image */}
      <img
        src={image}
        alt={title}
        className="w-36 object-contain  rounded-md"
      />

      {/* Event Details */}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mb-2">
          {time.morning} <br />
          <span className="font-semibold block">{time.date}</span>
        </p>
        <p className="text-gray-500 mb-4">{location}</p>
        <div className="flex space-x-4">
          <ButtonCommon onClick={toggleCalendarModal}>Xem lịch</ButtonCommon>
          <ButtonCommon onClick={openGoogleMaps}>Xem bản đồ</ButtonCommon>
        </div>
      </div>

      {/* Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white w-[356px] rounded-lg shadow-lg p-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">LỊCH {title}</h2>
            <Calendar
              defaultValue={convertToISODate(time.date)}
              calendarWidth={300}
              color="danger"
            />
            <div className="flex justify-end mt-4 w-full">
              <ButtonCommon onClick={toggleCalendarModal}>Đóng</ButtonCommon>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const WeddingEvents = () => {
  const events = [
    {
      id: 1,
      title: "TIỆC CƯỚI NHÀ NỮ",
      time: {
        morning: "Chiều 17g00",
        date: "Ngày 28/12/2024",
      },
      location:
        "Ấp bình hoà tây 1, xã bình hoà tây, huyện mộc hoá. Tỉnh Long An",
      image:
        "https://res.cloudinary.com/dpohykmqq/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1734414158/VIEN7746_nnozk1.jpg",
    },
    {
      id: 2,
      title: "TIỆC CƯỚI NHÀ NAM",
      time: {
        morning: "Chiều 17:00",
        date: "Ngày 29-12-2024",
      },
      location: "Số nhà 233, ấp ông nhan tây, xã bình hiệp. thị xã kiến tường ",
      image:
        "https://res.cloudinary.com/dpohykmqq/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1734414137/VIEN8547_nwyf9b.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Sự Kiện Cưới</h1>
        <div>
          {events.map((event, index) => (
            <WeddingEvent
              key={index}
              title={event.title}
              time={event.time}
              location={event.location}
              image={event.image}
              id={event.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingEvents;
