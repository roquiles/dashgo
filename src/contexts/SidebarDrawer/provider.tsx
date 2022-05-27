import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { SidebarDrawerContext } from "./context";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  //Fechando a sidebar toda vez que o usuário navegar para outra página
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}
