import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Like = () => {
  const [rest, setRest] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const likes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/");
        setRest(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    };
    likes();
  }, [rest]);

  const handleClick = async (id, like) => {
    try {
      // console.log({ id, like });

      const res = await axios.post("http://localhost:5000/api/", {
        _id: id,
        like: !like,
      });
      setRest((prev) =>
        prev.map((ele) => (ele._id === id ? { ...ele, like: !like } : ele))
      );
      !like ? toast.success("liked") : toast.success("Unliked");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const sendlike = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/new", {
        name: value,
        like: false,
      });

      setValue("");
      toast.success("Registered");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const deleteData = async (id) => {
    try {
      console.log(id);

      const res = await axios.delete(`http://localhost:5000/api/delete/${id}`);

      setRest((prev) => prev.filter((ele) => ele._id !== id));
      toast.success("deleted");
    } catch (error) {
      console.log(error.message);

      toast.error(error.message);
    }
  };

  return (
    <div className="mt-5 ml-2">
      <div className="flex gap-4 mb-5">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-accent" onClick={sendlike}>
          Register
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {rest.map((ele) => (
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
              <div className="card-actions justify-end">
                <button
                  onClick={() => deleteData(ele._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
