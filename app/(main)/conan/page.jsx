"use client";
// import a from "../components/video.mp4";

const page = () => {
  return (
    <div>
      <h1>ここはコナン</h1>
      <video width="320" height="240" controls preload="none">
        <source src="./test.mp4" type="video/mp4" />
        <track src="./test.mp4" kind="subtitles" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default page;
