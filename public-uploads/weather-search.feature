Feature: Wettersuche

Scenario: Wetter für Berlin anzeigen
  Given ich bin auf der Startseite
  When ich suche nach "Berlin"
  Then sehe ich das Wetter für "Berlin"
