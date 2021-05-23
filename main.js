$(document).ready(function(){
    let text = $('#texte');
    let hide = $('#cacher');
    let show = $('#afficher');

    $(hide).on('click', function(){
        $(text).hide();
    });
    $(show).on('click', function(){
        $(text).show();
    });
});