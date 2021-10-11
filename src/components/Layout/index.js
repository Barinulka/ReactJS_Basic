import { Container } from "@material-ui/core";
import React from "react";

export const Layout = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
}