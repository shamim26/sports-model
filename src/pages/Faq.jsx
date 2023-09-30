import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const items = [
    {
      title: "Money Market ",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    },
    { title: "Fixed income  (31 Mutual Funds)", content: "Content for Item 2" },
    { title: "Balance  (43 Mutual Funds)", content: "Content for Item 3" },
    { title: "Stocks  (43 Mutual Funds)", content: "Content for Item 3" },
  ];
  return (
    <div className="w-[95%] md:w-4/6 mx-auto mt-10 border border-[#E5E5E5] p-4">
      <h1 className="text-lg text-center md:text-3xl font-semibold pb-4">
        Frequently Asked Questions
      </h1>
      <div>
        {items.map((item, index) => (
          <div key={index} className="mb-2 border-b ">
            <div
              className="flex items-center justify-between py-4 cursor-pointer "
              onClick={() => handleAccordionClick(index)}
            >
              <div className="font-semibold">{item.title}</div>
              <div className="text-xs">
                {activeIndex === index ? (
                  <span>
                    <svg
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Down 2">
                        <path
                          id="Vector"
                          d="M0.881836 6.5L3.06597 4.29629C4.80778 2.53887 5.67868 1.66016 6.74017 1.52486C7.00025 1.49171 7.26342 1.49171 7.5235 1.52486C8.58499 1.66016 9.45589 2.53887 11.1977 4.29629L13.3818 6.5"
                          stroke="#0F0F0F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Down 2">
                        <path
                          id="Vector"
                          d="M13.3818 1.5L11.1977 3.70371C9.4559 5.46113 8.58499 6.33984 7.5235 6.47514C7.26343 6.50829 7.00025 6.50829 6.74017 6.47514C5.67868 6.33984 4.80778 5.46113 3.06597 3.70371L0.881836 1.5"
                          stroke="#0F0F0F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                  </span>
                )}
              </div>
            </div>
            {activeIndex === index && (
              <div className="bg-white py-4 ">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
