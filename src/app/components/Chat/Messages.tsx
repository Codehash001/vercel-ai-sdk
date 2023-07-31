import { Message } from "ai";
import { useRef, useEffect } from "react";

export default function Messages({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToContent = () => {
    if (messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Use useEffect hook to scroll whenever new messages are received
  useEffect(() => {
    scrollToContent();
  }, [messages]);

  return (
    <div className="p-6 rounded-lg overflow-y-scroll flex-grow flex flex-col justify-end">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${
            msg.role === "assistant" ? "text-gray-900 bg-blue-200" : "text-blue-500"
          } my-2 p-3 rounded shadow-md transition-shadow duration-200 flex slide-in-bottom`}
        >
          <div className={`rounded-tl-lg p-2 border-r flex items-center w-[5%] h-auto`}>
            <img
              src={msg.role === "assistant" ? "/bot-image.png" : "/usericon.png"}
              className="flex-shrink-0" // Add the "flex-shrink-0" class here
            />
          </div>
          <div className="ml-2 flex items-center w-[95%]">
            <div
              dangerouslySetInnerHTML={{
                __html: msg.content.replaceAll("\n", "<br/>"),
              }}
            />
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
