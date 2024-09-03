
const submitButton = document.getElementById('submit');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById("email");
const address = document.getElementById('address');
const pincode = document.getElementById('pincode');
const state = document.getElementById('state');
const country = document.getElementById('country');

const food= document.getElementsByName('food');

const tableItem= document.querySelector('#itemtable tbody');
const form = document.getElementById('form');




form.addEventListener('submit', function(event) {
  
  event.preventDefault();
  submitButton.addEventListener('click', btnClick());
  
});

function btnClick() {
  
  addRows();
}

function addRows() {
    const fnameValue = firstName.value.trim();
    const lnameValue = lastName.value.trim();
    const emailValue= email.value.trim();
    const addressValue= address.value.trim();
    const pincodeValue= pincode.value.trim();
    const stateValue=state.value.trim();
    const countryValue=country.value.trim();

    const genderRadio = document.querySelector('input[name="gender"]:checked');
    const genderValue=genderRadio.value;

    const foodcBox = document.querySelectorAll('input[name="food"]:checked');
    const foodValues = Array.from(foodcBox).map(checkbox => checkbox.value);
    

    if((fnameValue)&&(foodValues.length>=2)){
    const itemtr = document.createElement('tr');
    
    const itemCellfname = document.createElement('td');
    itemCellfname.textContent = fnameValue; 
    itemtr.appendChild(itemCellfname);
    

    const itemCellLname = document.createElement('td');
    itemCellLname.textContent = lnameValue; 
    itemtr.appendChild(itemCellLname);
    
    const itemCellemail = document.createElement('td');
    itemCellemail.textContent = emailValue; 
    itemtr.appendChild(itemCellemail);

    const itemCelladdress = document.createElement('td');
    itemCelladdress.textContent = addressValue; 
    itemtr.appendChild(itemCelladdress);

    const itemCellpincode = document.createElement('td');
    itemCellpincode.textContent = pincodeValue; 
    itemtr.appendChild(itemCellpincode);

    const itemCellgender = document.createElement('td');
    itemCellgender.textContent = genderValue; 
    itemtr.appendChild(itemCellgender);

    const itemCellfood = document.createElement('td');
    itemCellfood.textContent = foodValues.join(","); 
    itemtr.appendChild(itemCellfood);
   
    const itemCellstate = document.createElement('td');
    itemCellstate.textContent = stateValue; 
    itemtr.appendChild(itemCellstate);

    const itemCellcountry = document.createElement('td');
    itemCellcountry.textContent = countryValue; 
    itemtr.appendChild(itemCellcountry);

    tableItem.appendChild(itemtr);

  }
  else{
    
    alert("Food Choices must be 2 or More!!!")
  }

  firstName.value="";
  lastName.value="";
  email.value="";
  address.value="";
  pincode.value="";
  state.value="";
  country.value="";

  foodcBox.forEach(checkbox => {
    checkbox.checked = false;
  });
  

}