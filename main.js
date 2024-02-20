var whitepicker = $('#white-color'),
    navybluepicker = $('#navy-blue-color'),
    orangepicker = $('#orange-color'),
    path = $('#svg-path');
    path2 = $('#svg-path2');
    
whitepicker.on('input', function() {
    path.css('fill', $(this).val());
    path2.css('fill', $(this).val());
});


navybluepicker.on('input', function() {
    path.css('fill', $(this).val());
    path2.css('fill', $(this).val());
});


orangepicker.on('input', function() {
    path.css('fill', $(this).val());
    path2.css('fill', $(this).val());
});
