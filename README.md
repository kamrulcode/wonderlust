
<div align="center">

  <svg width="100%" viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#071923"/>
        <stop offset="100%" stop-color="#15566A"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="320" rx="24" fill="url(#bg)"/>
    <circle cx="1040" cy="50" r="160" fill="#22D3EE" opacity=".12"/>
    <circle cx="1120" cy="300" r="140" fill="#22D3EE" opacity=".12"/>
    <text x="75" y="90" fill="#67E8F9" font-family="Arial" font-size="17" letter-spacing="4">NEXT.JS • SHADCN/UI</text>
    <text x="75" y="165" fill="white" font-family="Arial" font-size="55" font-weight="bold">Travel Profile</text>
    <text x="75" y="225" fill="white" font-family="Arial" font-size="55" font-weight="bold">Dashboard ✈</text>
    <text x="78" y="270" fill="#C5D8DF" font-family="Arial" font-size="19">Your journeys. Your stats. All in one place.</text>
    <rect x="815" y="65" width="280" height="205" rx="18" fill="#F8FAFC"/>
    <circle cx="955" cy="135" r="35" fill="#D8F4F6"/>
    <path d="M940 142 L955 112 L970 142 L955 155 Z" fill="#0E8798"/>
    <rect x="860" y="185" width="190" height="12" rx="6" fill="#CBD5E1"/>
    <rect x="885" y="210" width="140" height="12" rx="6" fill="#CBD5E1"/>
    <rect x="900" y="238" width="110" height="20" rx="6" fill="#0EA5B7"/>
  </svg>

  # ✈️ Travel Profile Dashboard

  **A modern and responsive travel dashboard built with Next.js and shadcn/ui.**

  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

</div>

---

## 🌍 About The Project

Travel Profile Dashboard is a clean, modern dashboard UI concept designed to give travelers a quick overview of their profile and travel activities.

It combines a minimal interface, elegant profile card, and colorful statistics to create a simple yet visually appealing experience.

## ✨ Features

- 👤 **Profile Overview** — Profile picture, name, location, and personal information.
- 🧳 **Travel Statistics** — Total bookings, countries visited, upcoming trips, and total spending.
- 🎨 **Modern UI** — Minimal dark background with clean white cards.
- 🧩 **Reusable Components** — Built using shadcn/ui components.
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop.
- ⚡ **Easy Customization** — Simple and organized component structure.

## 🖼️ Preview

<!-- Replace with your actual project screenshot -->

<div align="center">
  <img src="./public/preview.png" alt="Travel Dashboard Preview" width="100%" />
  <p><i>Travel Profile Dashboard UI</i></p>
</div>

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ React | UI Development |
| ▲ Next.js | React Framework |
| 📘 TypeScript | Type Safety |
| 🎨 Tailwind CSS | Styling |
| 🧩 shadcn/ui | UI Components |
| 🔷 Lucide React | Icons |

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
```

### 2. Navigate to Project

```bash
cd your-repository
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install UI Components

```bash
npx shadcn@latest add card button avatar
npm install lucide-react
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📂 Project Structure

```text
travel-dashboard/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── ui/
│       ├── avatar.tsx
│       ├── button.tsx
│       └── card.tsx
│
├── public/
│   └── preview.png
│
├── package.json
└── README.md
```

## 🎨 Customization

### Update Profile Information

You can customize the following information inside `app/page.tsx`:

- Traveler Name
- Location
- Membership Date
- Nationality
- Profile Picture

### Update Travel Statistics

Modify the statistics array to display your own data.

```tsx
const statistics = [
  {
    title: "Total Bookings",
    value: "12",
  },
  {
    title: "Countries Visited",
    value: "18",
  },
  {
    title: "Upcoming Trips",
    value: "2",
  },
  {
    title: "Total Spent",
    value: "$15,750",
  },
];
```

## 📱 Responsive Design

| Device | Layout |
|---|---|
| 📱 Mobile | Single column |
| 📲 Tablet | Adaptive grid |
| 💻 Desktop | Two-column dashboard |

## 🗺️ Future Improvements

- [ ] Connect profile data with MongoDB.
- [ ] Implement user authentication.
- [ ] Add edit profile functionality.
- [ ] Add profile image upload.
- [ ] Fetch travel statistics dynamically.
- [ ] Add loading and error states.

## 🤝 Contributing

Contributions, suggestions, and feedback are always welcome!

Feel free to fork this repository and submit a pull request.

## 📄 License

This project is available for learning and portfolio purposes.

---

<div align="center">

  ### ❤️ Built with Next.js & shadcn/ui

  **If you like this project, consider giving it a ⭐!**

  <sub>Made with passion and a love for clean UI.</sub>

</div>
