const About: React.FC = () => {
  return (
    <div className=" w-[700px] bg-zinc-300 border-[2px] border-zinc-200 dark:border-zinc-800  dark:bg-[#0a0a0a] p-5 rounded-md drop-shadow-xl">
      <h1 className="font-Onest font-bold text-2xl mb-2 text-zinc-800 dark:text-zinc-300 ">
        About Me
      </h1>
      <p className="font-Onest text-zinc-700 font-semibold text-lg dark:text-zinc-400">
        I am a young man passionate about web development. Although I haven't
        been around for a long time, I want to improve my skills and my logic
        more and more every day, specializing in back-end and new emerging
        technologies in this field of constant updating. I have a whole path
        ahead of me.
      </p>
    </div>
  );
};

export default About;
