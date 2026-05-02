<h1 align="center">VaultDrop ☁️</h1>

<p align="center">
  <strong>Your Files, Next Level.</strong><br/>
  A modern, serverless cloud storage platform — upload, preview, share, and manage your files from anywhere.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?logo=drizzle&logoColor=black" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/Turso-SQLite-4FF8D2?logo=turso&logoColor=black" alt="Turso" />
  <img src="https://img.shields.io/badge/Cloudinary-CDN-3448C5?logo=cloudinary&logoColor=white" alt="Cloudinary" />
</p>

<p align="center">
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-features">Features</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#-free-tier-limits">Free Tier Limits</a>
</p>

---

## 🧠 About

**VaultDrop** is a full-stack cloud storage web application inspired by Google Drive. It lets authenticated users upload, search, preview, share, and delete files — powered entirely by a serverless architecture with an edge-ready database and CDN-backed file delivery.

Built with **Next.js 16 App Router**, **Turso (libSQL/SQLite)** for the database, **Cloudinary** for file storage & delivery, and **NextAuth v5** for secure credential-based authentication.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Secure Authentication** | Email/password auth via NextAuth v5 with JWT sessions & bcrypt password hashing |
| 📤 **Drag & Drop Upload** | Upload files up to 100 MB via an intuitive drag-and-drop modal (React Dropzone) |
| 🔍 **File Search** | Instantly search files by name with real-time query filtering |
| 👁️ **File Preview** | In-browser preview for images, videos, and PDFs on a dedicated preview page |
| 📥 **Download & Delete** | One-click download and secure file deletion (removes from both DB and Cloudinary) |
| 🔗 **Share Files** | Share file links via Copy Link, WhatsApp, or Email directly from the UI |
| 🌙 **Dark Mode** | System-aware dark/light theme toggle with `next-themes` |
| ⚡ **Serverless APIs** | All backend logic runs as Next.js serverless API routes |
| 🗃️ **Edge Database** | Turso (libSQL) with Drizzle ORM for type-safe, edge-compatible SQL |
| ☁️ **CDN File Storage** | Cloudinary handles file uploads with automatic CDN delivery & format optimization |
| 🧩 **Glassmorphic UI** | Minimalist, professional design with backdrop blur, subtle shadows, and smooth transitions |
| 📱 **Responsive Design** | Fully responsive layout with sidebar navigation and adaptive file grid |
| 🚫 **Upload Cancellation** | Abort in-progress uploads with proper cleanup via AbortController |
| 🎨 **Skeleton Loading** | Animated skeleton placeholders while files are loading |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router, SSR, API Routes) |
| [React 19](https://react.dev/) | UI library |
| [TypeScript 5](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | Pre-built accessible UI components |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Dropzone](https://react-dropzone.js.org/) | Drag & drop file upload |
| [Sonner](https://sonner.emilkowal.dev/) | Toast notification system |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode support |

### Backend
| Technology | Purpose |
|---|---|
| [NextAuth v5](https://authjs.dev/) | Authentication (Credentials provider + JWT) |
| [Drizzle ORM](https://orm.drizzle.team/) | Type-safe SQL ORM |
| [Turso (libSQL)](https://turso.tech/) | Edge-compatible SQLite database |
| [Cloudinary](https://cloudinary.com/) | Cloud file storage & CDN delivery |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Password hashing |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client (Browser)                     │
│  ┌──────────┐  ┌───────────┐  ┌──────────┐  ┌───────────┐  │
│  │  Login   │  │ Register  │  │Dashboard │  │  Preview  │  │
│  │  Page    │  │   Page    │  │  + Grid  │  │   Page    │  │
│  └────┬─────┘  └─────┬─────┘  └────┬─────┘  └─────┬─────┘  │
└───────┼──────────────┼──────────────┼──────────────┼────────┘
        │              │              │              │
        ▼              ▼              ▼              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Next.js API Routes (Serverless)           │
│  ┌────────────┐ ┌──────────┐ ┌──────────┐ ┌─────────────┐  │
│  │ /api/auth/ │ │/api/auth/│ │/api/files│ │ /api/upload │  │
│  │ [...next]  │ │ register │ │  & [id]  │ │             │  │
│  └──────┬─────┘ └────┬─────┘ └────┬─────┘ └──────┬──────┘  │
└─────────┼────────────┼────────────┼───────────────┼─────────┘
          │            │            │               │
          ▼            ▼            ▼               ▼
   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐
   │ NextAuth │  │  Turso   │  │  Turso   │  │Cloudinary │
   │  (JWT)   │  │(libSQL)  │  │(libSQL)  │  │  (CDN)    │
   └──────────┘  └──────────┘  └──────────┘  └───────────┘
```

---

## 📁 Project Structure

```
vaultdrop/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx            # Login page with glassmorphic card
│   │   └── register/page.tsx         # Registration page
│   ├── (dashboard)/
│   │   └── dashboard/page.tsx        # Main dashboard with sidebar + file grid
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts  # NextAuth API handler
│   │   │   └── register/route.ts       # User registration endpoint
│   │   ├── files/
│   │   │   ├── route.ts              # GET: List/search user files
│   │   │   └── [id]/route.ts         # DELETE: Remove file from DB + Cloudinary
│   │   └── upload/route.ts           # POST: Upload file to Cloudinary + save metadata
│   ├── preview/
│   │   └── [id]/page.tsx             # File preview page (image/video/PDF)
│   ├── globals.css                   # Global styles + shadcn/ui theme tokens
│   ├── layout.tsx                    # Root layout (Inter font, ThemeProvider, Toaster)
│   └── page.tsx                      # Landing page
│
├── components/
│   ├── files/
│   │   ├── FileCard.tsx              # File card with share/download/delete actions
│   │   ├── FileGrid.tsx              # Responsive grid of file cards with search
│   │   └── UploadModal.tsx           # Drag-and-drop upload dialog with cancellation
│   ├── layout/
│   │   └── Sidebar.tsx               # Navigation sidebar with theme toggle & logout
│   ├── ui/                           # shadcn/ui components (button, dialog, input, etc.)
│   └── theme-provider.tsx            # next-themes wrapper component
│
├── lib/
│   ├── cloudinary.ts                 # Cloudinary SDK configuration
│   ├── db.ts                         # Drizzle ORM + Turso (libSQL) client setup
│   ├── schema.ts                     # Database schema (users & files tables)
│   └── utils.ts                      # Utility functions (cn for class merging)
│
├── auth.ts                           # NextAuth v5 configuration (Credentials + JWT)
├── proxy.ts                          # Middleware for route protection (/dashboard, /preview)
├── drizzle.config.ts                 # Drizzle Kit config for schema migrations
├── next.config.mjs                   # Next.js config (Cloudinary remote images)
├── components.json                   # shadcn/ui configuration
├── postcss.config.mjs                # PostCSS config for Tailwind CSS 4
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies & scripts
└── .gitignore                        # Git ignore rules
```

---

## 📋 Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| **Node.js** | ≥ 18.x | [Download](https://nodejs.org/) |
| **npm** | ≥ 9.x | Comes with Node.js |
| **Turso Account** | — | Free tier at [turso.tech](https://turso.tech/) |
| **Cloudinary Account** | — | Free tier at [cloudinary.com](https://cloudinary.com/) |
| **Git** | ≥ 2.x | For cloning the repository |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AmanVerma1067/VaultDrop.git
cd VaultDrop
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root:

```bash
touch .env.local
```

Add the following variables (see [How to Get These Values](#how-to-get-these-values) below):

```env
# ─── Turso Database ───────────────────────────────
TURSO_DATABASE_URL=libsql://your-database-name-your-username.turso.io
TURSO_AUTH_TOKEN=your_turso_auth_token

# ─── Cloudinary ───────────────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# ─── NextAuth ─────────────────────────────────────
AUTH_SECRET=your_random_secret_key
AUTH_URL=http://localhost:3000
```

### 4. Push Database Schema

```bash
npx drizzle-kit push
```

This creates the `users` and `files` tables in your Turso database.

### 5. Run the Development Server

```bash
npm run dev
```

### 6. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) — you're good to go!

---

## 🔐 How to Get These Values

<details>
<summary><strong>🗄️ Turso (Database)</strong></summary>

1. Sign up at [turso.tech](https://turso.tech/)
2. Install the Turso CLI:
   ```bash
   curl -sSfL https://get.tur.so/install.sh | bash
   ```
3. Authenticate:
   ```bash
   turso auth login
   ```
4. Create a database:
   ```bash
   turso db create vaultdrop
   ```
5. Get your database URL:
   ```bash
   turso db show vaultdrop --url
   ```
6. Create an auth token:
   ```bash
   turso db tokens create vaultdrop
   ```

</details>

<details>
<summary><strong>☁️ Cloudinary (File Storage)</strong></summary>

1. Sign up at [cloudinary.com](https://cloudinary.com/)
2. Go to your **Dashboard**
3. Copy the following from the **Account Details** section:
   - Cloud Name
   - API Key
   - API Secret

</details>

<details>
<summary><strong>🔑 NextAuth Secret</strong></summary>

Generate a secure random string:
```bash
openssl rand -base64 32
```
Paste the output as your `AUTH_SECRET` value.

</details>

---

## 🗃️ Database Schema

**`users` table:**
| Column | Type | Constraints |
|---|---|---|
| `id` | TEXT (UUID) | Primary Key, auto-generated |
| `name` | TEXT | NOT NULL |
| `email` | TEXT | NOT NULL, UNIQUE |
| `password` | TEXT | NOT NULL (bcrypt hashed) |
| `createdAt` | INTEGER (timestamp) | DEFAULT current timestamp |

**`files` table:**
| Column | Type | Constraints |
|---|---|---|
| `id` | TEXT (UUID) | Primary Key, auto-generated |
| `filename` | TEXT | NOT NULL |
| `fileUrl` | TEXT | NOT NULL (Cloudinary URL) |
| `fileType` | TEXT | NOT NULL (MIME type) |
| `size` | INTEGER | NOT NULL (bytes) |
| `publicId` | TEXT | NOT NULL, UNIQUE (Cloudinary public ID) |
| `uploadedBy` | TEXT | NOT NULL, FK → `users.id` |
| `createdAt` | INTEGER (timestamp) | DEFAULT current timestamp |

<details>
<summary><strong>Optional: Inspect database with Drizzle Studio</strong></summary>

```bash
npx drizzle-kit studio
```

</details>

<details>
<summary><strong>Optional: Local development without Turso</strong></summary>

If `TURSO_DATABASE_URL` is not set, the app falls back to a local SQLite file (`local.db`):

```bash
# Without Turso credentials, uses file:./local.db
npx drizzle-kit push
npm run dev
```

</details>

---

## ▶️ Running Locally

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build
npm start

# Lint check
npm run lint
```

The app will be available at **http://localhost:3000**.

### Quick Workflow

1. Open `http://localhost:3000` → landing page
2. Click **"Get Started"** → navigate to `/register`
3. Create an account with name, email, and password
4. Log in with your credentials at `/login`
5. You'll be redirected to the **Dashboard** (`/dashboard`)
6. Click **"Upload"** → drag & drop or select a file (max 100 MB)
7. Browse, search, preview, share, download, or delete your files

---

## 📡 API Reference

All API routes are protected by NextAuth session validation (except registration).

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user account |
| `POST` | `/api/upload` | Upload a file (multipart/form-data, max 100 MB) |
| `GET` | `/api/files?q={search}` | List/search files for the authenticated user |
| `DELETE` | `/api/files/:id` | Delete a file from Cloudinary and the database |

<details>
<summary><strong>Detailed request/response examples</strong></summary>

#### `POST /api/auth/register`
```json
// Request Body
{ "name": "John Doe", "email": "john@example.com", "password": "securepassword" }

// Response: 200 OK
{ "success": true }
```

#### `POST /api/upload`
```json
// Response: 200 OK
{
  "file": {
    "id": "uuid",
    "filename": "photo.jpg",
    "fileUrl": "https://res.cloudinary.com/...",
    "fileType": "image/jpeg",
    "size": 245760,
    "publicId": "vaultdrop/1714..._photo.jpg",
    "uploadedBy": "user-uuid"
  }
}
```

#### `GET /api/files?q=photo`
```json
// Response: 200 OK
{
  "files": [
    {
      "id": "uuid",
      "filename": "photo.jpg",
      "fileUrl": "https://res.cloudinary.com/...",
      "fileType": "image/jpeg",
      "size": 245760,
      "publicId": "vaultdrop/...",
      "uploadedBy": "user-uuid"
    }
  ]
}
```

#### `DELETE /api/files/:id`
```json
// Response: 200 OK
{ "success": true }
```

</details>

---

## 🌍 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import the repository on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Framework preset will auto-detect **Next.js**

3. **Add Environment Variables**

   In Vercel Dashboard → Project Settings → Environment Variables, add:

   | Variable | Value |
   |---|---|
   | `TURSO_DATABASE_URL` | Your Turso database URL |
   | `TURSO_AUTH_TOKEN` | Your Turso auth token |
   | `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name |
   | `CLOUDINARY_API_KEY` | Your Cloudinary API key |
   | `CLOUDINARY_API_SECRET` | Your Cloudinary API secret |
   | `AUTH_SECRET` | Your generated secret (`openssl rand -base64 32`) |
   | `AUTH_URL` | `https://your-domain.vercel.app` |

4. **Deploy** 🚀

   Vercel automatically handles serverless function scaling, edge caching, and zero-config builds.

---

## 💰 Free Tier Limits

VaultDrop is designed to run entirely on free tiers. Here are the limits to be aware of:

| Service | Free Tier Allowance | Notes |
|---|---|---|
| **Cloudinary** | 25 GB storage, 25 GB bandwidth/month | Supports images, videos, PDFs, and raw files. Auto-optimized delivery via CDN. Individual upload limit: **100 MB per file**. |
| **Turso** | 9 GB storage, 500 databases, 1 billion row reads/month | Edge-replicated SQLite. More than enough for file metadata storage. |
| **Vercel** | 100 GB bandwidth/month, serverless function execution | Auto-scaling serverless functions. Generous limits for personal/small-team use. |

> **Tip:** These free tiers are generous enough for personal projects and small teams. For higher traffic, each service offers affordable paid plans with seamless upgrades.

### Upload Constraints

- **Max file size per upload:** 100 MB (enforced client-side by React Dropzone)
- **Supported file types:** All file types are accepted — images, videos, PDFs, documents, archives, etc.
- **Preview support:** In-browser preview is available for images, videos (MP4, etc.), and PDFs. Other file types can be downloaded directly.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using Next.js, Turso, and Cloudinary
</p>
