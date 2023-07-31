import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black w-screen h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-3xl font-bold xl:text-4xl">
          Hamburguesa deliciosa y papas fritas
        </h1>
        <p className="text-white xl:text-xl">
          Nuestras hamburguesas están hechas con carne 100% de res, y nuestras
          papas fritas son frescas y crujientes. También tenemos una variedad de
          otros platos deliciosos para elegir, como pollo frito, ensaladas y
          postres.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Ordena ahora
        </button>
      </div>
      <div className="flex-1 w-screen  relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
