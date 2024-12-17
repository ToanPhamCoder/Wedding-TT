import React, { useEffect, useState } from "react";

import CardStory from "@/common/CardStory";
import MotionCardStory from "@/common/CardStory";
const LoveStory = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log("scrollTop1", scrollTop);

      // Nếu cuộn xuống, hiển thị button
      if (scrollTop > 1700) {
        setIsVisible1(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible1(false);
      }

      // Show the second component at 1800px scroll
      if (scrollTop > 2500) {
        setIsVisible2(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible2(false);
      }

      // Show the third component at 1900px scroll
      if (scrollTop > 2900) {
        setIsVisible3(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible3(false);
      }

      // Show the fourth component at 2000px scroll
      if (scrollTop > 3300) {
        setIsVisible4(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible4(false);
      }
      if (scrollTop > 3700) {
        setIsVisible5(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible5(false);
      }

      // Cập nhật vị trí cuộn trước đó
    };

    // Lắng nghe sự kiện cuộn
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện cuộn khi component bị unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Theo dõi lastScrollTop

  // Cấu hình hiệu ứng cho hai nút
  const buttonVariants = {
    hiddenLeft: { opacity: 0, x: -1000 }, // Xuất hiện từ ngoài màn hình
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }, // Hiện ở vị trí bình thường
  };
  return (
    <div className="container mx-auto py-10 font-sans overflow-hidden">
      <h2 className="text-4xl text-center font-bold mb-6 text-gray-700">
        Câu Chuyện Cổ Tích của Tụi Mình
      </h2>
      <p className="text-center text-lg text-gray-500 mb-8">
        Mỗi giây phút bên nhau là một món quà.
      </p>
      <CardStory
        initial="hiddenLeft"
        animate={isVisible1 ? "visible" : "hiddenLeft"}
        variants={buttonVariants}
        transition={{ duration: isVisible1 ? 0.8 : 0.2 }}
        date={"Ngày 03/08/2018"}
        title="Tin nhắn đầu tiên của tụi mình"
        content="Hai cô cậu cấp 2 >< , còn thích lướt Facebook , Mình biết anh qua 1 bài rap khá ấn tượng trên Face  . Đến 1 hôm ảnh  đăng Like IB  . Thế là đã có Tin nhắn nàyyy . Đúng là con ních quỹ , 2 đứa đã quen nhau trong hôm đó  và đến nay đã là 7 năm rồi ^^  ."
        type="left"
        image={
          "https://res.cloudinary.com/dpohykmqq/image/upload/v1734409357/a%CC%89nh_tn_%C4%91a%CC%82%CC%80u_tie%CC%82n_rehx9h.jpg"
        }
      />

      {/* Card 2 */}
      <CardStory
        initial="hiddenRight"
        animate={isVisible2 ? "visible" : "hiddenRight"}
        variants={buttonVariants}
        transition={{ duration: isVisible2 ? 0.8 : 0.2 }}
        date={""}
        title="Tấm Hình & Đi Chơi Xa  Đầu Tiên"
        content=""
        type="right"
        image={
          "https://res.cloudinary.com/dpohykmqq/image/upload/v1734409354/A%CC%89nh_%C4%91a%CC%82%CC%80u_tie%CC%82n_%C4%91i_cho%CC%9Bi_xa_belm0q.jpg"
        }
      />

      {/* Card 3 */}
      <CardStory
        initial="hiddenLeft"
        animate={isVisible3 ? "visible" : "hiddenLeft"}
        variants={buttonVariants}
        transition={{ duration: isVisible3 ? 0.8 : 0.2 }}
        date={""}
        title="Và tụi mình ở hiện tại"
        content=""
        type="left-middle"
        image={
          "https://res.cloudinary.com/dpohykmqq/image/upload/h_1080/c_fit/v1734443910/VIEN9145-min_ebg8lh.jpg"
        }
      />

      {/* Card 4 */}
      <CardStory
        initial="hiddenRight"
        animate={isVisible4 ? "visible" : "hiddenRight"}
        variants={buttonVariants}
        transition={{ duration: isVisible4 ? 0.8 : 0.2 }}
        date={"Ngày 09/12/2024"}
        title="Màn cầu hôn bất ngờ "
        content="Ngày tụi mình lên Đà Lạt đển chụp hình cưới . Bước vào quán thảo thấy  bàn cầu hôn , bàn sinh nhật với không khí giáng sinh siêu yêu luôn . Anh thì cứ luôn miệng xin lỗi vì không thực hiện cho mình .Hôm đó mình bệnh và khá mệt . Nên không có suy nghĩ gì nhiều. Một lúc sau , mình nghe tiếng nhạc quen thuộc “ Ngày đầu tiên “ .. Mình có nhìn sang bàn bên cạnh , cứ nghĩ là 2 anh chị kế bên thôi . Nhưng thấy anh bước ra và ôm theo 1 boá hoa ….và thế cô gái nhỏ bé lại phải khóc sướt mướt với câu nói “ Thảo , đồng ý lấy anh nha “....Và mình là cô gái hạnh phúc nhất  ngày hôm đó ^^"
        type="right"
        image={
          "https://res.cloudinary.com/dpohykmqq/image/upload/v1734450307/z6140366065721_cbf49df049d94db75eb27fce0be59e92_bkkuwq.jpg"
        }
        titleSmall={
          "Thảo tin rằng, mọi cô gái đều xứng đáng có một lời tỏ tình , một lời cầu hôn ngọt ngào, để ghi dấu kỷ niệm đẹp nhất đời mình. 💖"
        }
      />
      <CardStory
        initial="hiddenLeft"
        animate={isVisible5 ? "visible" : "hiddenLeft"}
        variants={buttonVariants}
        transition={{ duration: isVisible5 ? 0.8 : 0.2 }}
        date={"Ngày 10/11/2024"}
        title="NGÀY ĐÍNH HÔN"
        content=""
        type="left-middle"
        image={
          "https://res.cloudinary.com/dpohykmqq/image/upload/v1734409359/Nga%CC%80y_%C4%91i%CC%81nh_ho%CC%82n_owhixb.jpg"
        }
      />
    </div>
  );
};

export default LoveStory;
