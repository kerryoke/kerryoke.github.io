"use strict";


fetch('https://api.github.com/user', {
  headers: {
    'Authorization': CLIENT_ID
  }
})

const ghUserName = "kerryoke";

async function getHangmanGameRepo(ghUserName) {
    
    try {
        const res = await fetch(`https://api.github.com/users/${ghUserName}/HangmanGame`)
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

