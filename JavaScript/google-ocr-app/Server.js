const express = require("express");
const vision = require("@google-cloud/vision");
const path = require("path");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize the Vision API client
const client = new vision.ImageAnnotatorClient({
  keyFilename: "path/to/your/service-account-key.json",
});

// Endpoint to process the image
app.post("/process-image", async (req, res) => {
  try {
    const imageData = req.body.imageData;
    const base64Image = imageData.split(";base64,").pop();
    const imageBuffer = Buffer.from(base64Image, "base64");

    const [result] = await client.textDetection(imageBuffer);
    const detections = result.textAnnotations;

    if (detections.length) {
      res.json({ text: detections[0].description });
    } else {
      res.json({ text: "No text found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error processing image" });
  }
});

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ocrScanner.html"));
});

// Start the server, listening on all available network interfaces
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
