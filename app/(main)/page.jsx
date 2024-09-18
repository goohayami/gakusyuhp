import Image from "next/image";
const Home = () => {
  const imagePath_1 = "/kuteku.jpg";
  return (
    <div>
      <div className=" rounded-full bg-gray-800 ">
        <h1 className=" text-white flex justify-center mt-4 mx-12 py-2">
          はじめに
        </h1>
      </div>

      <div className="px-16 pt-8 text-2xl">
        <Image src={imagePath_1} width={250} height={300} alt={"楽譜"} />
        <h1>
          ３年生のみなさん、こんにちは!
          <br />
          学習発表会が11月にあるんだってね。
          <br />
          みんなのために、ぼくが練習用のウェブサイトを作ったよ。
          <br />
          みんなのえんそうが、楽しみだな！
        </h1>
      </div>
    </div>
  );
};

export default Home;
