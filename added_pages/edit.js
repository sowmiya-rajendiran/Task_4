let updatebtn = document.querySelectorAll('.updatedForm')[0];

// Get id from URL
let param = new URLSearchParams(window.location.search);
let id = param.get('id');

updatebtn.addEventListener('submit',(event)=>{
    event.preventDefault();

    // Get data 
    let name = event.target.f_name.value ;
    let income = event.target.income.value;
    let grocery = event.target.grocery.value;
    let emi = event.target.emi.value;
    let amenity = event.target.amenity.value;
    let others = event.target.others.value;
    let description = event.target.description.value;

    // Fetch Data Using PUT method for updated data 
    fetch(`https://684f0235f0c9c9848d29d782.mockapi.io/api/test/users/${id}`,{
        method : 'PUT',
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
    }).then(()=>{
        alert('Income & Expeses List Updated!');
        location.href = '../index.html';
    }).catch((error)=>{
        console.log(error);
    })
})

// Fill the data in Input Fields
fetch(`https://684f0235f0c9c9848d29d782.mockapi.io/api/test/users/${id}`)
.then((data)=>{
    return data.json();
}).then((data)=>{

    let name = document.getElementById('f_name');
    let income = document.getElementById('income');
    let description = document.getElementById('description');
    let grocery = document.getElementById('grocery');
    let emi = document.getElementById('emi');
    let amenity = document.getElementById('amenity');
    let others = document.getElementById('others');

    name.value = data.name;
    income.value = data.income;
    description.value = data.description;
    grocery.value = data.grocery;
    emi.value = data.emi;
    amenity.value = data.amenity;
    others.value = data.others;

})