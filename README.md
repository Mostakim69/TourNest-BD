Repository: mostakim69/tournest-bd
Files analyzed: 122

Estimated tokens: 182.4k

Directory structure:
└── mostakim69-tournest-bd/
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


================================================
FILE: README.md
================================================