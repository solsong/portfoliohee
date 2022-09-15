document.getElementById('demosMenu').addEventListener('change', function(e){
    var dropdown = document.getElementById('demosMenu');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
