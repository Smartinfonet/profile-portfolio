const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

function pageTransitions() {
    // button click
    for (let i = 0; i < sectBtn.length; i++ ){
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn' , " " )
            this.className += "active-btn";

            // new codes
            
        })
    }

        // sectiion active classs
        
        // allSections.addEventListener('click', function() {
        //     let
        //      id = e.dataset.id
        //     if(id){
        //         // remove selelcted
        //         sectBtns.forEach, ((btn) => {
        //             btn.classList.remove('active');
        //         })
        //         e.target.classList.add('active')

        //         // hiding other sections
        //         sections.forEach((section) => {
        //             section.classList.remove('active')
        //         })

        //         const element = document.getElementById(id)
        //         element.classList.add('active')
        //     }
        // })


        //toggle theme
        let theme = document.querySelector('.theme-btn')
        theme.addEventListener('click', () => {
            let element = document.body;
            element.classList.toggle('light-mode')
        })
}

pageTransitions()


document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("pizzaOrder");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};


