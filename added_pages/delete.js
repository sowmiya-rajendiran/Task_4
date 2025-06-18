// Get id from Url
const params = new URLSearchParams(window.location.search);
let id = params.get('id');

function deleteList(){
    let confirmResult = confirm('Are you sure to delete?');
    
    // Delete Data using Fetch Method 'DELETE'
    if(confirmResult){
        fetch(`https://684f0235f0c9c9848d29d782.mockapi.io/api/test/users/${id}` ,{
            method: 'DELETE'
        }).then(()=>{
            alert('List Deleted');
            location.href = '../index.html';
        }).catch((error)=>{
            console.log(error);
        })
    }
   
}
