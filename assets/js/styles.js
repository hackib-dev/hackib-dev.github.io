// var billAmount = parseFloat(document.getElementById('input_field'));
// var billSelect = document.getElementById('buttons');


// function buttonClicked(e)
// {
//     clicked = e.target.value
//     console.log (billAmount.value)


//     console.log(clicked)
// }


// billSelect.addEventListener("click", buttonClicked);






// // var billAmount = parseFloat(document.getElementById("bill").value);
// // var numPeople = parseInt(document.getElementById("people").value);
// // var billSelect = document.getElementById("buttons");

// // var buttonSelected = e => {
// // var isSelected = e.target.nodeName === 'BUTTON';


// // if (!isSelected){
// // return
// // }



// // console.log(e.target.id);

// // }

// // buttonSelected.addEventListener("click", buttonSelected)

if (amount != '' && people == '') 
{
    errorMsg.textContent="This can't be zero"
}

else if (amount !='' && people >= 1)
{
    billPerPeople = amount / people;

    console.log(billPerPeople);

var tipPerPerson = billPerPeople * clicked

        tipAmount.textContent=tipPerPerson;
        
var totalPerPerson = billPerPeople + tipPerPerson

        totalAmount.textContent=totalPerPerson.toFixed(2)



}