import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Link from "../components/Link";
import TableViewImages from "../components/TableViewImages";
import { getAllImages } from "../src/api";

export default function ImagesList({ allImages }) {
  return (
    <>
      <Head>
        <title>Ramka2</title>
      </Head>
      <Container maxWidth="xl">
        <Grid>
          <Grid item>
            <Header />
            <Link href="/">home</Link>
          </Grid>
          <Grid item>
            <TableViewImages list={allImages} />{" "}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  //TODO: implement error handling?
  const allImages = await getAllImages();
  return {
    props: { allImages },
  };
}
