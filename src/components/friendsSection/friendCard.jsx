import Image from "next/image";
import Link from "next/link";
const FriendCard = ({ friend }) => {
 
  const statusStyles = {
    overdue: "bg-red-500 text-white",
    almost_due: "bg-yellow-400 text-white",
    on_track: "bg-green-700 text-white",
  };

 
  const tagStyles = {
    work: "bg-green-100 text-green-700",
    family: "bg-green-100 text-green-700",
    hobby: "bg-green-100 text-green-700",
    travel: "bg-green-100 text-green-700",
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-[#F3F4F6] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
       
        <div className="flex justify-center">
          <Image
            height={80}
            width={80}
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

       
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {friend.name}
        </h3>

        
        <p className="text-sm text-gray-400 mt-1">
          {friend.days_since_contact}d ago
        </p>

       
        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${tagStyles[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>

       
        <div className="mt-3">
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${statusStyles[friend.status]}`}
          >
            {friend.status.replace("_", " ")}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
