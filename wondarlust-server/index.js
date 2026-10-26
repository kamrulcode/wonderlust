import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import "dotenv/config";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// Create uploads directory.
const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure image storage.
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },

  filename: (_req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9,
    )}${extension}`;

    cb(null, uniqueName);
  },
});

// Validate uploaded images.
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (_req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG and PNG images are allowed."));
    }
  },
});

// Serve uploaded images.
app.use("/uploads", express.static(uploadDir));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// Connect to MongoDB.
const client = new MongoClient(process.env.MONGO_DB_KEY);

await client.connect();
console.log("Successfully connected to MongoDB!");

const db = client.db("wanderlust");
const destinationCollection = db.collection("destination");
const bookingCollection = db.collection("booking");

// Add a destination.
app.post("/add-destination", upload.single("coverPhoto"), async (req, res) => {
  try {
    const destination = {
      ...req.body,
      price: Number(req.body.price),
      duration: Number(req.body.duration),
      groupSize: Number(req.body.groupSize),
      coverPhoto: req.file ? `/uploads/${req.file.filename}` : "",
    };

    const result = await destinationCollection.insertOne(destination);

    return res.status(201).json({
      message: "Destination added successfully",
      insertedId: result.insertedId,
      destination,
    });
  } catch (error) {
    console.error("Failed to add destination:", error);

    return res.status(500).json({
      message: "Failed to add destination",
    });
  }
});

// Return all destinations.
app.get("/destinations", async (_req, res) => {
  try {
    const destinations = await destinationCollection.find().toArray();
    return res.status(200).json(destinations);
  } catch (error) {
    console.error("Failed to fetch destinations:", error);

    return res.status(500).json({
      message: "Failed to fetch destinations",
    });
  }
});

// Return one destination by ID.
app.get("/destination/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid destination ID",
      });
    }

    const destination = await destinationCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    return res.status(200).json(destination);
  } catch (error) {
    console.error("Failed to fetch destination:", error);

    return res.status(500).json({
      message: "Failed to fetch destination",
    });
  }
});

// Update a destination.
app.put("/destination/:id", upload.single("coverPhoto"), async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid destination ID",
      });
    }

    const {
      name,
      location,
      price,
      duration,
      groupSize,
      category,
      description,
    } = req.body;

    // Only include fields actually supplied in the request.
    const updateData = {};

    if (name !== undefined) updateData.name = name;
    if (location !== undefined) updateData.location = location;
    if (price !== undefined) updateData.price = Number(price);
    if (duration !== undefined) updateData.duration = Number(duration);
    if (groupSize !== undefined) {
      updateData.groupSize = Number(groupSize);
    }
    if (category !== undefined) updateData.category = category;
    if (description !== undefined) {
      updateData.description = description;
    }

    // Store a URL path, not an absolute filesystem path.
    if (req.file) {
      updateData.coverPhoto = `/uploads/${req.file.filename}`;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        message: "No fields provided to update",
      });
    }

    const result = await destinationCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData },
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    return res.status(200).json({
      message: "Destination updated successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("Update destination error:", error);

    return res.status(500).json({
      message: "Failed to update destination",
    });
  }
});

// Handle upload errors.
app.use((error, _req, res, _next) => {
  if (error instanceof multer.MulterError) {
    return res.status(400).json({
      message:
        error.code === "LIMIT_FILE_SIZE"
          ? "Image must be 5 MB or smaller."
          : error.message,
    });
  }

  return res.status(400).json({
    message: error.message || "Request failed",
  });
});
app.delete("/destination/:id", async (req, res) => {
  const { id } = req.params;
  const query = { _id: new ObjectId(id) };

  const result = destinationCollection.deleteOne(query);

  res.send(result);
});

app.post("/booking", async (req, res) => {
  const data = req.body;
  const result = await bookingCollection.insertOne(data);
  res.send(result);
});

app.get("/my-booking/:email", async (req, res) => {
  const { email } = req.params;
  console.log(email);
  const result = await bookingCollection.find({ email: email }).toArray();
  console.log(result);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
