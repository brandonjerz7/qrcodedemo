import { Router } from "express";
import * as qr from "qrcode";
var router = Router();

// PROBLEM OVERVIEW
// Create a GET request which takes a string of data through a query parameter, converts the data to a QR Code, and returns a base64 encoded PNG of the QR Code.

/* Sample GET Request */
router.get("/generateQRCodeDataUrl", async (req, res, next) => {
  //TODO: Accept a query parameter called "rawData" that includes a string of data which will be converted in to a QR Code
  
  //TODO: Using the qrcode Library's toDataURL function, generate a qrDataUrl from the string of data passed through the query param.
  //The qrDataUrl is a base64 encoded png. The qrcode library's toDataUrl function will generate this for you given a string of text.
  
  //TODO: Return the qrDataUrl to the caller
});

export default router;
