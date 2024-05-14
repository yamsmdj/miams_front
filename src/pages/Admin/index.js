import PanelAdmin from "./PanelAdmin";
import Dashboard from "./Dashboard";

const index = () => {
  return (
    <div className="flex w-full">
      <Dashboard />
      <PanelAdmin />
    </div>
  );
};

export default index;
