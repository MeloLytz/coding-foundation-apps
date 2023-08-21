# Todo App mit State Mangement

Implementieren Sie eine einfache Todo App mit dem State Management Pattern.

Ein Implementierungsbeispiel finden Sie [hier](https://bootcamp-todo-app.stackblitz.io/).

## Features

Dort sind die Funktionen nach Priorität sortiert.

### Todos anzeigen

Sie beginnen mit der Anzeige der ToDos Ihres Anwendungsstatus in einer Liste.

- [ ] Fügen Sie eine Standardaufgabe zu Ihrem Anwendungsstatus hinzu (damit die Liste, die Sie anzeigen wollen, nicht leer ist)
- [ ] Verwenden Sie eine Liste, um alle ToDos Ihres Anwendungsstatus anzuzeigen

### Hinzufügen neuer Todos

Sie werden nun eine Funktion hinzufügen, um neue Aufgaben zu Ihrer Liste hinzuzufügen.

- [ ] Fügen Sie ein Eingabefeld und eine Schaltfläche hinzu, mit denen Sie neue Aufgaben hinzufügen können.
- [ ] Nachfolgende Leerzeichen sollten von der ToDo-Eingabe abgeschnitten werden
- [ ] Eine Todo-Entität hat zwei Eigenschaften: die description und eine ID
- [ ] Die Beschreibung ist ein Text, der angibt, worum es sich bei der Aufgabe handelt
- [ ] Die Eigenschaft ID identifiziert jedes ToDo eindeutig
- [ ] Die ID-Eigenschaft sollte von Ihnen selbst erzeugt werden (z. B. mit einer Zählervariablen oder durch Generierung einer ID anhand der aktuellen Zeit)

### Local Storage

Jedes Mal, wenn Sie Ihre App neu laden, sind der Status und die ToDo's weg - schade - das sollten wir ändern.

- [ ] Verwenden Sie den lokalen Speicher, um den aktuellen Zustand der Anwendung zu speichern, wenn er sich ändert
- [ ] Jedes Mal, wenn die ToDo-App neu geladen wird, sollte der letzte bekannte Status aus dem lokalen Speicher geladen werden


### Erledigt-Status von Todos

Sie werden nun eine Funktion implementieren, die anzeigt, ob ein ToDo noch offen oder bereits erledigt ist.

- [ ] Hinzufügen einer done-Eigenschaft zur todo-Entität
- [ ] Die Eigenschaft erledigt ist ein boolescher Wert, der angibt, ob ein ToDo erledigt ist oder nicht
- [ ] Verwenden Sie ein Kontrollkästchen für die Eigenschaft "erledigt" in der Liste
- [ ] Wenn das Kontrollkästchen eines Todos geändert wird, wird der Status des entsprechenden Todos aktualisiert

### Überprüfung von Duplikaten

Lassen Sie uns die Duplikate loswerden - Sie werden jetzt eine Funktion implementieren, die doppelte Aufgaben in Ihrer Liste verbietet.

- [ ] Keine doppelten ToDo-Beschreibungen zulassen (z. B. zwei ToDos mit der Beschreibung "JavaScript lernen")
- [ ] Die Duplikatsprüfung unterscheidet nicht zwischen Groß- und Kleinschreibung


### Todos filtern

Da die Filterung eine gute Funktion ist, werden Sie sie jetzt einführen.

- [ ] Hinzufügen eines Filters, der es ermöglicht, entweder "alle Aufgaben", "offene Aufgaben" oder "erledigte Aufgaben" anzuzeigen
- [ ] Verwenden Sie Optionsfelder, um die Filter anzuzeigen


### Erledigte Todos entfernen

Sie werden nun eine Funktion hinzufügen, die erledigte Aufgaben aus Ihrer Liste entfernt.

- [ ] Hinzufügen einer Schaltfläche "Erledigte Aufgaben entfernen", die alle erledigten Aufgaben aus der Liste entfernt