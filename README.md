# 🛒 Aguizon Store - React E-commerce Admin & Client Panel

**Aguizon** is a responsive and modular e-commerce web app built with **React**, offering both a user-facing store and an admin panel for product management. This project uses component-based architecture, React hooks, and routing to create a dynamic shopping experience.

---

## 🚀 Technologies

- ⚛️ **React**
- 🔁 **React Router DOM**
- 🧩 **React Context API**
- 💄 **React Bootstrap**
- 🎨 **React Icons — Icon library integration**
- 🔔 **SweetAlert2 — Beautiful alert modals and notifications**
- 📦 **Vite**
- ☁️ **Vercel** (deployment)
- 🔐 **Custom Protected Routes**

---

## 🌟 Features

### 🛍️ Client Side
- Browse products by category (Electronics, Kids, Newest)
- Search bar and product filtering
- Add/remove favorites
- Shopping cart with local storage persistence

### 🛠️ Admin Panel
- Secure login
- Product listing for management
- Edit and delete product options
- Conditional access via `ProtectedRoutes`

### 📱 Responsive Design
- Fully responsive layout using Bootstrap

---

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Aleclto7/proyecto-final-AC/tree/master
cd e-commerce
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```
The app will be available at http://localhost:5173 by default.

## 🔐 Environment Notes
Authentication is managed via local context.

Product data is obtained from a simulated backend using the MockAPI tool.

## 🌐 Deployment
This project is configured for deployment on Vercel. The vercel.json file handles routing and build instructions.

You can deploy this project by pushing it to GitHub and importing it from your Vercel dashboard.

## 👨‍💻 Author

**Alexis Calixto**  
[GitHub](https://github.com/Aleclto7) · [LinkedIn](https://www.linkedin.com/in/alexis-calixto-9a608a233/?originalSubdomain=ec)

---