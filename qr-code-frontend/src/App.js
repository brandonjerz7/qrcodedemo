import React from "react";
import "./App.css";

// PROBLEM OVERVIEW
// Create a Form which has one text input and a submit button. The user can enter any data they want in the text input and when
// the submit button is clicked their input needs to be passed as a query parameter called "rawData" to the qr-code-service GET /generateQRCodeDataUrl endpoint
// The GET request will return a base64 encoded PNG image of the generated QR Code. Use that encoded file response as the src on an image tag
// to display the QR Code on the page. Users should be able to submit multiple requests and the QR Code Image for each Request should be displayed
// on the page along with the data that was used to generate the QR Code

const App = () => {
  return (
    <div className="App">
      <header className="header">QR Code Interview Project</header>
      <main className="main" style={{ minHeight: "800px" }}>
        <p>Welcome to the QR Code Interview Project!</p>
      {/*TODO: Create a form with one text input and a submit button*/}
      {/*TODO: Capture the users text input and on submit execute a GET request to return the generated QR Code Data URL (you may use fetch, axios, or any other library to execute the request) */}
      {/*TODO: The User can submit as many times as they'd like. Display each QR Code from each Submission with the text used to generate it underneath. The QR Code Data URL can be used as the image src*/}
      </main>
      <footer className="footer">© 2023 - QR Code Interview Project</footer>

    </div>
  );
};

export default App;
