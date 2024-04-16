import { Container, Grid } from "@mui/material";

const Layout = ({ children }) => {
    return (
        <>
            <header>

            </header>
            <Container component={'main'} maxWidth='sm' sx={{ marginTop: "32px" }} >
                {children}
            </Container>
            <footer>

            </footer>
        </>
    );
};

export default Layout;