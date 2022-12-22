import Navigation from "./Navigation";
import location from "../assets/location.svg";
import SearchInput from "./SearchInput";
// interface Props {
//   onSearch: void;
// }
export default function Header(props: any) {
  return (
    <header className="min-h-[55rem] header flex flex-col justify-end items-center font-Montserrat ">
      <Navigation />
      <div className="flex flex-col justify-end h-[30rem]">
        <div className="flex flex-col items-center h-3/4 gap-10 ">
          <div>
            <h1 className="xs:text-8xl text-6xl text-black text-center leading-3 font-Baskerville ">
              DISCOVER <span className="text-green-500 ">LIFE </span> QUALITY.
              <span className="text-2xl text-white">
                <br /> CHOOSE YOUR NEXT DESTINATION.
              </span>
            </h1>
          </div>
          <button className="rounded-3xl border-2 w-80 h-16 text-2xl text-white font-Montserrat">
            Join The Community →
          </button>
        </div>
        <div className="bg-white h-32 my-7 rounded-xl flex justify-between items-center search overflow-hidden xs:w-[90rem]">
          <div className=" justify-between items-center w-1/2 text-2xl border-r-2 border-gray-300 h-full font-Inter px-5 hidden xs:flex">
            <div className="flex items-center ">
              <img src={location} alt="location icon" />
              <h1 className="">Location</h1>
            </div>
            <h1 className="text-blue-500">Change City</h1>
          </div>
          <SearchInput onSearch={props.onSearch} goHandler={props.goHandler} />
        </div>
      </div>
    </header>
  );
}
