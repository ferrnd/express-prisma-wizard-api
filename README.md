# Wizard API

This repository contains the core logic for a simple RESTful API for managing "Wizards" (or "Bruxos" in Portuguese), likely built with Node.js, Express, and Prisma as the ORM/database client.

## Project Structure (Inferred)

The code snippets suggest a structure that separates concerns into controllers, routes, and models:

* **`bruxoController.js` (Controller):** Handles request/response logic, data validation, and error handling.
* **`bruxoRoutes.js` (Router):** Defines the API endpoints and maps them to the controller functions.
* **`bruxoModel.js` (Model):** Interacts directly with the database via Prisma to perform CRUD operations.

## Technologies Used

* **Node.js**
* **Express** (for routing and server setup)
* **Prisma** (for database access/ORM)

## API Endpoints

The following endpoints are defined in the router:

| Method | Endpoint | Description | Controller Function |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Retrieves a list of all wizards. | `listarTodos` |
| `GET` | `/:id` | Retrieves a single wizard by their ID. | `listarUm` |
| `POST` | `/` | Creates a new wizard record. | `criar` |
| `DELETE` | `/:id` | Deletes a wizard record by their ID. | `deletar` |

---

### 1. Get All Wizards (`GET /`)
