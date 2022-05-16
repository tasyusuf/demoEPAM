Feature: go to google
  @wip
  Scenario: go to google website
    When user go to amazon
    Then title must contains amazon

  Scenario Outline: go to google
    When user go to "<website>"
    Then title must contains "<title>"
    Examples:
    |website|title  |
    |amazon |amazon |