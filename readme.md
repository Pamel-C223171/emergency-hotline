### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Ans: getElementById:** This method is use to access a specific html element in the DOM. This method returns  only one element whose id matches because an id should only exist once in html.
**Code: document.getElementById("id-name");**

**getElementsByClassName:** This method use to find all element by its class name. This method returns html collection. 
**Code: document.getElementsByClassName("class-name");**


**querySelector:** This method find first element which matches the css selector. This method returns the first matching element.
**Code: document.querySelector(".className or #id...");**

**querySelectorAll:** This method find all element which matches the css selector. This method returns the list of elements(NodeList).
**Code: document.querySelectorAll(".className or #id...");**

2. How do you **create and insert a new element into the DOM**?

**Ans: step-1:** Take the div where new element insert.
**Code:** const parentDiv = document.getElementById("id-name")
**step-2:** Create a new div 
**Code:** const newDiv = document.createElement("div")
**step-3** content fill 
**Code:** newDiv.innerHTML = `<h1>write text</h1>...`
**step-4:** insert the crate div
**Code:** parentDiv.appendChild(newDiv)


3. What is **Event Bubbling** and how does it work?

**Ans:** Event bubbling means that when an event occurs on a child element, it is first triggered on that element then parent element then root document. If a button is clicked, the event will first go  to the button then up to div -> body -> document. 

4. What is **Event Delegation** in JavaScript? Why is it useful?

**Ans:** Event delegation is placing an event listener on the parent element and when an event occurs on the chhild element, it is handle in the parent.

**It is useful for**
If there are many child elements, you can set up them once on the parent instead of setting up separate event listeners. Dynamiccally added/remove elements also work.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**Ans:  preventDefault():** Stop the  default action of an element. Submitting a form will not cause a normal reload.
**stopPropagation():** Stop event bubbling or capturing.

---
