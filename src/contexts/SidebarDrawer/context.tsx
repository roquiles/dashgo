import { UseDisclosureReturn } from "@chakra-ui/react";
import { createContext } from "react";

type SidebarDrawerContextData = UseDisclosureReturn;

export const SidebarDrawerContext = createContext({} as UseDisclosureReturn);
