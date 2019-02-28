# Kitchen App
![](https://img.shields.io/badge/version-v.1.2.0-success.svg)

A simple React order app for sandwich shop Kitchen in Howden, East Yorkshire.\
[http://kitchen-app.surge.sh](http://kitchen-app.surge.sh)

### To run locally

**Clone repo**
```
git clone https://github.com/aorv/kitchen-app.git
```

**Create `.env` file with Firebase credencials**
```
cd kitchen-app
touch .env
```
Add the below to your `.env` file
```
REACT_APP_API_KEY=<your_api_key>
REACT_APP_AUTH_DOMAIN=<your_auth_domain>
REACT_APP_DB_URL=<your_db_url>
REACT_APP_PROJECT_ID=<your_project_id>
REACT_APP_STORAGE_BUCKET=<your_storage_bucket>
REACT_APP_SENDER_ID=<your_sender_id>
```

**Install dependencies**
```
yarn install
```

**Run local server**
```js
yarn start

// Compiled successfully!
// You can now view kitchen-app in the browser.

// Local:            http://localhost:3000/

// Note that the development build is not optimized.
// To create a production build, use yarn build.
```

### Built With

* [React](https://reactjs.org/) - Core application
* [Sass](https://sass-lang.com/) - Styling
* [Surge](https://surge.sh/) - Deployment
* [Firebase](https://firebase.google.com/) - Realtime DB

