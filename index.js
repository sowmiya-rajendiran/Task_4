let list = [];
let API_URL = `https://684f0235f0c9c9848d29d782.mockapi.io/api/test/users`;

// get Fetch into data
async function inCome(){
    try{
        let getData = await fetch(API_URL);
        return getData.json();
    }catch(error){
        console.log(error);
    }
}

// Dynamic Data Display Function
function displayList(list){
    let getList = document.querySelector('.cs_grid');

    list.forEach((datalist)=>{
        // Create Elements dynamically
        let listItem = document.createElement('div');
        let h3 = document.createElement('h3');
        let income_p = document.createElement('p');
        let descripe = document.createElement('p');
        let descripe_title = document.createElement('h4');
        let expense = document.createElement('div');
        let expense_title = document.createElement('h4');
        let grocery = document.createElement('p');
        let emi = document.createElement('p');
        let amenity = document.createElement('p');
        let others = document.createElement('p');
        let total_expenses = document.createElement('p');
        let edit = document.createElement('a');
        let deletebtn = document.createElement('a');
        let savings = document.createElement('p');

        // values into parseFloat for add data
        let grocery_value = parseFloat(datalist.grocery) ;
        let emi_value = parseFloat(datalist.emi);
        let amenity_value = parseFloat(datalist.amenity);
        let others_value = parseFloat(datalist.others);
        let total_income = parseFloat(datalist.income);
        let total_expense = grocery_value + emi_value + amenity_value + others_value ;

        // SetAttributes For Elements
        listItem.setAttribute('class' , 'list')
        income_p.setAttribute('class','income');
        expense.setAttribute('class', 'expense');
        descripe.setAttribute('class', 'description');
        total_expenses.setAttribute('class','total_expense');
        edit.setAttribute('class', 'edit_btn');
        edit.setAttribute('href', `added_pages/edit.html?id=${datalist.id}`);
        deletebtn.setAttribute('class','delete_btn');
        deletebtn.setAttribute('id',`${datalist.id}`);
        savings.setAttribute('class','savings');
        deletebtn.setAttribute('href', `added_pages/delete.html?id=${datalist.id}`);

       
        // set textContent of Elements
        h3.textContent = datalist.name;
        income_p.textContent = ('Income Amount : ' + datalist.income);
        descripe.textContent = datalist.description;
        grocery.textContent = ('Grocery :' + datalist.grocery);
        emi.textContent = ('EMI : ' + datalist.emi);
        amenity.textContent = ('Amenity : ' + datalist.amenity);
        others.textContent = ('Others : ' + datalist.others);
        expense_title.textContent = 'Expenses Details :'
        total_expenses.textContent = ('Total Expenses Amount : ' + (total_expense) );
        descripe_title.textContent = 'Description : ';
        savings.textContent = 'Net Balance :'+ (total_income - total_expense);
        edit.textContent = 'Edit';
        deletebtn.textContent = 'Delete';
        
        // append Elements
        listItem.append(h3,income_p,expense,descripe_title ,descripe ,savings , edit , deletebtn);
        expense.append(expense_title,grocery,emi,amenity,others,total_expenses);
        getList.append(listItem);

    })
}

async function main() {
    list = await inCome();

    // store the List in localStorage
    localStorage.setItem('list', JSON.stringify(list));

    displayList(list);

}

main();

// Filter Radio Button for Filter Function
let filter = document.querySelectorAll('input[name="filter"]');

filter.forEach((radio) => {
  radio.addEventListener("change", () => {
    const selected = document.querySelector('input[name="filter"]:checked').value;

    document.querySelectorAll(".list").forEach(() => {

      if (selected === "all") {
        document.querySelectorAll(".income ,.expense, .savings, .edit_btn, .delete_btn").forEach((el) => {
            el.style.display = "block";
        });
        document.querySelectorAll(".edit_btn, .delete_btn").forEach((el) => {
            el.style.display = "inline-block";
        });
      } else if(selected === "income") {
        document.querySelectorAll(".expense, .savings, .edit_btn, .delete_btn").forEach((el) => {
            el.style.display = "none";
        });
        document.querySelectorAll(".income").forEach((el) => {
            el.style.display = "block";
        });
        
      } else if(selected === "expenses"){
        document.querySelectorAll(".expense, .savings, .edit_btn, .delete_btn").forEach((el) => {
            el.style.display = "block";
        });
        document.querySelectorAll(".income, .savings, .edit_btn, .delete_btn").forEach((el) => {
            el.style.display = "none";
        });
      }
    });
  });
});
