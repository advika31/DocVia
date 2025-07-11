---

# 🩺 DocVia

A modern doctors appointment platform where patients can book consultations — including secure video consultations — doctors can manage their profiles & payouts, and admins can approve doctors and payments.

Built with Next.js, Prisma, Clerk, and Vonage.

---

## 🚀 Features

* 🔐 Authentication & billing with Clerk
* 🩺 Doctor onboarding, verification & management
* 🗓️ Appointment booking & credits system
* 🎥 Video consultations powered by Vonage
* 🔒 Admin panel for approving doctors & payouts
* 📱 Responsive design with TailwindCSS

---

## 🛠 Tech Stack

* **Next.js** (App Router + Server Components)
* **Prisma** + PostgreSQL
* **Clerk** (auth + billing)
* **Vonage** (video calls)
* **TailwindCSS**

---

## 📦 Setup

### 1️⃣ Clone & install

```bash
git clone https://github.com/advika31/DocVia.git
cd DocVia
npm install
```

### 2️⃣ Configure environment

Create a `.env` file:

```env
DATABASE_URL=your_postgres_url

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
ENABLE_BILLING=true

VONAGE_API_KEY=your_vonage_api_key
VONAGE_API_SECRET=your_vonage_api_secret
VONAGE_APPLICATION_ID=your_vonage_app_id
VONAGE_PRIVATE_KEY=your_rsa_private_key_if_using_RS256
```

### 3️⃣ Migrate DB

```bash
npx prisma migrate dev --name init
npx prisma studio  # optional: view DB
```

---

## 🧪 Run locally

```bash
npm run dev
```

> ✨ PRs, feedback & suggestions are welcome!
