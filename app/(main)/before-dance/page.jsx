import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

const  beforedance = () => {
  const imagePath_1 = "/before-dance.png";
  return (
    <div>
      <h1 className="rounded-full bg-gray-800 text-white flex justify-center my-4 py-2">
        名探偵コナン　メインテーマ　ダンス前かんそう
      </h1>
      <p className="text-gray-800 font-bold flex justify-center mb-2">
        がくふデモ
      </p>
      <div>
        <YouTubeEmbed
          className="flex justify-center"
          videoid="fcVk2PTZ-Qk"
          width={700}
          height={450}
          params="controls=1"
        />
       
        <p className="text-gray-800 font-bold flex justify-center mb-2">
          名探偵コナン　ダンス前かんそう
        </p>
        <Image src={imagePath_1} width={700} height={500} alt={"楽譜"} />
      </div>
    </div>
  );
};

export default beforedance;

