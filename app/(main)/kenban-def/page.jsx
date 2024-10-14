import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

const kenbandef = () => {
  const imagePath_1 = "/conan-def.png";
  return (
    <div>
      <h1 className="rounded-full bg-gray-800 text-white flex justify-center my-4 py-2">
        名探偵コナン　メインテーマ　けんばんⒹⒺⒻ
      </h1>
      <p className="text-gray-800 font-bold flex justify-center mb-2">
        がくふデモ
      </p>
      <div>
        <YouTubeEmbed
          className="flex justify-center"
          videoid="PZ4G0YN2CCc"
          width={700}
          height={450}
          params="controls=1"
        />
        {/* <p className="text-gray-800 font-bold flex justify-center mb-2">
          けんばんデモ
        </p>
        <YouTubeEmbed
          className="flex justify-center"
          videoid="J6m26a0QVm0"
          width={700}
          height={450}
          params="controls=1"
        /> */}
        <p className="text-gray-800 font-bold flex justify-center mb-2">
          名探偵コナン　メインテーマⒹⒺⒻがくふ（けんばん）
        </p>
        <Image src={imagePath_1} width={700} height={500} alt={"楽譜"} />
      </div>
    </div>
  );
};

export default kenbandef;

