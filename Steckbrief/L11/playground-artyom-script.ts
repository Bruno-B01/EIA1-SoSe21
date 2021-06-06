declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle einen Eintrag *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neuer Eintrag wird erstellt: " + wildcard);
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Spracheingabe bereit");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});