import React from "react";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Container,
} from "@material-ui/core";

function Register() {
  return (
    <>
      <Container maxWidth={"sm"}>
        <Card>
          <CardContent>
            <Box component={"h1"} m={3}>
              Register
            </Box>
            <Box m={1}>
              <TextField placeholder="Email" name="email" />
            </Box>
            <Box m={1}>
              <TextField placeholder="First Name" name="firstName" />
            </Box>
            <Box m={1}>
              <TextField placeholder="Last Name" name="lastName" />
            </Box>
            <Box m={1}>
              <TextField
                placeholder="Password"
                name="password"
                type="password"
              />
            </Box>
            <Box m={1}>
              <TextField
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
              />
            </Box>
            <Box m={3}>
              <Button variant="contained" color="primary">
                Register
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Register;
