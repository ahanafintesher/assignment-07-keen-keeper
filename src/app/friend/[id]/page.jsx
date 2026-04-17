"use client";
import Image from "next/image";
import { useFriends } from "@/context/FriendsContext";
import { useParams } from "next/navigation";
import { IoAlarmOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineArchive, MdOutlineVideocam } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsChatSquareText } from "react-icons/bs";
import { toast } from "react-toastify";

const statusConfig = {
  overdue: { label: "Overdue", className: "bg-red-100 text-red-600" },
  almost_due: { label: "Almost Due", className: "bg-yellow-100 text-yellow-600" },
  on_track: { label: "On Track", className: "bg-green-100 text-green-600" },
};

const FriendDetails = () => {
  const { friends, timelineHistory, setTimelineHistory  } = useFriends();
  const { id } = useParams();

  const friend = friends.find((f) => f.id === parseInt(id));
  if (!friend) return <p className="text-center mt-10">Friend not found!</p>;

  const status = statusConfig[friend.status] || statusConfig.on_track;

  const handleCalls = (callHistory) => {
    const date = new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
    callHistory.date = date;
   setTimelineHistory((prevHistory)=> [...prevHistory, callHistory])
    toast.success(`Call with ${callHistory.name}`);
   
  
  }

   const handleTexts = (textHistory) => {
    const date = new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
    textHistory.date = date;
     setTimelineHistory((prevHistory)=> [...prevHistory, textHistory])
    toast.success(`Text with ${friend.name}`);
  }
  console.log(timelineHistory)
  const handleVideoCalls = (videoCallHistory) => {
    const date = new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
    videoCallHistory.date = date;
     setTimelineHistory((prevHistory)=> [...prevHistory, videoCallHistory])
    toast.success(`Video Call with ${friend.name}`);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">

       
        <div className="flex flex-col gap-4 w-full lg:w-1/3">

         
          <div className="shadow-lg rounded-2xl p-6 flex flex-col items-center text-center gap-3">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={80}
              height={80}
              className="rounded-full object-cover w-20 h-20"
            />
            <h2 className="text-xl font-bold">{friend.name}</h2>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${status.className}`}>
              {status.label}
            </span>
            <div className="flex flex-wrap gap-2 justify-center">
              {friend.tags.map((tag) => (
                <span key={tag} className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 italic">{friend.bio}</p>
            <p className="text-sm text-gray-400">{friend.email}</p>
          </div>

        
          <div className="shadow-lg rounded-2xl p-4 flex flex-col gap-3">
            <button onClick={() => {handleCalls}} className="btn btn-ghost shadow-lg w-full justify-start gap-3 font-semibold">
              <IoAlarmOutline size={18} /> Snooze 2 Weeks
            </button>
            <button className="btn btn-ghost shadow-lg w-full justify-start gap-3 font-semibold">
              <MdOutlineArchive size={18} /> Archive
            </button>
            <button className="btn btn-ghost shadow-lg w-full justify-start gap-3 font-semibold text-red-500 hover:bg-red-50">
              <RiDeleteBin6Line size={18} /> Delete
            </button>
          </div>

        </div>

       
        <div className="flex flex-col gap-4 w-full lg:w-2/3">

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="shadow-lg rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold">{friend.days_since_contact}</h3>
              <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
            </div>
            <div className="shadow-lg rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold">{friend.goal}</h3>
              <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
            </div>
            <div className="shadow-lg rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold">{friend.next_due_date}</h3>
              <p className="text-gray-500 text-sm mt-1">Next Due</p>
            </div>
          </div>

          
          <div className="shadow-lg rounded-2xl p-6">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Relationship Goal</h3>
              <button className="btn btn-sm btn-ghost shadow-lg">Edit</button>
            </div>
            <p className="text-gray-600 mt-2">
              Connect every <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>

         
          <div className="shadow-lg rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => {
                handleCalls({
                  id: friend.id,
                  name : friend.name,
                  contact : 'call'
                });
              }} className="btn btn-ghost bg-[#E9E9E9] flex flex-col gap-1 h-auto py-4">
                <IoCallOutline size={24} />
                <span>Call</span>
              </button>
              <button onClick={() => {
                handleTexts(
                   {
                     id: friend.id,
                  name : friend.name,
                  contact : 'text'
                  }
                );
              }}
               className="btn btn-ghost bg-[#E9E9E9] shadow-lg flex flex-col gap-1 h-auto py-4">
                <BsChatSquareText size={24} />
                <span>Text</span>
              </button>
              <button  onClick={
                () => {
                    handleVideoCalls({
                       id: friend.id,
                  name : friend.name,
                  contact : 'video'
                    });
                }} className="btn btn-ghost bg-[#E9E9E9] shadow-lg flex flex-col gap-1 h-auto py-4">
                <MdOutlineVideocam size={24} />
                <span>Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;