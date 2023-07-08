document.querySelector('.tab-dropdown').addEventListener('change', function() {
    var tabId = this.value;
    document.getElementById(tabId).click();
});