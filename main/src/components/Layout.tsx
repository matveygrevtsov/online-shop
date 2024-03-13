import React, { FC, PropsWithChildren, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
const RemoteHeader = lazy(() => import("header/Header"));

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Suspense>
        <RemoteHeader logo="ZAR_TEAM" navigate={navigate} />
      </Suspense>

      <center style={{ marginTop: "16px" }}>{children}</center>
    </div>
  );
};
