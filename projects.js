"use strict";



// fetch('https://api.github.com/user', {
//   headers: {
//     'Authorization': CLIENT_ID
//   }
// })

// const ghUserName = "kerryoke";


import { Octokit } from "octokit";

const octokit = new Octokit({ 
  auth: CLIENT_ID,
});


async function getHangmanGameRepo(ghUserName) {
    try {
        octokit.request("GET /users/${ghUserName}/HangmanGame", {
            owner: "github",
            repo: "docs",
            per_page: 2
        });
        const res = await fetch(`https://api.github.com/users/${ghUserName}/HangmanGame`, {
            headers: {
                'Authorization': process.env.CLIENT_ID
            }
        })
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


async function getHangmanAPIRepo(ghUserName) {
    try {
        const res = await fetch(`https://api.github.com/users/${ghUserName}/HangmanGameWithAPI`)
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


async function getAboutMeRepo(ghUserName) {
    try {
        const res = await fetch(`https://api.github.com/users/${ghUserName}/about-me-html`)
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


// app.use("/api/v1/getHangmanGameRepo", async (request, response) => {
//     response.status(200).json({
//         status: 200,
//         data: await getHangmanGameRepo(),
//     });
// });


// app.listen(port, () => {
//     console.log(`Server is running http://localhost:${port}`);
//     console.log("Press Ctrl+C to end this process.");
// });

// require("dotenv").config();
// const cors = require("cors");

// const corsOptions = {
//     origin: `http://localhost:${port}`
// }
// app.use(cors(corsOptions));