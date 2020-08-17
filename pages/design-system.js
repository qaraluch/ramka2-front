import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Link from "../components/Link";

export default function DesignSystem() {
  return (
    <>
      <Head>
        <title>Ramka2 - Design System</title>
      </Head>
      <Container maxWidth="xl">
        <Grid>
          <Grid item>
            {/* <Header /> */}
            <Link href="/">home</Link>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </>
  );
}
