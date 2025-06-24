import AuthProvider from "@/providers/AuthProvider";
import React, { PropsWithChildren } from "react";

function ProviderLayout({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProviderLayout;
