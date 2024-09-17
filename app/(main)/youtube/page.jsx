import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

const youtube = () => {
  const imagePath_1 = "/conan_1.jpg";
  const imagePath_2 = "/conan_2.jpg";
  return (
    <div>
      <h1 className="rounded-full bg-gray-800 text-white flex justify-center my-4 py-2">
        名探偵コナン メインテーマ
      </h1>
      <div>
        <YouTubeEmbed
          className="flex justify-center "
          videoid="lFnU_xxEgjQ"
          width={700}
          height={450}
          params="controls=1"
        />
        <p className="text-gray-800 font-bold flex justify-center mb-2">
          けんばんハーモニカ　がくふ
        </p>
        <Image src={imagePath_1} width={700} height={200} alt={"楽譜"} />
        <Image src={imagePath_2} width={700} height={200} alt={"楽譜"} />
      </div>
    </div>
  );
};

export default youtube;
