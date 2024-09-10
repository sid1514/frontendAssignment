import React, { useRef, useState } from "react";

const Home = () => {
  const [ClickedButton, setClickedButton] = useState("aboutme");
  const fileInputRef = useRef(null);
  const sliderRef = useRef(null);
  const [ImageList, setImageList] = useState([
    { img: "picture.png" },
    { img: "picture.png" },
    { img: "picture.png" },
    { img: "picture.png" },
    { img: "picture.png" },
    { img: "picture.png" },
  ]);
  const handleButtonAction = (button) => {
    setClickedButton(button);
  };
  const handleAddImage = () => {
    fileInputRef.current.click();
  };
  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 500; // Adjust the value as needed
  };

  // Function to slide the images right
  const slideRight = () => {
    sliderRef.current.scrollLeft += 500; // Adjust the value as needed
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setImageList((prevList) => [...prevList, { img: imageUrl }]);
    }
  };
  return (
    <div className="bg-gradient-to-t from-[#373E44] to-[#191B1F] flex justify-center h-dvh w-full">
      <div className="py-20 pl-20 w-11/12 flex space-x-8 justify-center h-[689px]">
        <div className="w-[836px] h-[580px] bg-[#616161D1] rounded-2xl border"></div>
        <div className="w-[720px] ">
          <div className="shadow-lg w-[90%] h-[280px] overflow-y-auto bg-[#363C43] rounded-2xl flex shadow-neutral-900">
            <div className="p-2 w-16">
              <div className="h-1/2">
                <img src="qmark.png" alt="ask" />
              </div>
              <div className="h-1/2">
                <img src="menu.png" alt="ask" className="" />
              </div>
            </div>
            <div className="w-full ">
              <div className="bg-neutral-950 rounded-2xl mt-4 w-11/12 h-10 text-white py-1 px-1">
                <button
                  className={`h-8 rounded-xl w-1/3 ${
                    ClickedButton === "aboutme"
                      ? "bg-neutral-800 shadow-2xl shadow-black drop-shadow-2xl "
                      : null
                  }`}
                  onClick={() => handleButtonAction("aboutme")}
                >
                  About Me
                </button>
                <button
                  className={`h-8 rounded-xl w-1/3 ${
                    ClickedButton === "Experience"
                      ? "bg-neutral-800 shadow-lg drop-shadow-2xl"
                      : null
                  }`}
                  onClick={() => handleButtonAction("Experience")}
                >
                  Experience
                </button>
                <button
                  className={`h-8 rounded-xl w-1/3 ${
                    ClickedButton === "Recommended"
                      ? "bg-neutral-800 shadow-lg drop-shadow-2xl"
                      : null
                  }`}
                  onClick={() => handleButtonAction("Recommended")}
                >
                  Recommended
                </button>
              </div>
              <div className="mt-6 mx-2 w-11/12">
                <p className="text-neutral-400 h-36 overflow-y-scroll">
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now. I was
                  born and raised in Albany, NY& have been living in Santa Carla
                  for the past 10 years my wife Tiffany and my 4 year old twin
                  daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a... Hello! I’m Dave, your sales rep here from
                  Salesforce. I’ve been working at this awesome company for 3
                  years now. I was born and raised in Albany, NY& have been
                  living in Santa Carla for the past 10 years my wife Tiffany
                  and my 4 year old twin daughters- Emma and Ella. Both of them
                  are just starting school, so my calender is usually blocked
                  between 9-10 AM. This is a...
                </p>
              </div>
            </div>
          </div>
          <div className="w-[80%] h-[4px] bg-gradient-to-t from-[#2828281A] to-[#F8F8F81A] my-2 ml-6 "></div>
          <div className="shadow-lg w-[90%] h-[280px] overflow-y-auto bg-[#363C43] rounded-2xl flex shadow-neutral-900">
            <div className="p-2 w-10">
              <div className="h-1/2">
                <img src="qmark.png" alt="ask" />
              </div>
              <div className="h-1/2">
                <img src="menu.png" alt="ask" className="" />
              </div>
            </div>
            <div className="w-full">
              <div className="flex p-2 w-full">
                <div className="w-1/2">
                  <button className="rounded-xl text-white font-bold px-2 h-10 bg-black w-24">
                    Gallery
                  </button>
                </div>
                <div className="mr-4">
                  <button
                    className="h-10 px-4 rounded-3xl shadow-[0px_1px_0px_1px_black,0px_-2px_0px_1px_#787878] text-white text-sm py-2 drop-shadow-2xl"
                    onClick={handleAddImage}
                  >
                    + ADD IMAGE
                  </button>
                  <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
                <div className="space-x-4">
                  <button
                    className="bg-neutral-900 rounded-full p-2 w-10 h-10 shadow-lg drop-shadow-xl shadow-neutral-900"
                    onClick={slideLeft}
                  >
                    <img src="left.png" alt="slide left" />
                  </button>
                  <button
                    className="bg-neutral-900 rounded-full p-2 w-10 h-10 shadow-lg drop-shadow-xl shadow-neutral-900"
                    onClick={slideRight}
                  >
                    <img src="right.png" alt="slide right" />
                  </button>
                </div>
              </div>
              <div
                className="flex w-[95%] overflow-x-hidden"
                ref={sliderRef}
                style={{ scrollBehavior: "smooth" }}
              >
                {ImageList.map((i) => (
                  <img
                    src={i.img}
                    alt="img"
                    className="w-40 p-2 h-40 shadow-lg "
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-[80%] h-[4px] bg-gradient-to-t from-[#2828281A] to-[#F8F8F81A] my-4 ml-6 shadow-lg shadow-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
