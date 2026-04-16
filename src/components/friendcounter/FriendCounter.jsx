"use client";
import { useFriends } from "@/context/FriendsContext";

const FriendCounter = () => {
  const { friends, timelineHistory } = useFriends();

  const totalFriends = friends?.length || 0;
  const onTrack = friends?.filter((f) => f.status === "on_track").length || 0;
  const overDue = friends?.filter((f) => f.status === "overdue").length || 0;

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
      <div className='text-center shadow-lg p-8 rounded-2xl'>
        <h3 className='font-semibold text-3xl mb-2 text-[#244D3F]'>{totalFriends}</h3>
        <p className='text-lg text-[#64748B]'>Total Friends</p>
      </div>
      <div className='text-center shadow-lg p-8 rounded-2xl'>
        <h3 className='font-semibold text-3xl mb-2 text-[#244D3F]'>{onTrack}</h3>
        <p className='text-lg text-[#64748B]'>On Track</p>
      </div>
      <div className='text-center shadow-lg p-8 rounded-2xl'>
        <h3 className='font-semibold text-3xl mb-2 text-[#244D3F]'>{overDue}</h3>
        <p className='text-lg text-[#64748B]'>Need Attention</p>
      </div>
      <div className='text-center shadow-lg p-8 rounded-2xl'>
        <h3 className='font-semibold text-3xl mb-2 text-[#244D3F]'>{timelineHistory.length}</h3>
        <p className='text-lg text-[#64748B]'>Interactions This Month</p>
      </div>
    </div>
  );
};

export default FriendCounter;