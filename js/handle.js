// console.log("Event Handler from event.html")
document.getElementById("btn-update-title").addEventListener('click',
    function(){
        const pageTitle = document.getElementById('page-title');
        pageTitle.innerText = `Love you Ayshaa`
    }
)

document.getElementById("btn-update").addEventListener('click',
    function(){
        const nameInput = document.getElementById("input-name");
        console.log(nameInput)
        const nameValue = nameInput.value;
        console.log('name:',nameValue)

        const pName = document.getElementById('name');
        pName.innerText = nameValue;
    }
)
