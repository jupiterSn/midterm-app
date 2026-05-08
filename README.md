Main Architecture choice:
layered client-server architecture:
where i combine(frontend, backend, database, API communication, organized folders reusable components)assuming everything exist in this app currently
App
src/
│
├── layouts/
│   ├── AuthLayout.tsx
│   └── MainLayout.tsx
│
├── pages/
│   ├── auth/
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   │
│   └── main/
│       ├── Dashboard.tsx
│       ├── Profile.tsx
│       └── Settings.tsx
│
├── routes/
│   ├── AppRoutes.tsx
│   └── ProtectedRoute.tsx

installed, react router dom, and axios. explain here later 

deleted unecessary files and clean app.tsx
Professionals remove boilerplate before building architecture.
We want:
full control
clean structure
no unnecessary code


explain guard here when use it 
guard flow:
User requests page
        ↓
Guard runs
        ↓
Authenticated?
   YES       NO
    ↓         ↓
Allow      Redirect