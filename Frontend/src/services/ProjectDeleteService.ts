// Service for project deletion
const API_URL = "http://localhost:3000/projects";

/**
 * Deletes a project by sending a DELETE request to the API endpoint
 *
 * @param projectId The ID of the project to delete
 * @returns A promise that resolves when the deletion is complete
 */
export const deleteProject = async (projectId: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${projectId.toString()}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete project: ${response.statusText}`);
    }

    console.log(`Successfully deleted project with ID: ${projectId}`);
  } catch (error) {
    console.error(`Error deleting project with ID: ${projectId}:`, error);
    throw error;
  }
};
