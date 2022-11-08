import { Container } from "@mui/material";
import React from "react";
import { Form } from "./components/form";
import { Header } from "./components/header";

export const App = () => {
 return (
    <Container>
        <Header />
        <Form />
    </Container>
 )
}