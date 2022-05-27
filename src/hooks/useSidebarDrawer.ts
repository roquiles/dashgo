import { useContext } from "react";
import { SidebarDrawerContext } from "../contexts/SidebarDrawer/context";

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
