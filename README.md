# burger-restaurant-app
A restaurant app built with react.js and express.js server that handles payment using stripe api

# Installation
<ul>
  <li>Register at Stripe and Setup a Payment Account to access the Dashboard</li>
  <li>Find your API Keys (test_, live_)</li>
  <li>Replace frontend API keys: app/src/constants/</li>
  <li>Replace backend API keys: app/backend/constants/</li>
</ul>

# Frontend
<ul>
  <li>npm install</li>
  <li>npm start</li>
  <li>visit http://localhost:3000/</li>
</ul>

# Backend
<ul>
  <li> cd backend </li>
  <li> npm install </li>
  <li> node index.js </li>
  <li> visit http://localhost:8080/ </li>
</ul>

# Usage
 When using it in production, you have to use a real credit card. Otherwise, in development mode, you can use a <a href="https://stripe.com/docs/testing#cards">Stripe's test credit cards</a>
