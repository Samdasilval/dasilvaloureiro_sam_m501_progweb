import { User } from "./user.js";

const mainElement = document.querySelector("main");
const divElement = document.querySelector("main div");

const buttonName = document.querySelector("#sort--name");

const buttonAge = document.querySelector("#sort--age");

const getPersons = async () => {
    try {
        const res = await fetch(`https://randomuser.me/api/?results=20`);
        const data = await res.json();
        //console.log(data);

        const listPerson = [];

        data.results.forEach((person) => {
            //new User(person).render(mainElement)
            listPerson.push(new User(person));
            listPerson.sort();
            listPerson.forEach((user) => {
                user.render(mainElement);
            });
        });

    } catch (e) {
        console.error(e.message);
    }

}

getPersons();

// divElement.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     if(e.target.classList.contains("user")){
//         if(e.target.dataset.present === "true"){
//             e.target.dataset.present = "false";
//         } else {
//             e.target.dataset.present = "true";
//         }
//     }
//     //isPresent(e.target);
// })


