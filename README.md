# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/crowdfunding-page-reactstyledcomponentsframermotion-1bPU3Flmx)
- Live Site URL: [Live Site](https://rbcrowdfunding.netlify.app/)

### Built with

- [React](https://reactjs.org/) - JS library
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned about the unary operator to convert a string into a number. Also I practiced how to add dynamic styling with props in Styled-Components.

```js
+backedMoney.replace(",", ".") / +totalMoney.replace(",", ".")) * 100
```

```js
border: ${(props) =>
    props.isToggled ? "solid hsl(176, 50%, 47%) 2px" : "solid lightgray 1px"};
};
```

## Author

- Website - [Rayane Bengaoui](https://rayanebengaoui.com/)
- Frontend Mentor - [@RayaneBengaoui](https://www.frontendmentor.io/profile/RayaneBengaoui)
