UI.registerHelper("simpleTable", function() {
    return {
        rowsPerPage: 0,
        showFilter: false,
        showNavigation: "never",
        useFontAwesome: true,
    }
});
UI.registerHelper("formatDate", function(date) {
    return moment(new Date(date)).format("dddd, Do MMMM YYYY");
});
UI.registerHelper("formatTime", function(date) {
    return moment(new Date(date)).format("Do MMMM YYYY HH:mm:ss");
});
UI.registerHelper("getDate", function(date) {
    return moment(new Date(date)).format("D");
});
UI.registerHelper("getMonth", function(date) {
    return moment(new Date(date)).format("MMM YYYY");
});
UI.registerHelper("getSimpleDate", function(date) {
    return moment(new Date(date)).format("D-MM-YY");
});
UI.registerHelper("twitterURL", function() {
    return "https://twitter.com/intent/tweet?url=" + encodeURI(document.URL);
});
UI.registerHelper("facebookURL", function() {
    return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(document.URL);
});
UI.registerHelper("googleURL", function() {
    return "https://plus.google.com/share?url=" + encodeURI(document.URL);
});
UI.registerHelper("currentlyLoading", function() {
    return Session.get("contentBeingLoaded");
});
UI.registerHelper("pathName", function() {
    return Router.current().route.getName()
});