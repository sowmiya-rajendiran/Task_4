let getForm = document.querySelectorAll('.inputGet')[0];


getForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    //Get data from user
    let name = event.target.f_name.value ;
    let income = event.target.income.value;
    let grocery = event.target.grocery.value;
    let emi = event.target.emi.value;
    let amenity = event.target.amenity.value;
    let others = event.target.others.value;
    let description = event.target.description.value;

    // Data Fetch using POST method
    fetch(`https://684f0235f0c9c9848d29d782.mockapi.io/api/test/users`,{
        method : 'POST',
        body : JSON.stringify({
            name,
            income,
            description,
            grocery,
            emi,
            amenity,
            others
        }),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
        .then(()=>{
            alert('New Income & Expense List Created');

            // after Submit data it will be clear 
            event.target.f_name.value = '';
            event.target.income.value = '';
            event.target.grocery.value = '';
            event.target.emi.value = '';
            event.target.amenity.value = '';
            event.target.others.value = '';
            event.target.description.value = '';

            window.history.back();


        }).catch((error)=>{
            console.log(error);
        }) 
});