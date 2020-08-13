import { useState } from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Table from "@material-ui/core/Table";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import LinkSharpIcon from "@material-ui/icons/LinkSharp";

const useStyles = makeStyles((theme) => ({}));

// ```
// {
//   "success": true,
//   "data": [
//     {
//       "_id": "5f201db60b39202c4984aa1f",
//       imageUploadTimestamp: ...,
//       imageUploadTimestampISO: ...,
//       "imageOriginalName": "image-walczak-thesame.jpg",
//       "imageFileName": "5b278c12-5b6a-4e65-94f5-cc3acf8abec6",
//       "imageServerPath": "public/5b278c12-5b6a-4e65-94f5-cc3acf8abec6",
//       "imageMimeType": "image/jpeg",
//       "imageSize": 46898,
//       "imageExif": {
//         "exifResults": {
//           "success": true,
//           "message": null
//         },
//         "data": {
//           "SourceFile": "public/e3c9ebf6-ac0b-4743-8e6a-1e5f5969dd18",
//           "ExifToolVersion": 10.53,
//           ...
//           "ThumbnailImage": "(Binary data 4391 bytes, use -b option to extract)"
//         }
//       },
//       "thumbnail": {
//         "cropResults": {
//           "success": true,
//           "message": null
//         },
//         "path": "public/5b278c12-5b6a-4e65-94f5-cc3acf8abec6_small"
//       },
//       "imageHash": {
//         "hashResults": {
//           "success": true,
//           "message": null
//         },
//         "data": "d541f99f3a204bd5c3af08cdc4e20f76"
//       },
//       "parsedCSFilename": {
//         "parseResults": {
//           "success": true,
//           "message": null
//         },
//         "data": {
//           "year": "2018",
//           "month": "08",
//           "day": "27",
//           "time": "19.27.28",
//           "version": "0",
//           "comment": "słowenia - zagrzeb"
//           "extension": ".jpg"
//         }
//       },
//       "__v": 0
//     }
//   ]
// }
// ```;

export default function TableViewDbRecords({ list }) {
  const classes = useStyles();
  const listRender = list;
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Path</Typography>
            </TableCell>
            <TableCell>
              <Typography>Id</Typography>
            </TableCell>
            <TableCell>
              <Typography>Uploaded Date</Typography>
            </TableCell>
            <TableCell>
              <Typography>Imported Path</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listRender.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                {/* TODO: move to .env */}
                <img
                  src={`http://localhost:9000/${item.thumbnail.path}`}
                  alt={item.thumbnail.path}
                />
              </TableCell>
              <TableCell>
                <Typography>{item._id}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.imageUploadTimestampISO}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.imageOriginalName}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
