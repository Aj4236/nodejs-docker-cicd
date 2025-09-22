# Node.js CI/CD with GitHub Actions & Docker

## 🚀 Overview
This project demonstrates a complete CI/CD pipeline for a Node.js application using:
- GitHub Actions
- Docker
- Docker Hub
- Remote server deployment via SSH

---

## 📦 Setup Instructions

### 1. Clone Repo
```bash
git clone https://github.com/<your-username>/nodejs-docker-cicd.git
cd nodejs-docker-cicd
```

### 2. Run Locally
```bash
npm install
npm start
```
Visit: http://localhost:3000

---

### 3. Docker Build
```bash
docker build -t nodejs-docker-cicd .
docker run -p 3000:3000 nodejs-docker-cicd
```

---

### 4. GitHub Secrets (Settings → Secrets → Actions)
- `DOCKER_USERNAME` → Your Docker Hub username
- `DOCKER_PASSWORD` → Your Docker Hub Access Token
- `SERVER_IP` → Server public IP
- `SERVER_USER` → SSH username (ubuntu, root, etc.)
- `SSH_PRIVATE_KEY` → Your private key (~/.ssh/id_rsa)

---

### 5. Deployment
On each push to `main`, GitHub Actions will:
1. Build & test the app
2. Build Docker image
3. Push image to Docker Hub
4. SSH into server and deploy latest container

Visit: `http://<SERVER_IP>:3000`
