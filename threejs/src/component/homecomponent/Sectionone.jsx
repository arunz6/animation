import React from "react";

const Sectionone = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="fullstack relative left-10 top-[40%]">
        <h1 className="text-9xl font-semibold uppercase tracking-wider text-white">
          fullstack
        </h1>
        <h1 className="text-7xl font-bold uppercase tracking-wider text-gray-600">
          developer
        </h1>
      </div>
      <div className="LINKTAGS z-10 scale-140 bg-gray-950 fixed right-0 top-[20%] p-1.5 flex flex-col border-2 border-r-0 rounded-l-xl text-white">
        <a href="">linkdin</a>
        <a href="">github</a>
        <a href="">mail</a>
        <a href="">leetcode</a>
      </div>
      <div className="detailsec absolute right-[10%] bottom-[12%] w-[30vw] text-right">
        <p className="text-gray-400 text-sm leading-relaxed">
          Full-stack developer crafting production-shaped web apps — from
          real-time systems with proper auth and sockets, to AI agents that
          reason, search, and decide on their own. MERN by day, LangChain by
          night.
        </p>
      </div>
    </div>
  );
};

export default Sectionone;