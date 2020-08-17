import Head from "next/head";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import Link from "../components/Link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Ramka2</title>
      </Head>
      <Container>
        <Header />
        <Link href="images-list" color="secondary">
          images-list
        </Link>
        <br />
        <Link href="design-system" color="secondary">
          design-system
        </Link>
      </Container>
    </>
  );
}
