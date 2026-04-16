"use client";
import { useFriends } from "@/context/FriendsContext";
import { IoCallOutline } from "react-icons/io5";
import { BsChatSquareText } from "react-icons/bs";
import { MdOutlineVideocam } from "react-icons/md";

const iconConfig = {
  call: { icon: <IoCallOutline size={20} />, label: "Call", color: "bg-blue-100 text-blue-600" },
  text: { icon: <BsChatSquareText size={20} />, label: "Text", color: "bg-green-100 text-green-600" },
  video: { icon: <MdOutlineVideocam size={20} />, label: "Video", color: "bg-purple-100 text-purple-600" },
};

const Timeline = () => {
  const { timelineHistory } = useFriends();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Timeline</h1>

      {timelineHistory.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <p className="text-lg">No interactions yet.</p>
          <p className="text-sm">Go to a friends page and log a call, text, or video!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {[...timelineHistory].map((entry, index) => {
            const config = iconConfig[entry.contact];
            

            return (
              <div key={index} className="flex items-center gap-4 shadow-md rounded-2xl p-4 md:p-6">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${config.color}`}>
                  {config.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-1">
                  <div>
                    <p className="font-semibold text-base">
                      {config.label} with {entry.name}
                    </p>
                    <p className="text-sm text-gray-400">{entry.date}</p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${config.color}`}>
                    {config.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Timeline;