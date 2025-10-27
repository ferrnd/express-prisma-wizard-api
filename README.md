# Wizard API ✨

This repository contains the core logic for a simple **RESTful API** for managing "Wizards" (or "Bruxos" in Portuguese), likely built with **Node.js**, **Express**, and **Prisma** as the ORM/database client.

---

## Project Structure (Inferred)

The code snippets suggest a structure that separates concerns into controllers, routes, and models:

* **`bruxoController.js` (Controller):** Handles request/response logic, data validation, and error handling.
* **`bruxoRoutes.js` (Router):** Defines the API endpoints and maps them to the controller functions.
* **`bruxoModel.js` (Model):** Interacts directly with the database via Prisma to perform CRUD operations.

---

## Technologies Used

* **Node.js**
* **Express** (for routing and server setup)
* **Prisma** (for database access/ORM)

---

## API Endpoints 🧙

The following **RESTful endpoints** are defined for managing wizard records:

| Method | Endpoint | Description | Controller Function |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Retrieves a list of all wizards. | `listarTodos` |
| `GET` | `/:id` | Retrieves a single wizard by their ID. | `listarUm` |
| `POST` | `/` | Creates a new wizard record. Requires `nome`, `casa`, `varinha`, and `anoMatricula` in the request body. | `criar` |
| **`PUT`** | **`/:id`** | **Updates an existing wizard record by their ID. Accepts partial data for fields like `nome`, `casa`, `patrono`, `varinha`, `anoMatricula`, and `ativo`.** | **`atualizar`** |
| `DELETE` | `/:id` | Deletes a wizard record by their ID. | `deletar` |

---

## Data Model (Inferred Schema)

Based on the controller and model logic, a Wizard (`Bruxo`) record likely contains the following fields:

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `Number` | Unique identifier (primary key). |
| `nome` | `String` | The wizard's name. |
| `casa` | `String` | The wizard's house (e.g., Grifinória, Sonserina, Corvinal, Lufa-Lufa). |
| `patrono` | `String` (Optional) | The wizard's patronus. |
| `varinha` | `String` | The wizard's wand details. |
| `anoMatricula` | `Number` | The year the wizard was enrolled. |
| `ativo` | `Boolean` (Optional) | Indicates if the wizard record is active. |

---

## Key Features

The implementation includes important **business rules and validations**:

* **House Validation:** The `criar` and `atualizar` controllers validate that the `casa` (house) field is one of the four accepted values: "Grifinória", "Sonserina", "Corvinal", or "Lufa-Lufa".
* **Required Fields (Creation):** The `POST /` endpoint enforces mandatory fields (`nome`, `casa`, `varinha`, `anoMatricula`) for creating a new wizard.
* **Error Handling:** All controller functions implement `try...catch` blocks to handle internal server errors (`500`) and return appropriate status codes for not found (`404`) and bad requests (`400`).
* **Partial Updates (PUT):** The `atualizar` model function allows for updating only the fields provided in the request body.