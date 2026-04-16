import StatsChart from "@/components/statsChart/StatsChart";
import PieChart from "@/components/statsChart/StatsChart";

export const metadata = {
  title: "Stats | KeenKeeper",
  description: "Stats Page of KeenKeeper",
};


const Stats = () => {
  return (
    <>
      <StatsChart></StatsChart>
    </>
  );
};

export default Stats;