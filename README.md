# Signalist Stock Market

**A real-time financial market tracking platform built with Next.js that allows users to monitor global stocks, heatmaps, and financial news through interactive TradingView widgets.**

![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-6.20.0-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Better-Auth](https://img.shields.io/badge/Better--Auth-1.3.26-EB5454?style=flat-square)
![Inngest](https://img.shields.io/badge/Inngest-3.44.1-000000?style=flat-square)

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

| Hero Overview |  Top Stories |
| :---: | :---: |
| ![Hero Placeholder](https://i.ibb.co/MxGrRHWx/Untitled.png) | ![Top Stories](https://i.ibb.co/yFNvXn7T/Untitled2.png) |

| Market News | Login Screen |
| :---: | :---: |
| ![News Placeholder](https://i.ibb.co/JwMs9skb/market-news.png) | ![Login Placeholder](https://i.ibb.co/R4V4RD5y/sign-up-page.png) |

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
