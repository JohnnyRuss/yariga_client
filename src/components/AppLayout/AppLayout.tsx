import { Aside } from "components/Aside";
import { Navigation } from "components/Navigation";
import * as MuiStyled from "./AppLayout.styled";

type AppLayoutT = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutT> = ({ children }) => {
  return (
    <MuiStyled.MainContainerBox>
      <Navigation />

      <MuiStyled.BodyContainer>
        <Aside />

        <MuiStyled.ContentContainerBox>
          {children}
        </MuiStyled.ContentContainerBox>
      </MuiStyled.BodyContainer>
    </MuiStyled.MainContainerBox>
  );
};

export default AppLayout;
