# 🌍 Tournest BD

Welcome to **Tournest BD** — a modern travel and tourism management platform where tourists can explore destinations, book packages, connect with guides, and share travel stories.  
It’s built with **React, Firebase, Express, and MongoDB** ensuring a seamless and secure experience.

---

## 🚀 Features

- 🔐 **Authentication System** – Sign up, sign in, social login (Google).
- 🧑‍💼 **Role-based Dashboard** – Separate panels for **Admin, Tourist, and Tour Guide**.
- 📦 **Tour Packages** – Browse and book packages with detailed info.
- 👩‍🏫 **Tour Guides** – Join as a guide or hire guides for trips.
- 📖 **Travel Stories** – Share and manage real travel experiences.
- 💳 **Payments** – Secure booking and payment system.
- 📊 **Admin Controls** – Manage users, candidates, payments, and bookings.
- 📱 **Responsive UI** – Mobile, tablet, and desktop friendly.
- ✨ **Modern Animations** – Smooth transitions and engaging visuals.

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- Framer Motion
- React Router DOM

**Backend & Auth:**
- Firebase Authentication
- Express.js
- MongoDB
- Axios (secure requests)

**Others:**
- ESLint + Prettier
- Vercel / Firebase Hosting

---

## ⚙️ Installation & Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/mostakim69/tournest-bd.git
cd tournest-bd
npm install



