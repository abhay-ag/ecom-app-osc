function Home() {
  return (
    <div className="container m-auto flex flex-col items-center px-4">
      <img
        src="/skis.jpeg"
        alt="hero banner"
        className="w-[100vw] object-none object-center h-[55vh] mb-10"
      />
      <div className="flex flex-col items-center">
        <font className="text-indigo-500 text-xs font-medium tracking-widest">
          Let&apos;s make winter adventures!
        </font>
        <font className="text-3xl py-1 font-medium">Wasatch Ski Company</font>
        <font className="mt-4 w-[58vw] text-center font-normal">
          A pair of skis are the ultimate transportation to freedom. Skiing is a
          dance, and the mountain always leads. You can&apos;t buy happiness,
          but you can buy a ski pass.
        </font>
      </div>
      <button className="bg-indigo-500 rounded px-8 py-2 text-white my-6 text-lg">
        Shop Now
      </button>
    </div>
  );
}

export default Home;
