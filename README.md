# Contact Manager

A simple **Contact Manager** application built with **Next.js** that allows users to manage contacts with name, email, and phone number.

The primary focus of this project is to practice **CI pipelines** and **Docker containerization**, while keeping the application logic intentionally lightweight.

---

## 🚀 Features
- Add and manage contacts
- Contact fields: name, email, phone number
- Basic form validation
- CI checks: lint, type check, and build
- Dockerized application
- Automated Docker build validation on pull requests

---

## 🛠 Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- Docker
- GitHub Actions

---

## 📦 Running Locally

### 1️⃣ Clone the repository
```bash
git clone <repository-url>
cd contact-manager
2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


The app will be available at:
http://localhost:3000

🐳 Running with Docker
Build the Docker image
docker build -t my-nextjs-app .

Run the container
docker run -p 3000:3000 my-nextjs-app


The application will be available at:
http://localhost:3000

🔄 CI Workflow

This project uses GitHub Actions for Continuous Integration.

Branch behavior:

Push to test branch

Lint check

Type check

Application build

Pull request to main branch

Lint check

Type check

Application build

Docker image build validation

This ensures that only code which passes quality checks and can be successfully containerized is merged into main.

📌**Design_Note:File-based_Storage**

This project uses a simple db.json file for data storage.

This choice is intentional. The main objective of the project is to:

Practice CI/CD workflows

Learn Docker image creation and containerization

Validate Docker builds during pull requests

Using a file-based store keeps the setup minimal and allows focus on CI and Docker concepts rather than database configuration.

Since containers are ephemeral, data stored in db.json is not persisted across container restarts.
In a production-ready system, this would be replaced with a proper database and persistent storage (e.g., Docker volumes or managed database services).

📈 Future Improvements

Replace file-based storage with a database

Add Docker Compose setup

Improve authentication and session handling

Add automated tests