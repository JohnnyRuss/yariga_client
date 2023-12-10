import { useLocation } from "react-router-dom";

import { Aside } from "components/Aside";
import { Navigation } from "components/Navigation";
import * as MuiStyled from "./AppLayout.styled";

interface AppLayoutT {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutT> = ({ children }) => {
  const { pathname } = useLocation();
  const isOnAuthRoute = pathname.includes("auth");

  return (
    <MuiStyled.MainContainerBox>
      {!isOnAuthRoute && <Navigation />}

      <MuiStyled.BodyContainer>
        {!isOnAuthRoute && <Aside />}

        <MuiStyled.ContentContainerBox>
          {children}
        </MuiStyled.ContentContainerBox>
      </MuiStyled.BodyContainer>
    </MuiStyled.MainContainerBox>
  );
};

export default AppLayout;
