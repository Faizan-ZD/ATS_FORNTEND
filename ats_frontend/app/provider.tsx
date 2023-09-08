"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import Navbar from "@/pages/Auth/Navbar";

export function Providers({ children }: { children: React.ReactNode }) {
  
  return <Provider store={store}>{children}</Provider>;
}