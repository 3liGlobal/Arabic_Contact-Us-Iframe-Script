function initializeEnglishIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAE');
    if (!iframe) return;

    console.log("Script Started...");
    iframe.src = 'https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE';
    let email;

    const checkEmailInterval = setInterval(function () {
        const divElement = document.getElementById("swell-customer-identification");
        email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;

        if (email) {
            console.log("Email found: " + email);
            // iframe.contentWindow.postMessage(email, "*");
            iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`;
            clearInterval(checkEmailInterval);
        } else {
            console.log("No email found English, using default URL.");
        }
    }, 500);
}


function initializeArabicIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAEArabic');
    if (!iframe) return;
 
    console.log("Arabic Script Started...");
    iframe.src = 'https://3liglobal.github.io/Arabic_Contact_Us-Form_OOKA_UAE';
    let email;
 
    const checkEmailInterval2 = setInterval(function () {
        const divElement = document.getElementById("swell-customer-identification");
        email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;
 
        if (email) {
            console.log("Email found: " + email);
            //iframe.contentWindow.postMessage(email, "*");
            iframe.src = `https://3liglobal.github.io/Arabic_Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`;
            clearInterval(checkEmailInterval2);
        } else {
            console.log("No email found Arabic, using default URL.");
        }
    }, 500);
}
var language =  document.querySelector('.language-switcher_button').children[0].innerHTML;
                if(language!='English'){ 
document.addEventListener("DOMContentLoaded", initializeEnglishIframe);
                }        
               else{
                   document.addEventListener("DOMContentLoaded", initializeArabicIframe);
               }
              
 
// MutationObserver for Arabic iframe
const arabicObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        const newLanguageButton = document.querySelector('.language-switcher_button');
        if (newLanguageButton) {
            var language =  document.querySelector('.language-switcher_button').children[0].innerHTML;
                if(language!='English'){
                     newLanguageButton.addEventListener('click', initializeArabicIframe);
                }
                //window.location.reload();
               else{ 
                   newLanguageButton.addEventListener('click', initializeEnglishIframe);
               }
        }
    });
});
 
arabicObserver.observe(document.body, { childList: true, subtree: true });
console.log("Arabic Script Loaded");
