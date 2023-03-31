import React from "react";
import { FiLayers, FiUploadCloud } from "react-icons/fi";
import { FaDollarSign, FaLightbulb } from "react-icons/fa";
import { categories } from "../data/products";
import { useState } from "react";
import { useRef } from "react";

const Form = () => {
  const [image, setImage] = useState("");
  const imageInput = useRef(null);

  return (
    <div className="min-h-screen flex-center-center flex-col pt-14">
      <h1 className="text-2xl my-4 font-bold">Add New Product</h1>
      <form>
        <div className="max-w-[400px] w-[95%] p-3 bg-white rounded-lg dark:bg-[#111827] form">
          <div className="relative h-8 mb-4">
            <FiLayers className="text-slate-400 absolute top-1/2 -translate-y-1/2 ml-2" />
            <input
              type="text"
              className="bg-transparent placeholder-slate-400 text-left-slate-200 outline-none border-b border-slate-300  w-full h-full px-8"
              placeholder="Enter title here.."
            />
          </div>

          <select className="bg-inherit text-slate-400 text-left-slate-200 outline-none border border-slate-300 w-full rounded-lg p-1 capitalize">
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="file"
            hidden
            ref={imageInput}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div
            className="mt-6 w-full text-slate-400  h-[35vh] flex-center-center flex-col rounded-lg border-2 border-dotted border-slate-300 sm:cursor-pointer"
            onClick={() => imageInput.current.click()}
          >
            {image ? (
              <img src={URL.createObjectURL(image)} alt="" className="w-24" />
            ) : (
              <div>
                {" "}
                <FiUploadCloud className="text-4xl mx-auto" />
                <h1 className="mt-3">click here to upload</h1>
              </div>
            )}
          </div>
          <div className="flex-align-center gap-x-4 mt-6">
            <div className="relative h-8 mb-4">
              <FaLightbulb className="text-slate-400 absolute top-1/2 -translate-y-1/2 ml-2" />
              <input
                type="text"
                className="bg-transparent placeholder-slate-400 text-left-slate-200 outline-none border-b border-slate-300 w-full px-8 h-full"
                placeholder="Calories."
              />
            </div>
            <div className="relative h-8 mb-4">
              <FaDollarSign className="text-slate-400 absolute top-1/2 -translate-y-1/2 ml-2" />
              <input
                type="text"
                className="bg-transparent placeholder-slate-400 text-left-slate-200 outline-none border-b border-slate-300 w-full px-8 h-full"
                placeholder="Price"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 mr-4">
          <button className="py-1 px-5 rounded bg-green-500 text-white hover:bg-green-600 transition-a">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
