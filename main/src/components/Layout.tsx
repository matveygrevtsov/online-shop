import React, { FC, PropsWithChildren, Suspense, lazy } from "react";

// @ts-ignore
const RemoteHeader = lazy(() => import("header/Header"));

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Suspense>
        <RemoteHeader />
      </Suspense>

      <center style={{ marginTop: "16px" }}>{children}</center>
    </div>
  );
};
