/**
 * Die ToDos werden in dem Array todosText gespeichert
 * Jedes ToDo hat aber, neben dem ToDo-Text, einen zweiten
 * Wert, nämlich ob es erledigt ist oder nicht
 * (checked / unchecked). Der Einsatz von einem eindimensionalen
 * Array ermöglicht aber nur, dass wir ein Wert nach dem anderen auflisten.
 * Den zweiten Wert zu einem ToDo speichern wir also in einem
 * zweiten Array. Beide Arrays beinhalten also Infos zu einem ToDo,
 * den ToDo-Text und den Erledigtstatus eines ToDos. Die entsprechende
 * Stelle eines ToDos zeigt jetzt in den Arrays auf die entsprechenden
 * Werte, bspw. Stelle 0 im Array todosText und Stelle 0 im Array
 * todosChecked gehören zusammen zu einem ToDo.
 */
 var Aufgabe_11;
 (function (Aufgabe_11) {
     var toDoTaskArray = [];
     /**
      * Die Anwendung wird immer wieder auf die selben
      * DOM-Elemente zugreifen müssen. Damit diese Elemente nicht
      * jedes mal neu selektiert werden müssen, werden hier
      * Variablen deklariert, die später die entsprechenden DOM-Elemente
      * speichern.
      */
     var inputDOMElement;
     var addButtonDOMElement;
     var todosDOMElement;
     var counterDOMElement;
     var counterDOMElementOpen;
     var counterDOMElementDone;
     /**
      * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
      * initialisiert werden
      */
     window.addEventListener("load", function () {
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle eine Aufgabe *"],
            smart: true,
            action: function (i, wildcard){
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                toDoTaskArray.unshift({
                    todosText: wildcard,
                    todosChecked: false
                });
                drawListToDOM();
                console.log("Aufgabe  " + wildcard + " wird hinzugefügt");
                artyom.say("Aufgabe" + wildcard + " wurde hinzugefügt.");
            }
        });
        function startContinuousArtyom(){
            setTimeout(function (){
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (){
                        artyom.say("Sage erstelle eine Aufgabe");
                        console.log("Spracheingabe bereit");
                    });
                },
                200);
        }
        document.querySelector("#mic").addEventListener("click", function (){
            artyom.say("Sage erstelle eine Aufgabe");
            startContinuousArtyom();
        });
         /**
          * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
          * in ihre Variablen gespeichert werden, um später auf sie
          * zugreifen zu können
          */
         inputDOMElement = document.querySelector("#inputTodo");
         addButtonDOMElement = document.querySelector("#addButton");
         todosDOMElement = document.querySelector("#todos");
         counterDOMElement = document.querySelector("#counter");
         counterDOMElementOpen = document.querySelector("#open");
         counterDOMElementDone = document.querySelector("#done");
         /**
          * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
          * auf den AddToDo Button gesetzt werden.
          */
         addButtonDOMElement.addEventListener("click", addTodo);
         /**
          * Initial soll einmal die Liste an bereit definierten ToDos
          * aus den Arrays in den DOM gezeichnet werden.
          */
         drawListToDOM();
     });
     function drawListToDOM() {
         // alle todos erst einmal aus dem DOM löschen
         todosDOMElement.innerHTML = "";
         var _loop_1 = function (index) {
             /**
              * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
              * die Objekt-Instansierung ist aber übersichtlicher)
              */
             var todo = document.createElement("div");
             todo.classList.add("todo");
             /**
              * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
              * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
              *
              * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
              * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
              * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
              * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
              * hier muss die Zeichenkette unterbrochen werden.
              */
             todo.innerHTML = "<span class='check " + toDoTaskArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                 + toDoTaskArray[index].todosText +
                 "<span class='trash fas fa-trash-alt'></span>";
             // Zuweisen der Event-Listener für den Check- und den Trash-Button
             todo.querySelector(".check").addEventListener("click", function () {
                 // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                 // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
                 toggleCheckState(index);
             });
             todo.querySelector(".trash").addEventListener("click", function () {
                 // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                 // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
                 deleteTodo(index);
             });
             // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
             todosDOMElement.appendChild(todo);
         };
         // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
         for (var index = 0; index < toDoTaskArray.length; index++) {
             _loop_1(index);
         }
         updateCounter();
         updateCounteropen();
         updateCounterDone();
     }
     function updateCounter() {
         counterDOMElement.innerHTML = toDoTaskArray.length + " in total";
     }
     function updateCounteropen() {
        var counterOpen = 0;
        for (var index = 0; index < toDoArray.length; index++) {
            if (toDoArray[index].todosChecked == false)
                counterOpen++;
        }
        counterDOMElementOpen.innerHTML = counterOpen + " open,";
    }
    function updateCounterDone() {
        var counterDone = 0;
        for (var index = 0; index < toDoArray.length; index++) {
            if (toDoArray[index].todosChecked == true)
                counterDone++;
        }
        counterDOMElementDone.innerHTML = counterDone + " done";
    }
     /**
      * Ein neues ToDo wird folgendermaßen erstellt:
      */
     function addTodo() {
         /**
          * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
          * (ansonsten würde ein leerer ToDo-Text erstellt werden,
          * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
          */
         if (inputDOMElement.value != "") {
             /**
              * Der Eingabe-Wert aus dem Input-Feld (.value) wird
              * als neues Element in das ToDo-Array gepusht.
              * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
              * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
              * der Status "unchecked", hier false, gepusht.
              */
             toDoTaskArray.unshift({
                 todosText: inputDOMElement.value,
                 todosChecked: false
             });
             // Jetzt wird der Text aus dem Eingabefeld gelöscht
             inputDOMElement.value = "";
             /**
              * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
              * wird wieder getriggert
              */
             drawListToDOM();
         }
     }
     /**
      * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
      */
     function toggleCheckState(index) {
         /**
          * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
          * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
          * an der übergebenen Index-Stelle) geändert werden.
          * Von checked zu unchecked bzw. von unchecked zu checked
          * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
          * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
          * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
          * kurz schreiben: wert = !wert
          * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
          * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
          * Kurs behandelt wurden) nutzen.
          */
         toDoTaskArray[index].todosChecked = !toDoTaskArray[index].todosChecked;
         /**
          * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
          * wird wieder getriggert
          */
         drawListToDOM();
     }
     /**
      * Diese Funktion löscht ein ToDo
      */
     function deleteTodo(index) {
         /**
          * Durch "index" ist die entsprechende Stelle im Array
          * bekannt, an der das ToDo steht.
          * Jetzt muss diese Stelle beider Arrays gelöscht werden,
          * das ToDo-Text-Array und das Checked/Unchecked-Array
          */
         toDoTaskArray.splice(index, 1);
         /**
          * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
          * wird wieder getriggert
          */
         drawListToDOM();
     }
 })(Aufgabe_11 || (Aufgabe_11 = {}));
 //# sourceMappingURL=Aufgabe11.js.map