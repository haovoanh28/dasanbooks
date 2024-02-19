import {Outlet} from "react-router-dom";
import {Stack, Box, Toolbar, Typography, Container} from "@mui/material";

const MainContainer = () => {
  return (
    <>
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        height={'90px'}
        sx={{
          flexGrow: 1,
          backgroundColor: '#ECEDF4'
        }}
      >
        <Toolbar>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={1}
            sx={{
              width: '100%',
              maxHeight: '70px'
            }}
          >
            <img
              src="/assets/images/logo-placeholder-image.png"
              alt="logo"
              width={60}
              height={60}
            />
            <Typography
              sx={{
                lineHeight: '70px',
                fontSize: '37.5pt',
                fontWeight: 500,
                color: '#1B2E4B'
              }}
            >
              다산콘텐츠
            </Typography>
          </Box>
        </Toolbar>
      </Stack>
      <Stack>
        <Container sx={{py: 3}}>
          <Outlet/>
        </Container>
      </Stack>
    </>
  );
};

export default MainContainer;
