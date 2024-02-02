
$('select').change(function (){
    var val = $(this).val();
    var card = $(this).parents('.card');
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

var state , StateVal;
$('.OpenModal').click(function (){
    $('.modal').show()
    state = $(this).parents('.task').attr('id')
    StateVal = $(this).parents('.task').attr('option-val')
})
function closeModal(){
    $('#TitleModal').val("")
    $('#CommentModal').val("");
    $('.modal').hide()
}
$('.modal-close').click(function (){
    closeModal()
})
$('.AddToTable').click(function (){
    var TitleModal = $('#TitleModal').val();
    var text = $('#CommentModal').val();
    $('#'+state).append('<div class="card">' +
        '                <h6 class="TitleCard">'+TitleModal+'</h6>' +
        '                <p class="CommentCard">'+text+'</p><div class="flex">\n' +
        '                <select class="NewAdd">\n' +
        '                    <option value="0">Open</option>\n' +
        '                    <option value="1">In progress</option>\n' +
        '                    <option value="2">Resolved</option>\n' +
        '                    <option value="3">On hold</option>>\n' +
        '                </select>\n' +
        '                <div><i class="fa fa-trash" aria-hidden="true"></i></div>\n' +
        '            </div></div>')
    console.log( )
    $('#'+state).find('select.NewAdd').val(StateVal);
    closeModal()
});

$('.fa-trash').click(function (){
    $(this).parents('.card').remove()
})