mostakim69-tournest-bd/
├── README.md
├── eslint.config.js
├── firebase.json
├── index.html
├── package.json
├── structure.md
├── vite.config.js
├── vite.logger.plugin.js
├── .firebaserc
├── public/
│   └── CNAME
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── loggerClient.js
│   ├── main.jsx
│   ├── animation/
│   │   ├── auth-lottie.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   └── motion.js
│   ├── assets/
│   │   ├── assets.js
│   │   └── images/
│   │       └── index.js
│   ├── console/
│   │   ├── error.json
│   │   └── log.json
│   ├── contexts/
│   │   └── AuthContext/
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── hooks/
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useFetchData.js
│   │   ├── useHelmet.jsx
│   │   ├── usePostData.jsx
│   │   ├── useSecureQuery.jsx
│   │   ├── useSecureUpdate.js
│   │   └── useUserRole.jsx
│   ├── modules/
│   │   ├── Auth/
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── AuthRoute.jsx
│   │   │   ├── index.js
│   │   │   ├── components/
│   │   │   │   ├── SigninForm.jsx
│   │   │   │   ├── Signout.jsx
│   │   │   │   ├── SignUpForm.jsx
│   │   │   │   └── SocialLogin.jsx
│   │   │   └── pages/
│   │   │       ├── ForgotPass.jsx
│   │   │       ├── Signin.jsx
│   │   │       └── SignUp.jsx
│   │   ├── Dashbaord/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── dashbourdRoutes.jsx
│   │   │   ├── AddStories/
│   │   │   │   └── AddStories.jsx
│   │   │   ├── Admin/
│   │   │   │   ├── AddPackage/
│   │   │   │   │   └── AddPackage.jsx
│   │   │   │   ├── Bookings/
│   │   │   │   │   ├── AllBookings.jsx
│   │   │   │   │   └── BookingDetails.jsx
│   │   │   │   ├── ManageCandidate/
│   │   │   │   │   ├── CandidateCard.jsx
│   │   │   │   │   └── ManageCandidate.jsx
│   │   │   │   ├── ManageUsers/
│   │   │   │   │   ├── ManageUsers.jsx
│   │   │   │   │   └── UsersRow.jsx
│   │   │   │   └── Payments/
│   │   │   │       ├── AllPayments.jsx
│   │   │   │       └── PaymentCard.jsx
│   │   │   ├── ManageProfile/
│   │   │   │   └── ManageProfile.jsx
│   │   │   ├── ManageStories/
│   │   │   │   ├── ManageStories.jsx
│   │   │   │   └── components/
│   │   │   │       ├── EditStoryModal.jsx
│   │   │   │       └── StoryCard.jsx
│   │   │   ├── Overview/
│   │   │   │   └── Overview.jsx
│   │   │   ├── TourGuides/
│   │   │   │   ├── TourGuides.jsx
│   │   │   │   ├── AssignedTour/
│   │   │   │   │   ├── AssignedTour.jsx
│   │   │   │   │   └── AssignedTourCard.jsx
│   │   │   │   └── GuideProfile/
│   │   │   │       └── GuideProfile.jsx
│   │   │   └── Tourist/
│   │   │       ├── Bookings/
│   │   │       │   ├── BookingCard.jsx
│   │   │       │   └── MyBookings.jsx
│   │   │       ├── JoinTourGuide/
│   │   │       │   └── JoinTourGuide.jsx
│   │   │       └── PaymentBooking/
│   │   │           ├── PaymentBooking.jsx
│   │   │           └── PaymentForm.jsx
│   │   ├── landing/
│   │   │   ├── index.js
│   │   │   └── home/
│   │   │       ├── Home.jsx
│   │   │       ├── TourismAndGuides.jsx
│   │   │       ├── Bannnerr/
│   │   │       │   └── Banner.jsx
│   │   │       ├── CallToActionFull/
│   │   │       │   └── CallToActionFull.jsx
│   │   │       ├── HowItWorks/
│   │   │       │   └── HowItWorks.jsx
│   │   │       ├── LiveStats/
│   │   │       │   └── LiveStats.jsx
│   │   │       ├── NewsletterSignup/
│   │   │       │   └── NewsletterSignup.jsx
│   │   │       ├── Overview/
│   │   │       │   ├── Overview.jsx
│   │   │       │   └── Stories/
│   │   │       │       ├── Stories.jsx
│   │   │       │       ├── StoryCard.jsx
│   │   │       │       └── StoryCard.jsx~
│   │   │       ├── RandomGuides/
│   │   │       │   └── RandomGuides.jsx
│   │   │       ├── ReactTab/
│   │   │       │   └── ReactTab.jsx
│   │   │       ├── Testimonials/
│   │   │       │   └── Testimonials.jsx
│   │   │       ├── TrendingDestinations/
│   │   │       │   └── TrendingDestinations.jsx
│   │   │       └── WhyChooseUs/
│   │   │           └── WhyChooseUs.jsx
│   │   ├── Packages/
│   │   │   ├── PackageDetails/
│   │   │   │   └── PackageDetails.jsx
│   │   │   └── Packages/
│   │   │       ├── PackageCard.jsx
│   │   │       └── Packages.jsx
│   │   └── shared/
│   │       ├── Layout/
│   │       │   ├── CommonFooter.jsx
│   │       │   ├── index.js
│   │       │   ├── Navbar.jsx
│   │       │   ├── NavbarDrawer.jsx
│   │       │   ├── navbarLinksConstant.jsx
│   │       │   ├── RootLayout.jsx
│   │       │   ├── SidebarLink.jsx
│   │       │   ├── sidebarLinks.js
│   │       │   └── Spinner.jsx
│   │       └── ui/
│   │           ├── Avatar.jsx
│   │           ├── Brand.jsx
│   │           ├── Button.jsx
│   │           ├── DropDown.jsx
│   │           ├── index.js
│   │           ├── Input.jsx
│   │           └── swalToast.js
│   ├── pages/
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Community/
│   │   │   └── CommunityPage.jsx
│   │   ├── faq/
│   │   │   ├── faq.constant.js
│   │   │   └── FAQ.jsx
│   │   └── PrivacySection/
│   │       └── PrivacySection.jsx
│   ├── router/
│   │   ├── ErrorPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── router.jsx
│   └── utils/
│       ├── axiosInstance.js
│       ├── customAlert.js
│       ├── deleteData.js
│       ├── ErrorMessage.jsx
│       ├── fetchData.js
│       ├── PageIntro.jsx
│       ├── postData.js
│       ├── TypeWriterEffect.jsx
│       └── updateData.js
└── .firebase/
    └── hosting.ZGlzdA.cache



## 🧭 Routing Structure (with Layouts)

### 🔐 Auth Layout

- `/login` → `Login.jsx`
- `/register` → `Register.jsx`
- `/forgot-password` → `ForgotPassword.jsx`

### 🏠 Main Layout (Landing Pages)

- `/` → `Home.jsx`
- `/about` → `About.jsx`
- `/contact` → `Contact.jsx`
- `/faq` → `Faq.jsx`
- `/privacy-policy` → `PrivacyPolicy.jsx`
- `/terms-and-conditions` → `TermsCondintion.jsx`


### 📚 Blog Feature (via `BlogsLayout.jsx`)

- `/blogs` → `Blogs.jsx`
- `/blogs/:id` → `BlogDetails.jsx`
- `/create-blog` → `CreateBlog.jsx`


