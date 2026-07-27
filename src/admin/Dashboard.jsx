import Sidebar from "../components/admin/Sidebar";
import DashboardCards from "../components/admin/DashboardCards";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />

        <div className="dashboard-content">
          <h1>Dashboard</h1>

          <DashboardCards />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
