/**
 * DO NOT EDIT
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ProjectPage } from "./pages/ProjectPage";
import App from "./App";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import DeploymentsPage from "./pages/DeploymentsPage";
import UsagePage from "./pages/UsagePage";
import TeamsPage from "./pages/TeamsPage";
import DiscoverWorkspacePage from "./pages/DiscoverWorkspacePage";
import TemplatesPage from "./pages/TemplatesPage";
import SearchPage from "./pages/SearchPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ProjectPage /> },
      { path: "project-details", element: <ProjectDetailsPage /> },
      { path: "deployments", element: <DeploymentsPage /> },
      { path: "usage", element: <UsagePage /> },
      { path: "teams", element: <TeamsPage /> },
      { path: "discover-workspace", element: <DiscoverWorkspacePage /> },
      { path: "templates", element: <TemplatesPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "messages", element: <MessagesPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "chat", element: <ChatPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
