const $form = $('#suscribeForm');
const $formGroup = $form.find('.form-group');
const $formControl = $formGroup.find('.form-control');

$form.submit(function(eve){
    eve.preventDefault();
    const error = Math.random() > 0.5;
    $formGroup.removeClass().addClass('form-group');
    $formControl.removeClass().addClass('form-control');
    $formGroup.addClass( error ? 'has-danger':'has-success');
    $formControl.addClass( error ? 'form-control-danger':'form-control-success');
    $formGroup.find('.form-control-feedback').remove();
    var el;
    if(error){
        el = $('<div>', {html: 'Ha ocurrido un error'});
    }else{
        el = $('<div>', {html: 'Te enviaremos todas las novedades'});
    }
    el.addClass('form-control-feedback');
    $formGroup.append(el);
});

function mostrarModal(){
    $('#btnNoregistrar').click( function(eve){
        localStorage.noMostrarModal = true;
    });
    const mostrar = JSON.parse(localStorage.noMostrarModal != 'undefined'? localStorage.noMostrarModal:"false");
    if(!mostrar){
        // {backdrop: 'static', keyboard: false} evita que al realizar  click fuera de la ventana esta no se cierre
        $('#modal-oferta').modal({backdrop: 'static', keyboard: false});
    }
}