import React from "react";

type Props = {};

function Categories({}: Props) {
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-black text-[1rem] lg:text-xl leading-normal font-medium">
          Categories
        </h3>
        <p className="text-[#E74C1B] text-[1rem] lg:text-xl leading-normal font-medium cursor-pointer">
          See all
        </p>
      </div>

      <div className="flex overflow-x-auto gap-4">
        <div className="w-[145px] h-[71px] lg:w-[250px] flex-shrink-0 bg-[#EAF9E6] relative">
          <p className="absolute left-4 top-3 bg-transparent">Salad</p>{" "}
          <img
            className="bg-trransparent bg-[#EAF9E6] object-fill"
            src="/images/PIC.png"
          ></img>
        </div>
        <div className="w-[145px] h-[71px] lg:w-[250px] flex-shrink-0 bg-[#FFE8EE] relative">
          <p className="absolute left-4 top-3 bg-transparent">Steak</p>{" "}
          <img
            className="bg-trransparent bg-[#FFE8EE]"
            src="/images/steak.png"
          ></img>
        </div>
        <div className="w-[145px] h-[71px] lg:w-[250px] flex-shrink-0 bg-[#FFEEE8] relative">
          <p className="absolute left-4 top-2 bg-transparent">Chicken</p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Categories;
