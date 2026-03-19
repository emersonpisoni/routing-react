# Navigation with Link and NavLink

## 🎯 Objective

Navigate between routes without triggering a full page reload.

---

## 📌 Why Navigation Matters

In traditional web applications, navigation happens through `<a>` tags, which reload the entire page.

In React (SPA), we want:

* Faster navigation
* No full reload
* State preservation

---

## 🔗 Link Component

The `Link` component is used to navigate between routes.

### Example:

```jsx
import { Link } from "react-router-dom";

<Link to="/about">Go to About</Link>
```

### Key Points:

* Renders an `<a>` tag under the hood
* Prevents full page reload
* Updates the URL and UI instantly

---

## 🧠 Mental Model

```txt
Click Link → React Router intercepts → URL updates → Component changes
```

---

## 🧭 Adding Navigation to the App

Update your `App.jsx`:

```jsx
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>React Routing Study</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Outlet />
    </div>
  );
}
```

---

## 🚨 Common Mistake

❌ Using `<a href="/about">`
✔️ Use `<Link to="/about">`

Why?

* `<a>` triggers full reload
* `<Link>` keeps navigation inside React

---

## 🌟 NavLink Component

`NavLink` is similar to `Link`, but adds **active state awareness**.

### Example:

```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/about">About</NavLink>
```

---

## 🎨 Active Styling

You can style active links dynamically:

```jsx
<NavLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })}
>
  About
</NavLink>
```

---

## 🧠 When to Use What

| Component | Use Case                             |
| --------- | ------------------------------------ |
| Link      | Simple navigation                    |
| NavLink   | Navigation menus (with active state) |

---

## 🧪 Practice Exercise

1. Replace all `Link` components with `NavLink`
2. Add active styling (change color when active)
3. Add a new route `/services` and include it in the navbar

---

## ✅ What You Learned

* How navigation works in React Router
* Difference between `Link` and `NavLink`
* How to avoid full page reloads
* How to highlight active routes

---

## 🚀 Next Step

Next topic:
👉 **Layout Routes and `<Outlet />` (Deep Dive)**

You will learn how to:

* Create reusable layouts
* Structure your app like a real-world project
* Separate UI from routing logic

Next topics:

- Dynamic Routes
- useNavigate
- 404 / errorElement
- loader (data fetching)
- action (forms)
- protected routes
- lazy loading
- query params
- advanced patterns