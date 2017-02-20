# Homework Assignment #2
### Joshua Kuroda // 2017-02-20

* 5.1
  Although both architectures split up a system into pieces, a component-based architecture is contained within a single exectuable program, so they communicate directly. In contrast, a service-oriented architecture splits up the system into pieces called services, where each is a self-contained program. 

* 5.2
  For this simple phone application, I believe a monolithic architecture with an event-driven user interface would suffice. In addition, it would have data-centric elements, since high scores will need to be accessed, however, there is no need for client-server, service-oriented, or distributed architectures to be incorporated since the data is stored locally. Additionally, the application could have rule-based elements, since tic-tac-toe is a simple game, and the computer opponent might be programmed to make certain moves based on rules.

* 5.4
  Because this chess program lets two players play each other over the internet, I would say that a client-server, service-oriented architecture is appropriate. Once again the interface would be event-driven, with each player making a chess move based on the rules of the game.

* 5.6
  The `ClassyDraw` application does not require an external database, so having the data stored within the program itself using arrays, lists, or another data structure should be fine. A simple, self-contained program like this does not need the more complicated types of database maintenance, since complex audit trails aren't necessary, and the data will not be changed very often. For this type of application, data associated with a certain project only needs to be kept as long as the file is saved, and simple audit trails noting actions need only be kept for the current session, in case the user wishes to "undo" an action.

* 5.8
  ![UML Diagram][UML]
  [UML]: /Homework/homework2/5-8_UML_Diagram.png "State Machine Diagram"

* 6.1
  Each of these classes represent an object that is adding some kind of shape or collection of lines to the canvas. They should all have width, height, and opacity properties. However, the text class needs some other properties like font, font color, kerning, and the actual `String` that is being written. The shape classes need an additional color property for the fill color, and classes that draw lines should have properties for line thickness, color and type.

* 6.2
  ![ClassyDraw Inheritance Diagram][ClassyDraw]
  [ClassyDraw]: /Homework/homework2/6-2_Diagram.png "ClassyDraw Inheritance Diagram"

* 6.3
  ![Business Inheritance Diagram][Business]
  [Business]: /Homework/homework2/6-3_Diagram.png "Business Inheritance Diagram"

* 6.6
  To represent each of the manager types, one could add `Office`, `Salary`, `Boss`, and `Employees` properties to the `Salaried` class. If the vice-president does not report to anyone, then the `Boss` property would be left blank. If you are an employee at the very bottom, then the `Employees` property would be left blank.

  ![New Business Inheritance Diagram][NewBusiness]
  [NewBusiness]: /Homework/homework2/6-6_Diagram.png "New Business Inheritance Diagram"