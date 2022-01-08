import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <nav className="flex justify-around shadow-sm items-center py-4 z-50 text-white backdrop-blur-md top-0 w-screen sticky">
      {/* left */}
      <p className="font-extrabold text-3xl sticky top-0 cursor-default">
        Covax
      </p>
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
      {session ? (
        <div className="flex items-center space-x-4">
          <p>
            Welcome, <span className="font-bold"> {session.user.name}</span>{" "}
            <br />
            <p className="text-xs">{session.user.email} </p>
          </p>
          <button
            className="buttonContainer rounded-full bg-gradient-to-t from-slate-300 to-amber-100 hover:from-sky-200 hover:to-amber-100"
            onClick={signOut}
          >
            <p className="px-8 py-4 text-white text-xl font-semibold">Logout</p>
          </button>
        </div>
      ) : (
        <button
          className="buttonContainer rounded-full bg-gradient-to-t from-slate-300 to-amber-100 hover:from-sky-200 hover:to-amber-100"
          onClick={signIn}
        >
          <p className="px-8 py-4 text-white text-xl font-semibold">Login</p>
        </button>
      )}
    </nav>
  );
}

export default Navbar;