### 👤 Profile

- `/my-profile` → `MyProfile.jsx`
- `/update-profile` → `UpdateProfile.jsx`

---

## 🔑 Features

### ✅ Authentication

- Firebase Auth integration
- Login, Register, Forgot Password
- Auth-protected routes


### 📝 Blog System

- View all blogs
- Blog details with comments, read time, tags
- Create and share new blogs


---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Routing**: React Router&#x20;
- **Forms**: React Hook Form, React Day Picker
- **State Management**: React Context API (AuthProvider)
- **Animations**: Lottie
- **Toast Notifications**: React Hot Toast
- **Deployment**: GitHub Pages / Vercel / Netlify (configure as needed)
- **Build Tool**: Vite

---

## 📦 Installation

```bash
bun install  # or npm install
bun run dev  # or npm run dev
```

---

## 📌 TODOs

- ***

## 👏 Credits

- Design inspired by classic cooking & recipe books
- Icons via Lucide and Heroicons
- Lottie animations from LottieFiles

---

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ for food enthusiasts and aspiring chefs.

> "Food is symbolic of love when words are inadequate." — Alan D. Wolfelt

----- preivous version ------
---

---

## 🚀 Features

### 🔐 Authentication & Security

- **Email/Password Login**: Secure user authentication via Firebase.
- **Google Sign-In**: Quick access using Google accounts.
- **Protected Routes**: Restricts access to sensitive pages like profile and recipe details.
- **Password Reset**: Users can reset passwords through email verification.


### 👤 User Profile

- **Profile Page**: View and edit user information, including display name and photo.
- **Update Profile**: Modify personal details securely.

### 📄 Additional Pages

- **About**: Learn more about FlavorBook.
- **Contact**: Get in touch with the team.
- **FAQ**: Frequently Asked Questions.
- **Privacy Policy**: Understand how user data is handled.
- **Terms & Conditions**: Legal information regarding the use of FlavorBook.

### 🎨 UI/UX Enhancements

- **Responsive Design**: Optimized for various devices.
- **Tailwind CSS & DaisyUI**: Utilized for styling and component design.
- **Lottie Animations**: Engaging animations for better user experience.
- **Swiper**: Interactive sliders for showcasing content.

---


## <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50"> A Little More About Me...  

Hello i'm Md Mostakim Hosen.
<p>I'm a passionate Frontend Developer with a strong focus on creating clean, responsive, and user-friendly web interfaces. I enjoy building modern web applications using technologies like HTML, CSS, JavaScript, React.js, and Tailwind CSS. I believe in writing readable code, maintaining UI consistency, and ensuring a smooth user experience across all devices. I'm always eager to learn new tools and improve my skills to deliver better results.

</p>

```javascript
const mostakim = {
  pronouns: "he" | "him",
  code: [Javascript, Typescript, HTML, CSS, Python, Java],
  tools: [React, Node, Storybook, Styled-Components],
  architecture: ["microservices", "event-driven", "design system pattern"],
  techCommunities: {
                        coorganizer: "AfroPython",
                        speaker: "Latinity",
                        mentor: "EducaTRANSforma"
                      },
 challenge: "I am doing the #100DaysOfCode challenge focused on react and typescript"
}
```


<img src="https://i.postimg.cc/bvR5Q4QY/Whats-App-Image-2025-06-26-at-8-36-49-PM.jpg" alt="Banner"  width="100%" height="auto" />

## 🌐 Socials:
 [![email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:mdmostakimhosen35@gmail.com) 
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/MostakimHosennnn)
[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](https://discord.gg/mostakim520807) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/posterboy3369) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/test) [![Pinterest](https://img.shields.io/badge/Pinterest-%23E60023.svg?logo=Pinterest&logoColor=white)](https://pinterest.com/mdmostakimhosen35) [![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?logo=TikTok&logoColor=white)](https://tiktok.com/@posterboy369) [![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/test) [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@PosterBoy3369) 

# 💻 Tech Stack:
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white)
 ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)  ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)  ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)  ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white) ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
# 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api?username=Mostakim69&theme=swift&hide_border=true&include_all_commits=true&count_private=true)<br/>
![](https://nirzak-streak-stats.vercel.app/?user=Mostakim69&theme=swift&hide_border=true)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=Mostakim69&theme=swift&hide_border=true&include_all_commits=true&count_private=true&layout=compact)

---