import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="container mx-auto mt-20 mb-10">
      <div className="text-center ">
        <h1 className="text-5xl font-bold mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-lg text-[#64748B] mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br />
        relationships that matter most.
      </p>
       <button className="btn btn-ghost text-white bg-[#244D3F]">
        <span><FaPlus /></span>
        Add a Friend
      </button>
      </div>
     
    </div>
  );
};

export default Banner;
