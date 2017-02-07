document.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
});

document.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
});

//Disable context menu
document.addEventListener('contextmenu', event => {
    event.preventDefault();
    event.stopPropagation();
});
//Disable double click selection
document.addEventListener('mousedown', e => {
    e.preventDefault();
})
