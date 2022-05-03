$(function(){ // wait for page to load

    // convert file field into a jquery.mulfifile
    $('#the_filefield').MultiFile({
        afterFileRemove: function(){
            handleSubmitButtonState();
        },
        afterFileAppend: function(){
            handleSubmitButtonState();
        }
    });

    $( "#the_button" ).on( "click", function() {
        onButtonClick();
    });                
});

function handleSubmitButtonState(){
    var file_count = $('#the_filefield_list').children().length;
    if(file_count == 0){
        $('#submitButton').prop('disabled',true);
        $('#submitButton').html('upload file(s)');
    }else if(file_count == 1){
        $('#submitButton').prop('disabled',false);
        $('#submitButton').html('upload 1 file');
    }else{
        $('#submitButton').prop('disabled',false);
        $('#submitButton').html('upload ' + file_count + ' files');
    }                
}

function onButtonClick(){
    clickFileFieldButton();
}

function clickFileFieldButton(){
    var set = $('input[id^=the_filefield]');
    var length = set.length;
    var last = set[length-1];
    $(last).click();
}
