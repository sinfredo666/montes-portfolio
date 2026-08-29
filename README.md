# MONTES.WORK — Single-Page Editorial Portfolio

An original, mobile-first, single-page visual portfolio and capability site for **MONTES**, styled with an **editorial-terminal / production-dossier** design system.

Built with **Astro**, **TypeScript**, and **Tailwind CSS**.

---

## 🛠 Local Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.

### 3. Production Build
```bash
npm run build
```
Generates static production output in the `dist/` directory.

---

## 🚀 Firebase Hosting Setup & Deployment

The static build is pre-configured for **Firebase Hosting** via `firebase.json`.

### 1. Install Firebase CLI (if not already installed)
```bash
npm install -g firebase-tools
```

### 2. Login & Initialize Firebase
```bash
firebase login
firebase init hosting
```
* **Public Directory**: `dist`
* **Configure as single-page app**: `Yes`
* **Automatic builds with GitHub Workflow**: `No` (or as desired)

### 3. Deploy to Production
```bash
npm run build
firebase deploy --only hosting
```

---

## 🌐 Custom Domain Connection (`montes.work`)

To point your custom **Squarespace** domain (`montes.work`) to your deployed site on Firebase Hosting:

1. Open your **Firebase Console** -> **Hosting** -> **Add Custom Domain**.
2. Enter `montes.work` (and `www.montes.work`).
3. Log into your **Squarespace Domain Dashboard**:
   * Navigate to **DNS Settings**.
   * Add the **A Records** provided by Firebase (e.g., pointing `@` to Firebase IP addresses).
   * Add the **CNAME Record** for `www` pointing to your Firebase hosting domain (e.g. `your-app.web.app`).
4. Firebase will automatically generate and activate a free SSL/TLS certificate for `montes.work`.

---

## ✉️ Contact Form Configuration

All contact copy and form validation states are configured in the frontend component `src/components/ContactForm.astro`.

To connect the form to a live backend service (e.g., Formspree, Netlify Forms, or Firebase Cloud Functions):
1. Create a `.env` file in the root directory:
   ```env
   PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id
   ```
2. Update the `action` attribute in `src/components/ContactForm.astro` to reference `import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT`.

---

## 📂 Data & Copy Centralization

All primary site copy, identity details, agency/brand lines, and section headlines are centralized in:
* [`src/config/siteConfig.ts`](file:///Users/neoheavyxiv/Downloads/MSITE/src/config/siteConfig.ts)

To change contact info, brand lines, or bio copy, edit `siteConfig.ts` directly.

---

## 🖼 Placeholder Replacement Guide

All media frames contain clearly coded, accessible B&W NYC temporary placeholders:
- **Still Photography**: Replace frames in Section `001 — STILL` (`src/components/MediaFrame.astro`).
- **Motion Reel**: Replace 16:9 motion container in Section `002 — MOTION` (`src/components/MotionFrame.astro`) with a YouTube/Vimeo `<iframe>` or HTML5 `<video>` element.
