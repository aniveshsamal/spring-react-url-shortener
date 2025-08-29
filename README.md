# URL Shortener — Full-Stack (React + Spring Boot)
<img width="1882" height="905" alt="Screenshot 2025-08-28 162638" src="https://github.com/user-attachments/assets/97c5e50b-df0a-410a-bbfe-f82942d30a79" />

## Features
- Create short links from long URLs (auto-generated or custom alias)
- User registration & authentication (JWT / Sessions)
- Dashboard to view and manage links
- Click analytics (per-link click count, top links)
- Link expiration and metadata (title, description)
- Role-based access (user / admin)
- Dockerized builds for production
- CI pipeline (recommended: GitHub Actions)

## Tech Stack
**Frontend:** React, Vite, Tailwind CSS, React Router, Context API (or Redux)

**Backend:** Java, Spring Boot, Spring Security, Spring Data JPA

**Database:** MySQL / PostgreSQL (replace with what you use)

**Other:** Docker, Maven, Stripe (optional payments), GitHub Actions (CI), Sentry/Prometheus (monitoring)

## Architecture & Project Structure
A clear monorepo layout (frontend and backend inside a single repo). You can also split into two repositories if you prefer.

```
url-shortener/
├── url-shortener-react/        # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contextApi/
│   │   ├── dummyData/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── AppRouter.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js

├── url-shortener-sb/           # Backend (Spring Boot)
│   ├── .mvn/
│   ├── src/main/java/shortener/
│   │   ├── controller/
│   │   ├── dtos/
│   │   ├── models/
│   │   ├── repository/
│   │   ├── security/
│   │   ├── service/
│   │   └── UrlShortenerSbApplication.java
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   ├── static/
│   │   └── templates/
│   ├── pom.xml
│   └── Dockerfile

├── .gitignore
├── README.md
└── LICENSE
```

## Prerequisites
- Node.js (>= 18 recommended)
- npm / pnpm / yarn
- Java 17+ (if Spring Boot uses it) or Java version configured in `pom.xml`
- Maven
- Docker (optional)
- Database (MySQL / PostgreSQL)

## Environment Variables
Create `.env` files for frontend and backend. 

### Frontend (`url-shortener-react/.env`)
```
VITE_API_BASE_URL=http://localhost:8080/api
VITE_STRIPE_PUBLIC_KEY=pk_test_xxx
```

### Backend (`url-shortener-sb/src/main/resources/application.properties`)
```
spring.datasource.url=jdbc:postgresql://localhost:5432/shortener
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
jwt.secret=replace_with_strong_secret
```

## Installation
### Frontend
```bash
cd url-shortener/url-shortener-react
npm install
```

### Backend
```bash
cd url-shortener/url-shortener-sb
# If using Maven
./mvnw clean package
# or on Windows
mvnw.cmd clean package
```

## Run Locally
### Backend (dev)
```bash
cd url-shortener/url-shortener-sb
./mvnw spring-boot:run
# or run UrlShortenerSbApplication from your IDE
```

### Frontend (dev)
```bash
cd url-shortener/url-shortener-react
npm run dev
# open http://localhost:5173 (default Vite port)
```

### Full flow
1. Start DB (MySQL/Postgres)
2. Start backend `:8080`
3. Start frontend dev server (Vite) and confirm API requests go to backend

## Testing
- **Frontend:** Jest + React Testing Library
- **Backend:** JUnit 5 + Mockito

Run examples:
```bash
# frontend
npm run test
# backend
./mvnw test
```

## Security & Best Practices
- Never commit `.env` files or secrets — add them to `.gitignore`.
- Use strong JWT secrets and rotate keys regularly.
- Validate and sanitize user input (especially URL input).
- Rate-limit URL creation and redirects to avoid abuse.
- Use HTTPS in production.
- Store sensitive configs in a secret manager (AWS Secrets Manager / GitHub Secrets).

## Acknowledgements & References
- Inspired by TinyURL & Bitly

## Contact
**Anivesh Samal** 
- Email: `aniveshsamal@gmail.com`
- GitHub: `https://github.com/aniveshsamal`

## Final Notes for Recruiters
This project demonstrates:
- Full-stack design and implementation
- Production-aware practices (Docker, CI, env management)
- Clean code layout and testing approach
- Attention to security, monitoring and performance
