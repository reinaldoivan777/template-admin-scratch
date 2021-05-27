import React from "react";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Container,
} from "@material-ui/core";

function ForgotPassword() {
  return (
    <>
      <Container maxWidth={"sm"}>
        <Card>
          <CardContent>
            <Box component={"h1"} m={3}>
              Forgot Password
            </Box>
            <Box m={1}>
              <TextField placeholder="Email" name="email" />
            </Box>
            <Box m={3}>
              <Button variant="contained" color="primary">
                Forgot Password
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default ForgotPassword;
