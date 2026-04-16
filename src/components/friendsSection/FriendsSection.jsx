"use client";
import { useFriends } from "@/context/FriendsContext";
import FriendCard from "./friendCard";

const FriendsSection = () => {
  const { friends, loading } = useFriends();

  return (
    <div className="my-10 container mx-auto">
      <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">
        Your Friends
      </h3>

      <div>
        {loading ? (
          <div className="flex justify-center my-10">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : friends.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend}></FriendCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No friends found</p>
        )}
      </div>
    </div>
  );
};

export default FriendsSection;
