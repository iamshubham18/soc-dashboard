import { useContext } from "react";
import { AlertContext } from "./alert-context";

export function useAlerts() {
  return useContext(AlertContext);
}