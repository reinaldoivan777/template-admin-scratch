import React from "react";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Container,
} from "@material-ui/core";

function Login() {
  return (
    <>
      <Container maxWidth={"sm"}>
        <Card>
          <CardContent>
            <Box component={"h1"} m={3}>
              Login
            </Box>
            <Box m={1}>
              <TextField placeholder="Email" name="email" />
            </Box>
            <Box m={1}>
              <TextField
                placeholder="Password"
                name="password"
                type="password"
              />
            </Box>
            <Box m={3}>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Login;
