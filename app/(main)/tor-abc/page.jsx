import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

const tor_xy_abc = () => {
  const imagePath_1 = "/tor-xy-abc.png";
  return (
    <div>
      <h1 className="rounded-full bg-gray-800 text-white flex justify-center my-4 py-2">
        名探偵コナン　メインテーマ（トロンボーン・木琴）ⒶⒷⒸ
      </h1>
      <p className="text-gray-800 font-bold flex justify-center mb-2">
        がくふデモ
      </p>
      <div>
        <YouTubeEmbed
          className="flex justify-center"
          videoid="HfGI-jmr9sE"
          width={700}
          height={450}
          params="controls=1"
        />
       
        <p className="text-gray-800 font-bold flex justify-center mb-2">
          名探偵コナン　メインテーマⒹⒺⒻがくふ（トロンボーン・木琴）
        </p>
        <Image src={imagePath_1} width={700} height={500} alt={"楽譜"} />
      </div>
    </div>
  );
};

export default tor_xy_abc;

