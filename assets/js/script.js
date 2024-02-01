
$('select').change(function (){
    var val = $(this).val();
    var card = $(this).parents('.card');
    console.log(val)
    if(val==0){
        $("#open").append(card);
    }else if (val==1){
        $("#InProgress").append(card);
    }else if(val==2){
        $("#resolved").append(card);
    }else{
        $("#OnHold").append(card);
    }
    card.hide().show("fast");
})

//open modal
var modal = document.getElementById('modal');
let email = document.getElementById('email');
let text = document.getElementById('text');
function OpenModal(){
    modal.style.display = 'block';
}
function CloseModal(){
    modal.style.display = 'none';
    email.style.borderColor = '#424874'
    text.innerHTML = " ";
    email.value = " ";
}