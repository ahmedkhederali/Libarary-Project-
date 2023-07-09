import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Spacer,
  Button
} from "@chakra-ui/react";
import React from "react";

const Tab1Profile = ({ user }) => {
  function logOut() {
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    localStorage.removeItem("currentuser");
    window.location.href = "/login";
  }
  return (
    <div>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" isReadOnly value={user.firstname} />
          </FormControl>

          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" isReadOnly value={user.lastname} />
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" isReadOnly value={user.email} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input type="text" isReadOnly value={user.phone} />
          </FormControl>

          <FormControl>
            <FormLabel>Role</FormLabel>
            <Input type="test" isReadOnly value={user.role} />
          </FormControl>
          <FormControl>
            <FormLabel>Logout</FormLabel>
            <Button onClick={logOut}>Logout</Button>
          </FormControl>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Tab1Profile;
