
import CardOne from "../components/dashboard/cardone/cardone";

import Transaction from "../components/dashboard/transaction/transaction";
import CardTwo from "../components/dashboard/cardtwo/cardtwo";
import CardThree from "../components/dashboard/cardthree/cardThree";
import Chart from "../components/dashboard/chart/chart";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex flex-col gap-5 grow-[3]">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <CardOne />
          <CardTwo />
          <CardThree />
        </div>
        <Transaction />
        <Chart />
      </div>
    </div>
  );
};
export default Dashboard;
