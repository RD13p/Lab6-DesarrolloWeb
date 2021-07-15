$('.agregar').on('click', function(e) {
    e.preventDefault();
    if ($('#newText').val().trim() == "") {
        alert("Ingresa un elemento válido");
    } else {
        $('.Lista').append(`<div class="item-container"> <p class = "itemShop"> ${$('#newText').val()}</p>
        <li> <button class = "checkbutton">check</button> <button class = "delbutton">delete</button> 
        </li></div>`);
    }
})

$('.Lista').on('click', '.checkbutton', function() {
    $(this).parents(".item-container").toggleClass('chec');
});

$('.Lista').on('click', '.delbutton', function() {
    $(this).parents(".item-container").remove();
});