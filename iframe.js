function initializeArabicIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAEArabic');
    if (!iframe) return;
 
    console.log("Arabic Script Started...");
    iframe.src = 'https://3liglobal.github.io/Arabic_Contact_Us-Form_OOKA_UAE';
    let email;
 
    const checkEmailInterval = setInterval(function () {
        const divElement = document.getElementById("swell-customer-identification");
        email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;
 
        if (email) {
            console.log("Email found: " + email);
            //iframe.contentWindow.postMessage(email, "*");
            iframe.src = `https://3liglobal.github.io/Arabic_Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`;
            clearInterval(checkEmailInterval);
        } else {
            console.log("No email found, using default URL.");
        }
    }, 500);
}
 
// Run on initial load
document.addEventListener("DOMContentLoaded", initializeArabicIframe);
 
// MutationObserver for Arabic iframe
const arabicObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        const newLanguageButton = document.querySelector('.language-switcher_button');
        if (newLanguageButton) {
            //window.location.reload();
            newLanguageButton.addEventListener('click', initializeArabicIframe);
        }
    });
});
 
arabicObserver.observe(document.body, { childList: true, subtree: true });
console.log("Arabic Script Loaded");
