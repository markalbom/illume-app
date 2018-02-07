# README
Illume
created by Mark Albom

Purpose:  I am, like most people, sufficiently moved after seeing a commercial for a charity that tugs at my heartstrings.  Of course I am inclined to give, but I am stopped by the simple and logical question, "where is my money actually going?"  This was the purpose of Illume; to disseminate in a clear way the allocation of a rated non-profits money between expenses, fundrasing, and giving to those in need.  

Methodology:  Integral to the functionality of the application is the Charity Navigator (CN) data from their internal API.  Although their website uses this internal data to the same effect, I relished the challenge to build a simpler application with the same functionality driven by my own passion for answers.  This app uses that API to return relevant results based on a users search query.  As of now the application serves as a reference point for those curious about a particular non-profit.  In light of this, a robust backend was not necessary, which is why I chose to use Rails as a framework.  The user should be able to cycle through a list to view a single charity, which is why I prefered React to build a component-based front end to create a single-page application.  In future versions, I hope to both implement authentication, and subsequently Create and Delete applicability, so an individual user can have a personalized list of charities that they can Update.  

Technologies Used:  React on Rails, CSS.  


Acknowledgements:  As previously mentioned, Charity Navigator has been integral to this project, providing the data necessary for the application to function.  A special thank you to Matt Dragon, Director of Engineering for Charity Navigator, who graciously provided access to their content-platform API data - without which this application would have incredibly limited functionality.  Additionally, I would like to thank my instructors Jason Seminara and Kate Shiskina for their expertise and patience while helping me throughout the project.   
