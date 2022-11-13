# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](images/screenshootempty.jpeg)

### Links

- Solution URL: [Solution](https://github.com/Kaji17/Interactive-card-detail)
- Live Site URL: [Interactive card detail]( https://kaji17.github.io/Interactive-card-detail/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
### What I learned

I learn how we can use Regex in HTML and Js to create a model to veryfy my diferrents fields in the form
```html
<input required pattern="[0-9]{1,2}">
```

I learn how we can insert " " after 4 number
```js
let joy = string.match(/.{1,4}/g);
joy.join(' ');
```

### Continued development

After to have receive any knowlage in Js I continous to learn how build test with Js.

For improve my habilities


### Useful resources
## Author

- Linkedin - [Katina](https://www.linkedin.com/in/katinaouattara/)
- Frontend Mentor - [@Kaji17](https://www.frontendmentor.io/profile/Kaji17)
- Twitter - [@pevirgile](https://www.twitter.com/pevirgile)

## Acknowledgments