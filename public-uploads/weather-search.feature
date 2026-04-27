Feature: Wettersuche

  Scenario: Wetterdaten für eine Stadt anzeigen
    Given Ich navigiere zur Wetter-Startseite
    When Ich suche nach "Berlin" in der Suchleiste
    And Ich bestätige die Suche über den Suchen-Button
    Then Die Wetterdaten für "Berlin" sollten angezeigt werden
