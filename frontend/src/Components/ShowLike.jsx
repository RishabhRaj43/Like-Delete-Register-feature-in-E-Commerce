import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ShowLike = () => {
  const [rest, setRest] = useState([]);

  useEffect(() => {
    const likes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/");
        setRest(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    };
    likes();
  }, [rest]);

  const handleClick = async (id, like) => {
    try {
      console.log({ id, like });

      const res = await axios.post("http://localhost:5000/api/", {
        _id: id,
        like: !like,
      });

      setRest((prev) => {
        return prev.map((ele) => {
          if (ele._id === id) {
            return { ...ele, like: !like };
          } else {
            return ele;
          }
        });
      });
      toast.success("Unliked!!");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="mt-5 grid grid-cols-3 gap-4">
      {/*
      <div className="grid grid-cols-3 gap-4">
      */}
      {rest.map(
        (ele) =>
          ele.like && (
            <div className="card bg-base-100 w-96 shadow-xl mb-4" key={ele._id}>
              <div className="card-body">
                <h2 className="card-title">{ele.name}</h2>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <button
                    onClick={() => handleClick(ele._id, ele.like)}
                    className={`p-2 rounded-full transition-colors duration-300 ${
                      ele.like
                        ? "bg-pink-500 text-white"
                        : "bg-white border-2 border-black"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-6 h-6 ${
                        ele.like ? "text-white" : "text-black"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ShowLike;
