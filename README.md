# Signalist Stock Market

**A generic, real-time financial market tracking application.**

[**Visit Live Website**](https://signalist-stock-market.vercel.app)

---

## 📖 Introduction
**Signalist Stock Market** is a modern web application designed for traders, investors, and financial enthusiasts who need quick, visual access to global market data. By integrating powerful TradingView widgets, this platform provides a comprehensive dashboard for monitoring market trends, stock heatmaps, and breaking news in real-time.

## 🎯 Audience & Benefits
This project is built for:
*   **Traders & Investors**: To get a high-level overview of market performance and identify trending assets.
*   **Financial Analysts**: To visualize data through heatmaps and timelines.
*   **General Users**: To stay updated with the latest financial news and stock quotes.

**Key Benefits:**
*   **Real-Time Data**: Instant access to market movements without page refreshes.
*   **Visual Analytics**: Heatmaps and charts make complex data easy to digest.
*   **User Personalization**: Secure authentication system for user accounts.

## 🛠️ Tech Stack
This project utilizes the latest web technologies for performance and scalability:

*   **Framework**: Next.js 16 (App Router)
*   **Language**: TypeScript 5.9
*   **Styling**: Tailwind CSS 4, Shadcn/UI, Radix UI
*   **Authentication**: Better-Auth
*   **Database**: MongoDB & Mongoose
*   **Data Visualization**: TradingView Widgets
*   **Background Jobs**: Inngest

## 📸 Screenshots
*(See "How to Add Images" below to replace these placeholders)*

| Dashboard Overview | Stock Heatmap |
| :---: | :---: |
| ![Dashboard Placeholder](https://i.ibb.co/MxGrRHWx/Untitled.png) | ![Heatmap Placeholder](https://placehold.co/300x200?text=Stock+Heatmap) |

| Market News | Login Screen |
| :---: | :---: |
| ![News Placeholder](https://placehold.co/300x200?text=Market+News) | ![Login Placeholder](https://placehold.co/300x200?text=Login+Screen) |

### ℹ️ How to Add Images
To replace the placeholders above with your own screenshots:
1.  Take screenshots of your application (keep them around 300x200px or similar aspect ratio for consistency).
2.  Create a folder named `public/images` in your project directory.
3.  Add your image files (e.g., `dashboard.png`, `heatmap.png`) to that folder.
4.  Edit this `README.md` file and replace the links.
    *   Change `https://placehold.co/300x200?text=Dashboard+Overview` to `./public/images/dashboard.png` (or just `/images/dashboard.png` if hosted).
    *   *Note: For GitHub, it's best to push the images to the repo and use relative paths like `images/dashboard.png` (assuming you move them to a root `images` folder) or `public/images/dashboard.png`.*

## 💻 Getting Started (For Developers)

Follow these instructions to run the project locally.

### Prerequisites
*   Node.js (Latest LTS recommended)
*   pnpm (or npm/yarn)
*   MongoDB URI

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/live-time-stocks-market.git
    cd live-time-stocks-market
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory and add your required environment variables (e.g., MongoDB connection string, Auth secrets).
    ```env
    DATABASE_URL=your_mongodb_connection_string
    BETTER_AUTH_SECRET=your_auth_secret
    BETTER_AUTH_URL=http://localhost:3000
    # Add other necessary keys from project configuration
    ```

4.  **Run the development server**
    ```bash
    pnpm run dev
    ```

5.  **Open the app**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.
