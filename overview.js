"use strict";


function get() {
    fetch(`https://frontendeksamen2019-2ef9.restdb.io/rest/accounts?q={}&h={"$orderby": {"username": 1, "password": -1}}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5de0eb264658275ac9dc207c",
            "cache-control": "no-cache"
        }
    })
        .then(e => e.json())
        .then(accounts => {
            accounts.forEach(addAccountToTheDOM);
        });
}

function addAccountToTheDOM(account) {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h3").textContent = "Username: " + account.username;
    copy.querySelector("p").textContent = "Password: " + account.password;
    copy.querySelector("h2").textContent = "E-mail: " + account.email;
    copy.querySelector(".account").dataset.accountid = account._id;
    copy.querySelector(".deleteaccount").addEventListener("click", () => {
        deleteIt(account._id);
    });
    document.querySelector("#app").prepend(copy);
}

get();

function post(data) {


    const postData = JSON.stringify(data);
    fetch("https://frontendeksamen2019-2ef9.restdb.io/rest/accounts", {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5de0eb264658275ac9dc207c",
            "cache-control": "no-cache"
        },
        body: postData
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //window.location = "";
            addAccountToTheDOM(data);
        });
}



function deleteIt(id) {
    fetch("https://frontendeksamen2019-2ef9.restdb.io/rest/accounts" + id, {
        method: "delete",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5de0eb264658275ac9dc207c",
            "cache-control": "no-cache"
        }
    })
        .then(res => res.json())
        .then(data => {
            document.querySelector(`.account[data-accountid="${id}"]`).remove();
        });
}

