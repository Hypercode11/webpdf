$(document).ready(function() {
preloaderFadeOutTime = 2500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}hidePreloader();
});