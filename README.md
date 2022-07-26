# Frontend Mentor - 3-column preview card component solution

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

### Screenshot

![](/public//images//download.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

```js
const CardsContainer = () => {
  return (
    //Power of Component based Framework
    <CardWrapper>
      {CardsData.map((card) => (
        <Cards
          key={card.id}
          name={card.name}
          content={card.content}
          color={card.color}
          img={card.img}
        />
      ))}
    </CardWrapper>
  );
};
```

## Author

- Website - [Enx-dev](https://portfollio-one.vercel.app/)
- Frontend Mentor - [@Enx-dev](https://www.frontendmentor.io/profile/Enx-dev)
- Twitter - [@Enx-dev](https://www.twitter.com/Enx-dev)
