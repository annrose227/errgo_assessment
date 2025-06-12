import express from "express";
import cors from "cors";
import { IProject } from "./models/project.interface";
import { v4 as uuid } from "uuid";

const app = express();
const PORT = 3000;
// List of projects
const projects: IProject[] = [];

// Setup cors and express.json()
app.use(
  cors({
    origin: "*",
    methods: "*",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Errgo Backend Interview Module Loaded Successfully!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.post("/projects", (req, res) => {
  const { name, description } = req.body;
  const newProject: IProject = {
    id: uuid(),
    name,
    description,
  };
  projects.push(newProject);
  res.status(200).json(newProject);
});

app.get("/projects", (req, res) => {
  res.status(200).json(projects);
});

// DELETE endpoint to remove a project by ID
app.delete("/projects/:id", (req, res) => {
  const projectId = req.params.id;
  const initialLength = projects.length;
  // Find the index of the project with the given ID
  const projectIndex = projects.findIndex(
    (project) => project.id === projectId
  );

  if (projectIndex === -1) {
    // If project not found, send 404 response
    res.status(404).send("Project not found");
  } else {
    // Remove the project from the array
    projects.splice(projectIndex, 1);
    // Send 200 response with a success message or the deleted project
    res.status(200).send(`Project with ID ${projectId} deleted successfully`);
  }
});
