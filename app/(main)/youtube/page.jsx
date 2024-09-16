import { YouTubeEmbed } from "@next/third-parties/google";

const recorder = () => {
  return (
    <div>
      <h1 className="rounded-full bg-gray-800 text-white flex justify-center my-4 py-2">
        コナンメインテーマ　がっそうのお手本
      </h1>
      <div>
        <YouTubeEmbed
          className="flex justify-center"
          videoid="WRxpi-jed_k"
          width={700}
          height={700}
          params="controls=1"
        />
      </div>
    </div>
  );
};

export default recorder;
