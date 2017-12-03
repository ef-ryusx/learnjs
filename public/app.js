'use strict';
var learnjs = {
    showView : (hash) => {
        var problemView = $('<div class="problem-view">').text('Coming soon');
        $('.view-container').empty().append(problemView);
    }
}