import { Container, Typography } from "@mui/material";
import React from "react";

export default function Alpha(): JSX.Element {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
        Skyclient ProofOfConcept 
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
        GUI Design Test v0.0.1-alpha1
      </Typography>
    </Container>
  );
}