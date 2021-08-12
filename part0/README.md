# [Full Stack Open 2021 Helsinki](https://fullstackopen.com/en/)

## Part 0 - [Fundamentals of Web apps](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#forms-and-http-post)

### Exercise: Sequence diagram of browser and server interaction

### Side note from me

This first exercise, encourage the use of chrome(or any browser dev tools) 
to know how a website or web app works, by analysing the network data, 
reading the response, etc and of course careful reading of the materials 
and codes. We are asked to make a sequence diagram or other media that 
can represent the interaction between browser and server, 
and what happens when we click a certain part of it.

### Exercise Details

### Exercise 0.4: new note

In chapter Loading a page containing JavaScript
 \- review the chain of events caused by opening the page
 https://studies.cs.helsinki.fi/exampleapp/notes 
is depicted as a sequence diagram
The diagram was made using websequencediagrams service as follows:

```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

Create a similar diagram depicting the situation where the user creates a new note on page 
https://studies.cs.helsinki.fi/exampleapp/notes by writing something into 
the text field and clicking the submit button.
If necessary, show operations on the browser or on the server as 
comments on the diagram.
The diagram does not have to be a sequence diagram. 
Any sensible way of presenting the events is fine.
All necessary information for doing this, and the next two exercises, 
can be found from the text of this part. The idea of 
these exercises is to read the text through once more, 
and to think through what is going on there. 
Reading the application code is not necessary, 
but it is of course possible.

### Exercise 0.5: Single page app

Create a diagram depicting the situation where the user goes to the single page 
app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

### Exercise 0.6: New Note

Create a diagram depicting the situation where the user creates 
a new note using the single page version of the app.
This was the last exercise, and it's time to push your 
answers to GitHub and mark the exercises as done in 
the submission application.
