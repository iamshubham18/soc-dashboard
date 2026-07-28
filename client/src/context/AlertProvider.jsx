import { useState } from "react";
import { AlertContext } from "./alert-context";

const initialAlerts = [
  {
    id: 1,
    title: "Brute Force Login Attempt",
    severity: "Critical",
    source: "Firewall",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Malware Detected",
    severity: "High",
    source: "Windows Defender",
    time: "15 min ago",
  },
  {
    id: 3,
    title: "Suspicious Network Traffic",
    severity: "Medium",
    source: "IDS",
    time: "30 min ago",
  },
  {
    id: 4,
    title: "Multiple Failed Login Attempts",
    severity: "Low",
    source: "Active Directory",
    time: "1 hour ago",
  },
];

function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState(initialAlerts);

  const addAlert = (alert) => {
    setAlerts((prev) => [alert, ...prev]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertProvider;