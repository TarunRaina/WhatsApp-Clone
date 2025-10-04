💬 WhatsApp Clone

🧠 Tech Stack
Layer	Tech
Frontend	React.js, Context API, WebRTC, Socket.IO Client
Backend	Node.js, Express.js, Socket.IO
Database	MongoDB (Mongoose ORM)
Auth & Messaging	Twilio (for OTP: email & mobile)
Media Storage	Cloudinary
Real-Time	WebSockets
Deployment	(Add your platform: Render / Vercel / Netlify / etc.)
🔥 Core Features

✅ OTP Login via Twilio (both phone & email verification)
💬 Instant Messaging using Socket.IO — because lag is a sin
📞 Voice & Video Calls with WebRTC integration
📷 Media Sharing — images, videos, files, you name it
🧠 User Statuses — online, offline, typing, last seen
📜 Stories / Status Uploads like WhatsApp
⚙️ Profile Management — update info, avatars, bios
🎨 Light / Dark Mode — aesthetic meets functionality
❤️ Message Reactions + Emojis = modern chat etiquette
🔍 Search Users & Chats — fast and indexed
☁️ Cloudinary Integration for storage & delivery
🔒 Secure Authentication and session handling
🕶️ Responsive UI that looks great on mobile and desktop

🛠️ Setup & Installation
1️⃣ Clone the Repo
git clone https://github.com/TarunRaina/WhatsApp-Clone.git
cd WhatsApp-Clone

2️⃣ Install Dependencies
# For both backend and frontend
npm install
cd client && npm install


Environment Variables

Create a .env file in the backend with the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_SERVICE_ID=your_twilio_service_id
EMAIL_PASS=your_email_pass
USER_PASS=your_user_pass
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
PORT=8000
FRONTEND_URL=http://localhost:3000


Create a .env file in the backend with the following:

REACT_APP_API_URL=http://localhost:8000


4️⃣ Run It
# Run server
npm run server

# Run client
cd client && npm start


🧩 Architecture

Client: Handles UI, WebRTC sessions, and socket events.

Server: Manages authentication, sockets, and call signaling.

Database: Stores user profiles, messages, and media metadata.

Cloudinary: Stores images, files, and video snippets.

Twilio: Powers OTP login and identity verification.

Basically — it’s a full-stack symphony.

🧠 Future Enhancements

Push notifications (FCM or OneSignal)

Group calls with multi-peer WebRTC

Message encryption (end-to-end, optional)

PWA support

Desktop app via Electron
