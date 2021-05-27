import React from "react";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Container,
} from "@material-ui/core";

function ChangePassword() {
  return (
    <>
      <Container maxWidth={"sm"}>
        <Card>
          <CardContent>
            <Box component={"h1"} m={3}>
              Change Password
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
                Change Password
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default ChangePassword;
