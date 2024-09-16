"use client";
import Image from "next/image";

const page = () => {
  const imagePath_1 = "/kenban_1.jpg";
  const imagePath_2 = "/kenban_2.jpg";
  return (
    <div>
      <h1 className="rounded-full bg-gray-800 text-white flex justify-center my-4 py-2 ">
        コナンメインテーマ　けんばんがくふ
      </h1>

      <Image src={imagePath_1} width={1000} height={200} alt={"ga"} />
      <Image src={imagePath_2} width={1000} height={200} alt={"ga"} />
    </div>
  );
};

export default page;
