import  { useState } from "react";
import star from "../../app/img/star.svg";

const SendingData = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    const botToken = "6812713361:AAGHOWUyarK7WpqjLh_cZUJwlGtaMkkldjM";
    const chatId = "-1002038726284";

    const messageText = `Новая подписка! Имейл: ${email}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const params = {
      chat_id: chatId,
      text: messageText,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (response.ok) {
        console.log("Сообщение успешно отправлено!");
      } else {
        console.error(
          `Ошибка при отправке сообщения: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
    setEmail("");
  };
  return (
    <section className="mt-[120px]">
      <section className="flex justify-center items-center flex-col">
        <section className="flex pt-[80px] relative">
          <div>
            <h2 className="font-bold text-[32px] leading-[62%] capitalize text-center text-[#fff]">
              subscribe to our daily tips
            </h2>
            <h4 className="mt-[20px] font-normal text-[10px] leading-[163%] text-center  text-[#d4d4d4]">
              Hackathon early adopters innovator iPad facebook infographic pitch{" "}
              <br />
              growth hacking. Pivot metrics lean startup.
            </h4>
          </div>
          <div className="absolute -right-[140px] top-8">
            <img src={star} alt="" />
          </div>
        </section>
        <form className="mt-[30px]" onSubmit={sendMessage}>
          <input
            type="email"
            placeholder={!email ? "enter email address" : null}
            value={email}
            onChange={handleInputChange}
            className="border-[0.68px] border-[solid] border-[#9dad9a] bg-inherit rounded-[2px] w-[266px] h-[36px] font-normal text-[10px] leading-[187%] capitalize text-[#878585]"
          />
          <button
            type="submit"
            className="border-[0.68px] ml-[10px] border-[solid] border-[#5aba4a] rounded-[2px] w-[99px] h-[36px] font-medium text-[13px] leading-[150%] capitalize text-center text-[#edeef1]"
          >
            subscribe
          </button>
        </form>
      </section>
    </section>
  );
};

export default SendingData;
