window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle einen Eintrag *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neuer Eintrag wird erstellt: " + wildcard);
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Spracheingabe bereit");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playground-artyom-script.js.map