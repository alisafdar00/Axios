
# Axios Examples – Vue.js

A beginner-friendly project demonstrating how to use **Axios** in Vue.js to make HTTP requests, fetch users, and create posts using a REST API.

## 🚀 Features

- Fetch users using Axios GET requests.
- Create posts using Axios POST requests.
- Handle API responses and errors.
- Manage loading states.
- Learn REST API integration in Vue.js.
- Practice asynchronous JavaScript using async/await.

## 🛠️ Technologies Used

- Vue.js 3
- Axios
- JavaScript (ES6+)
- HTML5
- CSS3
- JSONPlaceholder REST API

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/alisafdar00/Axios.git
```

Navigate to the project folder:

```bash
cd Axios
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 👥 Example 1: Fetch Users (GET)

Axios GET requests retrieve data from an API.

```javascript
import axios from 'axios';

async function getUsers() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

getUsers();
```

## 📝 Example 2: Create a Post (POST)

Axios POST requests send data to an API.

```javascript
import axios from 'axios';

async function createPost() {
  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'My First Axios Post',
        body: 'Learning Axios with Vue.js',
        userId: 1
      }
    );

    console.log('Post created:', response.data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

createPost();
```

> **Note:** JSONPlaceholder is a demo API. It simulates creating a post but does not permanently save it to a database.

## 🔗 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/users` | Retrieve users |
| POST | `/posts` | Create a demo post |

Base URL: `https://jsonplaceholder.typicode.com`

## 🎯 Learning Objectives

This project helps demonstrate:

- Axios installation and configuration.
- GET and POST HTTP requests.
- Async/await and try/catch.
- Handling API responses and errors.
- Connecting a Vue.js application to REST APIs.

## 👨‍💻 Author

**Ali Safdar**  
Senior Software Engineer | PHP | Laravel | CodeIgniter | Vue.js

GitHub: [alisafdar00](https://github.com/alisafdar00)

---

⭐ If you find this project useful, feel free to star the repository!
