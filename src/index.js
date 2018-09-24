const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let btn = document.querySelector("button")
  let fullname = document.querySelector("#fullname")
  let email = document.querySelector("#email")
  let street = document.querySelector("#street")
  let phone = document.querySelector("#phone")
  let dob = document.querySelector("#date_of_birth")

  btn.addEventListener("click", function(){
    let data = fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( json => json["results"][0])
      .then( res => {
        let name = res.name
        fullname.innerHTML = `${name.title} ${name.first} ${name.last}`

      })
  })

});
