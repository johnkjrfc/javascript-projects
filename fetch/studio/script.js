//TODO: Add Your Code Below
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function (data) {
            data.sort(function (a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });
            let container = document.getElementById("container");
            console.log(data);
            data.sort()
            for (let i= 0; i < data.length; i++) {
                let astronaut = data[i]
                let astronautName = data[i].firstName + " " + data[i].lastName;
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronautName}</h3>
                            <ul>
                                <li>${astronaut.hoursInSpace}</li>
                                <li>${astronaut.active}</li>
                                <li>${astronaut.skills}</li>
                            </ul>
                    </div>
                    <img class="avatar" src=${astronaut.picture}/>
                </div>
                `
                
            }
        })
    })
});