
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