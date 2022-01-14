import { LoginIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Button from "./Button";

function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("");
  };

  return (
    <nav className="flex justify-around shadow-sm items-center py-4 z-50 text-white backdrop-blur-md top-0 w-screen sticky">
      {/* left */}
      <p
        className="font-extrabold text-3xl sticky top-0 cursor-pointer"
        onClick={handleClick}
      >
        Covax<span className="text-red-600">+</span>
      </p>
      {/* middle */}
      <ul className="flex space-x-4 text-xl">
        <li className="cursor-pointer px-10 hover:-translate-y-1 hover:text-red-600 transition-all ease-in-out duration-200">
          <p className="">Trade</p>
        </li>
        <li className="cursor-pointer px-10 hover:-translate-y-1 hover:text-red-600 transition-all ease-in-out duration-200">
          <p>Help</p>
        </li>
        <li className="cursor-pointer px-10 hover:-translate-y-1 hover:text-red-600 transition-all ease-in-out duration-200">
          <p>About</p>
        </li>
      </ul>

      {/* right */}
      {session ? (
        <div className="flex items-center space-x-4">
          <p>
            Welcome,{" "}
            <span className="font-bold text-red-600"> {session.user.name}</span>{" "}
            <hr className="my-1" />
            <p className="text-xs">{session.user.email} </p>
          </p>
          <Button onClick={signOut}>Logout of wallet</Button>
        </div>
      ) : (
        <Button
          onClick={signIn}
          icon={<LoginIcon className="h-8 -scale-100" />}
          className="flex"
        >
          Connect wallet
        </Button>
      )}
    </nav>
  );
}

export default Navbar;
