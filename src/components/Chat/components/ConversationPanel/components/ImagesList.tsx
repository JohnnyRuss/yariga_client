import { nanoid } from "@reduxjs/toolkit";
import { Grid, Box } from "@mui/material";

type ImagesListT = {};

const images = [
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970786/chat/U0SaVQ4dgVc707NV_5dx5Pih8DU3SrqqzjOSoql6q4LL6Z78YRMWisYdQFDdWx4QC_1701970765994.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970817/chat/eAjlXQei4e7lfpyr_EIQqbQg5zrZlyafEDMWgXdIw0g0d4HQH7JAlGEfJCpKBLVvg_1701970765995.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970785/chat/pofosL00oJhK5ATU_M7ycTxN3nZiZYVLRKYQrgDlbR7ZFRHhy8iMsidTOhJijArNw_1701970765996.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970833/chat/kjz0gcFTzGPBPEJo_vFtmMwlWGUDLYGd0FiEji8zgzdjLA30jMdYWVaa76DmJvchN_1701970765997.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970833/chat/fy2IWWASCGsLTyvG_Nlot50pterqPvrF0yA9fVSxgs5p4sp0KratE5PBOASM59WoE_1701970765998.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970808/chat/iEgYzePkKpUShlIz_WUsA9STftpL4zIsiO7jdQYRV3JjySID043dfuicJaLJ87dqc_1701970766001.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970768/chat/676eSe9C4WhcEHBm_2kvnee3LpiQCH6e7fVHx4THbNtk88DOImYEtr9xa7c8OMGEr_1701970766002.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970774/chat/90riIvGWmwR6pzdl_ODeYsRixs6B3dAdCHxdq8lCAlyIZG0OSFq0AnIoMFVs0aV3s_1701970766003.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970792/chat/iMmfbTipcXrileZ7_TjN20SHE0D4tHckBWRPwvDaxK9hFhEy8HmvE2OuxC5j4v4fV_1701970766004.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970769/chat/2c0T6gozAsJarDXO_2rsXb2EK97GeOAIwHFcq1cbcLUyPcrDVdZA77vsebmLmboaf_1701970766005.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970781/chat/yV3Ccyabxb14pASJ_u2ekWOpXtokvMNu6BpoE7oAQP6iAFAKgxXnXAiZcXe2qS9WM_1701970766006.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970845/chat/kQjKm2C3S7Irs7F3_LUWVAivSiZytfxJP5iF8Ce3sFem8s7WeDbQW5EySMjM7oxtO_1701970766007.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970828/chat/cgUgE2SobQ1UiFPP_jwbJOjF5ovcIcOvD6ID3FV2MGOP0wrMFS9TWlAUlgVKulNkN_1701970766009.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970841/chat/Xp1T9Oii34aemOTl_I4jqFIUTmmV20SQQbCegjOt7QTab0Rsi8pjrncstmzKMQgrq_1701970766010.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970832/chat/5IpBRn6tfMXlr8rO_Nc5Xk5VZuNNh3lmrRBvrjj4f7e2geFRawkFFiXgElpcZN3qR_1701970766011.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970934/chat/sCv7dQTZNQXcEiAQ_KkzCReKK2nuoKLkqTLw6newvhUvzcA6YiSrIDSMVBorEv3oC_1701970931107.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970947/chat/d4k48Ij2dQXHvkMv_HFnHGu8qYBiBB1Sk40rDOlnYeo0zP5dniL96e0psqhYHUfeQ_1701970931108.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970979/chat/bqxC5bGHIdmyIy4C_CwnjExuaEjzJMGmHnpxS0ecSCXBJM5W9SKyZQLdhvATBsxLu_1701970931108.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971009/chat/iAygfAqKcdi0lwML_3bG9OaRNbTXWxVmHtFl8bipOn6ngplZO1idZL7H2VPgTqnWc_1701970931109.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970974/chat/DHWg4c3nUk25afSN_D2WllgbaP1TY1dB0wwdMABV9WWYQeJUuT1uSmGCBDVN2WOqh_1701970931110.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970960/chat/cuShfkbNqgSm7tmM_UbVMBc8vFgX2OngA7ZiOrsb18VlY870LMZGQbrlc1LlNRztL_1701970931111.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971015/chat/PTzuu5EZRFF53Yuu_OxALkpnies9oRNgzYN0RoT4saF54JYlO2xgiRwzgdL6buaXr_1701970931112.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970986/chat/0aK9HThLtgJi6fjO_jH995rcDX8xhThSFVJwQ3Wkwwvt7TmULNOBw5SzGOYw13S54_1701970931113.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970946/chat/tewNIcHYPau28GDv_Xb5mt9BkH1NwhQIHB2P2sqWmhmdu5BJFu0YpkOlmY8JCBUJv_1701970931114.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701970950/chat/ffCaCixEXeiZoDfz_chjHb9Hckx6j35JgMSlvlXeggfX6fVg4qdIysqqRbheRg27z_1701970931115.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971019/chat/pR5DnevpoJ5oKVPJ_PrUDsWAbNjNJX8FPgDq9YX0Cs2OK65PgW02Iyl9t9j3Z69gK_1701970931116.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971021/chat/B0dbbry9YbCkCdn9_M7PNykjuYLmhYLAuDHfcAW7rK3DSb8hTHw0KqHUS5V7rwhuf_1701970931117.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971078/chat/fNnuldEaqJW3LBzZ_544RLXuxYMqOy9E2S6K3uwww5BjnMMIFXQF2L90mgbYO3MD6_1701971053512.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971082/chat/xpjb8viJAcfM3lK3_guQKWPAgAQ0F84ZLMYE1rMZ1PdQw7eJEL9EaofFfGNdjtLgZ_1701971053513.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971092/chat/OyisCn64YRD5CdKv_tQ070sKBtHAbU5yVWD2BH2EUGASa6TE7kKqXMl7125HEzR0v_1701971053514.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971056/chat/ObkOVn08LQCVAwn4_oAPLV6qKhZykyrLn393GjYJxM9jaZpCr8ICWp6wDxm10FFdC_1701971053515.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971100/chat/PfBmG877NtJ4HATn_LQEYtytLGqlZjLOr1jgTrmZxOunUsFGbDfIAYpFhlNDr94dH_1701971053515.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971101/chat/yB1lqvQzLXfpHdq0_PoNio21v5SN1NHK7uHgeO4gF9FtRdfZuw86SSiJXS9y5Y17o_1701971053517.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971059/chat/AOqvirgYeT7s5I0S_BN62nXmy1fMxbV4y7rRFXyGLvw6CKgHR3l57rLf0rh2UsPtW_1701971053518.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971085/chat/hcrhQ4zVXgZguJor_kf88pZHGqukH8yQMx408mLB2V8Wd5kHYXo8WeVsEYScpwkRq_1701971053519.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971086/chat/1NxRTn2CPirMifaa_PPY5r1sWi3G20Roymup9EV1ghpOGs1DRlgpmDwOsNPvZPHKn_1701971053520.webp",
  "https://res.cloudinary.com/dizw3yxcn/image/upload/v1701971081/chat/fonJzrePZif8MWBE_i3sk4iBHBN4npa2FUPd90vwm5eFZ0I7bF8LLWp6gYrjn0QXD_1701971053521.webp",
];

const ImagesList: React.FC<ImagesListT> = () => {
  return (
    <Box px={1} pr={0} width="100%" height="100%" className="custom_scrollbar">
      <Grid container width="100%" spacing={1} height="100%">
        {images.map((image) => (
          <Grid item xs={4} key={nanoid()}>
            <Box
              component="figure"
              width="100%"
              overflow="hidden"
              sx={{
                aspectRatio: "1/1",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={image}
                alt={image}
                loading="lazy"
                title={image}
                width="100%"
                height="100%"
                sx={{ objectFit: "cover", maxWidth: "100%" }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImagesList;
