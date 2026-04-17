# 🤝 KeenKeeper

> **Keep your friendships alive.**
> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

🔗 **Live Site:** [https://keen-keeper-xi-plum.vercel.app](https://keen-keeper-xi-plum.vercel.app)  

---

## 📖 Description

KeenKeeper is a friendship relationship manager that helps you stay in touch with the people who matter most. Track when you last contacted friends, set goals for how often to reach out, and log interactions like calls, texts, and video chats — all in one place.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router |
| **React.js** | UI component library |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Tailwind component library |
| **Recharts** | Pie chart for analytics |
| **React Icons** | Icon library |
| **React Toastify** | Toast notifications |
| **Vercel** | Deployment |

---

## ✨ 3 Key Features

### 1. 📋 Friend Status Tracking
Every friend has a live status — **Overdue**, **Almost Due**, or **On Track** — based on how long it's been since your last contact. Cards are color-coded so you can instantly see who needs attention.

### 2. ⚡ Quick Check-In & Timeline Logging
From any friend's detail page, you can log a **Call**, **Text**, or **Video** interaction with one click. Each interaction is instantly added to the Timeline with the date and type, giving you a full history of your connections.

### 3. 📊 Friendship Analytics
The Stats page shows a beautiful **donut pie chart** (powered by Recharts) that visualizes your interaction breakdown by type — so you can see whether you prefer calling, texting, or video chatting with your friends.

---

## 🚀 Project Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/keen-keeper.git

# 2. Navigate into the project folder
cd keen-keeper

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Prerequisites
- Node.js 18+
- npm or yarn

---

## 📸 Screenshots

### 🏠 Home Page
<img width="1892" height="915" alt="Screenshot 2026-04-17 185513" src="https://github.com/user-attachments/assets/b0ce3cc2-1ae2-4f57-b63c-d56b066e78e0" />

> Friend grid with status cards and summary counters

### 👤 Friend Details Page
<img width="1899" height="803" alt="Screenshot 2026-04-17 185558" src="https://github.com/user-attachments/assets/f23aa367-47cd-44ec-adce-92c998a5cd56" />

> Detailed friend info, stats, and quick check-in buttons

### 📜 Timeline Page

<img width="1894" height="914" alt="Screenshot 2026-04-17 185736" src="https://github.com/user-attachments/assets/8e6ea308-9f18-4554-a59c-56e2062f3ce2" />

> Full interaction history with icons and dates

### 📊 Analytics Page
<img width="1899" height="764" alt="Screenshot 2026-04-17 185820" src="https://github.com/user-attachments/assets/02ef7efd-6e81-478a-91dd-86bb434fd1f9" />
> Donut pie chart showing interactions by type

---

## 📁 Project Structure

```
src/
  app/
    page.js                 → Home page
    friends/[id]/
      page.js               → Friend details page
    timeline/
      page.js               → Timeline page
    stats/
      page.js               → Analytics page
    not-found.js            → 404 page
  components/
    navbar/                 → Navbar with active link highlighting
    home/                   → Banner, FriendCard, FriendCounter
    timeline/               → Timeline entries
    stats/                  → Pie chart analytics
    footer/                 → Footer
  context/
    FriendsContext.jsx      → Global state for friends & timeline
public/
  data.json                 → Friend profiles data
```

---

## 👤 Author

Made with ❤️ by Ahanaf Intesher.
