# View Transitions API - Proof of Concept

## 📌 Introduction
The **View Transitions API** is a modern web feature that enables smooth transitions between different states of a webpage. It allows elements to animate between changes, creating a seamless experience when navigating or updating content dynamically.

### 🔍 How View Transitions Work
1. **Assign `view-transition-name` to elements** – This marks elements that should animate between states.
2. **Use `document.startViewTransition()`** – This triggers the transition when updating the DOM.
3. **Customize animations using `::view-transition-old(name)` and `::view-transition-new(name)`**.

## 🚀 Running the Project
This PoC (Proof of Concept) demonstrates View Transitions in a **Single Page Application (SPA)** setup, as full-page navigation does not currently support animations in Chromium v131.

### 📂 Project Structure
```
/your-project-folder
│── example_spa/
│   ├── index.html
│   ├── script.js
│   └── styles.css
│── example_cross/
│   ├── index.html
│   ├── page2.html
│   ├── script.js
│   └── styles.css
│── assets/
│   ├── image1.jpg
│   └── image2.jpg
│── README.md
```

### 🛠️ Prerequisites
Ensure you have **Node.js** installed, as we will use `npx live-server` to run the project.

### ▶️ Start the Project
Run the following command inside the project folder:
```sh
npx live-server
```
This will open the project in your default browser at `http://127.0.0.1:8080`.

### 🎬 How to Test
1. Open the page in **Chrome 111+ or a Chromium-based browser**.
2. Click the "Go to Page 2" button.
3. Observe the **smooth transition effect** between images and text.

## ⚠️ Known Limitations
- **Full-page reloads do not preserve transitions in Chromium v131+.**
- This example uses **SPA-style navigation** to demonstrate View Transitions.
- **Browser support**: Currently available only in **Chrome, Edge, and other Chromium browsers**.

## 📚 More Resources
- [MDN Docs on View Transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [Chromium Blog - View Transitions](https://developer.chrome.com/docs/web-platform/view-transitions/)

---
Enjoy experimenting with **View Transitions API! 🚀**
