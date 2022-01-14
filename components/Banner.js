import {
  ArrowCircleRightIcon,
  ArrowRightIcon,
  ChevronDoubleRightIcon,
  GlobeAltIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import Button from "./Button";

function Banner() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <img
        src="https://images.unsplash.com/photo-1585511426526-a21c74efa642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="-top-36 absolute w-screen min-h-screen -z-10 object-cover "
      />

      <div className="container flex flex-col justify-center items-center mt-48 cursor-default">
        <p className="text-white text-[4rem] backdrop-blur-md shadow-lg rounded-xl p-4 w-3/4 text-center">
          Welcome to Covax+
          <p className="text-3xl text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio et,
            dolorem tempore qui ullam officia reiciendis nemo voluptas nesciunt
            repudiandae at, quibusdam animi rem exercitationem eius? Itaque unde
            voluptate atque porro in placeat ex, obcaecati quo? Eos autem natus
            commodi?
          </p>
        </p>
        <div className="container flex items-center justify-center my-12 w-auto space-x-8">
          <Button icon={<GlobeAltIcon className="h-8" />}>Explore</Button>
          <Button icon={<ArrowCircleRightIcon className="h-8" />}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
