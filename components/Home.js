function Home() {
  return (
    <div className="container m-auto flex flex-col space-y-8 px-4">
      <img
        src="/skis.jpeg"
        alt="hero banner"
        className="w-[100vw] object-none object-center h-[55vh] "
      />
      <font className = 'text-indigo-500 text-center text-xs font-medium tracking-widest'>Let's make winter adventures!</font>
    </div>
  );
}

export default Home;
