<!-- <p align="center">
  <img src="https://img.icons8.com/fluency/96/hard-drive.png" alt="VaultDrop Logo" width="80" />
</p> -->

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

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Running Locally](#-running-locally)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Suggested Name](#-suggested-project-name)
- [License](#-license)

---

## 🧠 About

**VaultDrop** (originally *NextDrive*) is a full-stack cloud storage web application inspired by Google Drive. It allows authenticated users to upload, search, preview, share, and delete files — all powered by a serverless architecture with edge-ready database and CDN-backed file storage.

Built with **Next.js 16 App Router**, **Turso (libSQL/SQLite)** for the database, **Cloudinary** for file storage & delivery, and **NextAuth v5** for secure credential-based authentication.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Secure Authentication** | Email/password auth via NextAuth v5 with JWT sessions & bcrypt password hashing |
| 📤 **Drag & Drop Upload** | Upload files up to 100 MB using an intuitive drag-and-drop modal (React Dropzone) |
| 🔍 **File Search** | Search files by name with real-time query filtering |
| 👁️ **File Preview** | In-browser preview for images, videos, and PDFs with a dedicated preview page |
| 📥 **Download & Delete** | One-click download and secure file deletion (removes from both DB and Cloudinary) |
| 🔗 **Share Files** | Share file links via Copy Link, WhatsApp, or Email directly from the UI |
| 🌙 **Dark Mode** | System-aware dark/light theme toggle with `next-themes` |
| ⚡ **Serverless APIs** | All backend logic runs as Next.js serverless API routes |
| 🗃️ **Edge Database** | Turso (libSQL) with Drizzle ORM for type-safe, edge-compatible SQL |
| ☁️ **CDN File Storage** | Cloudinary handles file uploads with automatic CDN delivery & format optimization |
| 🧩 **shadcn/ui Components** | Beautiful, accessible UI components (Dialog, DropdownMenu, Button, Input, etc.) |
| 📱 **Responsive Design** | Fully responsive layout with a sidebar navigation and responsive file grid |
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
nextdrive-main/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx          # Login page (email/password)
│   │   └── register/page.tsx       # Registration page
│   ├── (dashboard)/
│   │   └── dashboard/page.tsx      # Main dashboard with sidebar + file grid
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts   # NextAuth API handler
│   │   │   └── register/route.ts        # User registration endpoint
│   │   ├── files/
│   │   │   ├── route.ts            # GET: List/search user files
│   │   │   └── [id]/route.ts       # DELETE: Remove file from DB + Cloudinary
│   │   └── upload/route.ts         # POST: Upload file to Cloudinary + save metadata
│   ├── preview/
│   │   └── [id]/page.tsx           # File preview page (image/video/PDF)
│   ├── globals.css                 # Global styles + shadcn/ui theme tokens
│   ├── layout.tsx                  # Root layout (Inter font, ThemeProvider, Toaster)
│   └── page.tsx                    # Landing/home page
│
├── components/
│   ├── files/
│   │   ├── FileCard.tsx            # Individual file card with actions (share/download/delete)
│   │   ├── FileGrid.tsx            # Responsive grid of file cards with search
│   │   └── UploadModal.tsx         # Drag-and-drop upload dialog
│   ├── layout/
│   │   └── Sidebar.tsx             # Navigation sidebar with theme toggle & logout
│   ├── ui/                         # shadcn/ui components (button, dialog, input, etc.)
│   └── theme-provider.tsx          # next-themes wrapper component
│
├── lib/
│   ├── cloudinary.ts               # Cloudinary SDK configuration
│   ├── db.ts                       # Drizzle ORM + Turso (libSQL) client setup
│   ├── schema.ts                   # Database schema (users & files tables)
│   └── utils.ts                    # Utility functions (cn for class merging)
│
├── auth.ts                         # NextAuth v5 configuration (Credentials + JWT)
├── proxy.ts                        # Middleware for route protection (/dashboard, /preview)
├── drizzle.config.ts               # Drizzle Kit config for migrations
├── next.config.mjs                 # Next.js config (Cloudinary remote images, TS settings)
├── components.json                 # shadcn/ui configuration
├── tailwind.config / postcss       # Tailwind CSS 4 + PostCSS setup
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies & scripts
└── .gitignore                      # Git ignore rules
```

---

## 📋 Prerequisites

Ensure you have the following installed/set up before running the project:

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
git clone https://github.com/yourusername/nextdrive.git
cd nextdrive
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local   # if .env.example exists
# OR create manually:
touch .env.local
```

Then populate it with the required variables (see [Environment Variables](#-environment-variables) section below).

### 4. Set Up the Database

See [Database Setup](#-database-setup) section below.

### 5. Run the Development Server

```bash
npm run dev
```

### 6. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) and you're ready to go!

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

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
# Generate one with: openssl rand -base64 32
AUTH_URL=http://localhost:3000
```

### How to Get These Values

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
   turso db create nextdrive
   ```
5. Get your database URL:
   ```bash
   turso db show nextdrive --url
   ```
6. Create an auth token:
   ```bash
   turso db tokens create nextdrive
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

## 🗃️ Database Setup

This project uses **Drizzle ORM** with **Turso (libSQL)** as the database. You need to push the schema to your Turso database before first use.

### Push Schema to Database

```bash
npx drizzle-kit push
```

This will create the `users` and `files` tables in your Turso database based on the schema defined in `lib/schema.ts`.

### Schema Overview

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

### Using Drizzle Studio (Optional)

To visually inspect your database:

```bash
npx drizzle-kit studio
```

### Local Development (Without Turso)

For local development without a Turso account, the app falls back to a local SQLite file (`local.db`) when `TURSO_DATABASE_URL` is not set. Just run the schema push against the local file:

```bash
# Without TURSO_DATABASE_URL set, it uses file:./local.db
npx drizzle-kit push
```

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

1. Open `http://localhost:3000` → you'll see the landing page
2. Click **"Get Started"** → navigate to `/register`
3. Create an account with name, email, and password
4. Log in with your credentials at `/login`
5. You'll be redirected to the **Dashboard** (`/dashboard`)
6. Click **"Upload"** → drag & drop or select a file (max 100 MB)
7. Browse, search, preview, share, download, or delete your files

---

## 📡 API Reference

All API routes are protected by NextAuth session validation (except registration).

### `POST /api/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:** `200 OK`
```json
{ "success": true }
```

---

### `POST /api/upload`

Upload a file to Cloudinary and save metadata.

**Headers:** Requires authenticated session  
**Body:** `multipart/form-data` with a `file` field  
**Max Size:** 100 MB

**Response:** `200 OK`
```json
{
  "file": {
    "id": "uuid",
    "filename": "photo.jpg",
    "fileUrl": "https://res.cloudinary.com/...",
    "fileType": "image/jpeg",
    "size": 245760,
    "publicId": "nextdrive/1714..._photo.jpg",
    "uploadedBy": "user-uuid",
    "createdAt": "2026-05-02T..."
  }
}
```

---

### `GET /api/files?q={search}`

Fetch all files for the authenticated user, optionally filtered by filename.

**Query Params:**
- `q` (optional) — search query to filter by filename

**Response:** `200 OK`
```json
{
  "files": [
    {
      "id": "uuid",
      "filename": "document.pdf",
      "fileUrl": "https://res.cloudinary.com/...",
      "fileType": "application/pdf",
      "size": 1048576,
      "publicId": "nextdrive/...",
      "uploadedBy": "user-uuid",
      "createdAt": "2026-05-02T..."
    }
  ]
}
```

---

### `DELETE /api/files/:id`

Delete a file from Cloudinary and remove its database record.

**Headers:** Requires authenticated session  
**Response:** `200 OK`
```json
{ "success": true }
```

---

## 🌍 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**

2. **Import the repository on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Framework preset will auto-detect **Next.js**

3. **Add Environment Variables**
   
   In the Vercel Dashboard → Project Settings → Environment Variables, add:
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `AUTH_SECRET`
   - `AUTH_URL` → `https://your-domain.vercel.app`

4. **Deploy** 🚀

> **Note:** Turso's free tier and Cloudinary's free tier are both generous enough for production use. Vercel automatically handles serverless function scaling.

---

## 💡 Suggested Project Name

> ### **VaultDrop**
> *A short, catchy name that evokes a secure vault for your files with the simplicity of a drag-and-drop experience.*

Other name ideas:
- **CloudStash** — Stash your files in the cloud
- **FileNest** — A cozy nest for your files
- **DropHive** — Hive of all your dropped files
- **SkyVault** — Your vault in the sky

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using Next.js, Turso, and Cloudinary
</p>
