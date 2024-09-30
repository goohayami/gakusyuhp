import Image from "next/image";
const Home = () => {
  const imagePath_1 = "/cul.jpg";
  return (
    <div>
      <div className=" rounded-full bg-gray-800 ">
        <h1 className=" text-white flex justify-center mt-4 mx-12 py-2">
          はじめに
        </h1>
      </div>
      <div className="px-16 pt-8 text-xl mt-0 mb-0">さぁ、10月ですね学習発表会の練習をがんばりましょう！</div>
      <div className="px-16 pt-8 text-2xl pt-1">
        <Image src={imagePath_1} width={480} height={300} alt={"楽譜"} />
       
      </div>
    
    </div>
  );
};

export default Home;
