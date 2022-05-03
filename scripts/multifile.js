$(function(){ // wait for page to load

    // convert file field into a jquery.mulfifile
    $('#the_filefield').MultiFile({
        
        // when a file is removed
        afterFileRemove: function(){
            handleSubmitButtonState();
        },
        
        // when a file is added
        afterFileAppend: function(){
            handleSubmitButtonState();
        }
    });

    // when the button is clicked
    $( "#the_button" ).on( "click", function() {
        onButtonClick();
    });                
});

function handleSubmitButtonState(){

    // get the number of files queued/selected for upload 
    var file_count = $('#the_filefield_list').children().length;

    // if there are no files queued
    if(file_count == 0){
        $('#submitButton').prop('disabled',true);
        $('#submitButton').html('upload file(s)');

    // if there is only one file queued
    }else if(file_count == 1){
        $('#submitButton').prop('disabled',false);
        $('#submitButton').html('upload 1 file');

    // if there are two or more files queued
    }else{
        $('#submitButton').prop('disabled',false);
        $('#submitButton').html('upload ' + file_count + ' files');
    }                
}

function onButtonClick(){
    clickFileFieldButton();
}

// click the correct file field button
function clickFileFieldButton(){
    var set = $('input[id^=the_filefield]');
    var length = set.length;
    var last = set[length-1];
    $(last).click();
}
