import Banner from "@/components/banner/Banner";
import FriendCounter from "@/components/friendcounter/FriendCounter";

export const metadata = {
  title: "Home | KeenKeeper",
  description: "Homepage of KeenKeeper",
};

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FriendCounter></FriendCounter>
    </div>
  );
}
