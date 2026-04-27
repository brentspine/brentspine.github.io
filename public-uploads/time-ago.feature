Feature: TimeAgoPipe

Scenario: Sekunden anzeigen
  Given jetzt ist "2025-01-01T12:00:00Z"
  When ich rendere 57 Sekunden Vergangenheit
  Then sehe ich "57 seconds ago"
