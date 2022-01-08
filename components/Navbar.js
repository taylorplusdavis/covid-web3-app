function Navbar() {
  return (
    <nav className="flex justify-around shadow-sm items-center py-4 z-50 text-white backdrop-blur-md top-0 w-screen sticky">
      {/* left */}
      <p className="font-extrabold text-3xl sticky top-0">Covid Web3 App</p>
      {/* middle */}
      <ul className="flex space-x-4 text-xl">
        <li className="cursor-pointer px-10 hover:-translate-y-1 transition-all ease-in-out duration-150">
          <p className="">Trade</p>
        </li>
        <li className="cursor-pointer px-10 hover:-translate-y-1 transition-all ease-in-out duration-150">
          <p>Help</p>
        </li>
        <li className="cursor-pointer px-10 hover:-translate-y-1 transition-all ease-in-out duration-150">
          <p>About</p>
        </li>
      </ul>

      {/* right */}
      <button className="buttonContainer rounded-full bg-gradient-to-t from-slate-300 to-amber-100 hover:from-sky-200 hover:to-amber-100">
        <p className="px-8 py-4 text-white text-xl font-semibold">Login</p>
      </button>
    </nav>
  );
}

export default Navbar;
