export class User {
    #present = false;
    
    constructor(personInfo){
        this.titre = personInfo.name.title;
        this.firstName = personInfo.name.first;
        this.lastName = personInfo.name.last;
        this.city = personInfo.location.city;
        this.country = personInfo.location.country;
        this.age = personInfo.dob.age;
        this.email = personInfo.email;
        this.picture = personInfo.picture.large;
        this.element = this.#generateElement();
    }

    #generateElement () {
        const containerElement = document.createElement("div");
        containerElement.classList.add("user");
        containerElement.dataset.present = "false";


        const childHTML = `
		<img src="${this.picture}">
		<div class="user--info">
				<h1>${this.titre} ${this.firstName} ${this.lastName}</h1>
				<p>${this.age} years old</p>
				<p>${this.city}, ${this.country}</p>
		</div>
		<a href="mailto:${this.email}">
				<span class="mail">✉️</span>
		</a>`

        containerElement.insertAdjacentHTML("afterbegin", childHTML);

        return containerElement;
    }

    render(parentElement) {
        parentElement.appendChild(this.element);
    }

    isPresent(person) {
        if(this.#present) {
            this.#present = false;
        } else {
            this.#present = true;
        }

        if(person.classList.contains("user")){
            if(person.dataset.present === "true"){
                person.dataset.present = "false";
            } else {
                person.dataset.present = "true";
            }
        }
    }

}