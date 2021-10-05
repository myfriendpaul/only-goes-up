- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Rails (Back End)](#rails-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Only Goes Up** 

_Only Goes Up is a cryptocurrency portfolio application that allows users to view how the crypto market is doing with real time updated pricing. Anyone with an account can create their portfolio, track coins by adding to their portfolio, and customize their list by adding or editing any crypto coins they may have with a quantity of each. Each crypto coin will have a detail page where users can view how the coin is doing in the market along with charts that display most recent data. Ready to start investing? Great! It Only Goes up from here!_

<br>

## MVP

<br>

### Goals

- _Create a user authentication back end that allows a person to register and sign in._
- _Have search functionality for the Binance API_
- _Use Tailwind for styling and responsiveness_
- _7 Separate rendered components_
- _Use React for all DOM manipulation_

<br>

### Libraries and Dependencies

|     Library      | Description                                                                                             |
| :--------------: | :------------------------------------------------------------------------------------------------------ |
|      React       | _Open-source JavaScript library utilized to build user interfaces_                                      |
|   React Router   | _Collection on navigation components that compose declaratively with the app_                           |
| React Router Dom | _Enables dynamic routing in the app_                                                                    |
|      Axios       | _A promise-based HTTP Client for node.js and the browser_                                               |
|      BCRYPT      | _Password-hashing function_                                                                            |
|      Faker       | _Library for genrating fake data_                                                                       |
|       JWT        | _Compact URL-safe means of representing claims to be transferred between two parties_                   |
|    Pry-rails     | _Causes the rails console to open pry_                                                                  |
|       Puma       | _Without arguments, puma will look for a rackup (.ru) file in working directory called config.ru ._     |
|    Rack-CORS     | _Handles Cross-Origin Resource Sharing (CORS), which makes cross-origin AJAX possible_                  |
|      Rails       | _Server-side web application framework written in Ruby_                                                 |
|      Spring      | _A Rails application preloader that speeds up development by keeping the app running in the background_ |
|      Tailwind    | _Functional approach to web design by providing thousands of tiny classes to use directly in your HTML._                                               |
                                  

<br>

### Client (Front End)

#### Wireframes

![Landing page](https://imgur.com/ivBDElI.jpg)

- Desktop Landing

![Sign Up](https://imgur.com/nGCs0Oj.jpg)

- Sign up page

![Sign In](https://imgur.com/8Azj3yI.jpg)

- Sign in page

![Portfolio](https://imgur.com/3cYMVkN.jpg)

- Portfolio page with no lists present

![Portfolio Populated](https://imgur.com/4u9IZvF.jpg)

- Portfolio with lists

![Cryptocurrency Search](https://imgur.com/iTWQvKM.jpg)

- Cryptocurrency Search

![Cryptocurrency Details](https://imgur.com/Go8bhBf.jpg)

- Cryptocurrency Details with chart

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree](https://imgur.com/FZHRD2t.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Layout.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Home
          |__ Home.jsx 
          |__ Home.css 
      |__ Login
          |__ Login.jsx 
          |__ Login.css 
      |__ Register
          |__ Register.jsx 
          |__ Register.css 
      |__ Portfolio
          |__ Portfolio.jsx 
          |__ Portfolio.css 
      |__ PortfolioCreate
          |__ PortfolioCreate.jsx 
          |__ PortfolioCreate.css 
      |__ PortfolioEdit
          |__ PortfolioEdit.jsx 
          |__ PortfolioEdit.css 
      |__ CoinSearch
          |__ CoinSearch.jsx 
          |__ CoinSearch.css 
      |__ CoinDetail
          |__ CoinDetail.jsx 
          |__ CoinDetail.css 
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ coins.js

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|  Generate Models   |    H     |     1 hrs      |     TBD     |    3 hrs    |
| Routes/Controllers |    H     |     2 hrs      |     TBD     |     TBD     |
| Authentication     |    H     |     2 hrs      |     TBD    |     TBD     |
| Routes and Auth Testing |    H     |     .5 hrs      |     TBD     |     TBD     |
| Deploy back end to Heroku |    H     |     .5 hrs      |     TBD     |     TBD     |
| Create React App |    H     |     1 hrs      |     TBD     |     TBD     |
| Layout/Nav/Footer Component |    H     |     3 hrs      |     TBD     |     TBD     |
| Sign Up Screen |    H     |     3 hrs      |     TBD     |     TBD     |
| Sign Out Screen |    H     |     3 hrs      |     TBD     |     TBD     |
| Portfolio Create Screen |    H     |     4 hrs      |     TBD     |     TBD     |
| Portfolio View Screen |    H     |     4 hrs      |     TBD     |     TBD     |
| Search Component |    H     |     4 hrs      |     TBD     |     TBD     |
| Coin View Screen |    H     |     4 hrs      |     TBD     |     TBD     |
| Coin Details Screen |    H     |     8 hrs      |     TBD    |     TBD     |
| Front End CRUD testing |    H     |     1 hrs      |     TBD    |     TBD     |
| Deploy to Netlify |    H     |     1 hrs      |     TBD     |     TBD     |
| Testing |    H     |     1 hrs      |     TBD     |     TBD     |

| TOTAL               |          |     43 hrs      |     TBD     |     TBD     |

<br>

### Rails (Back End)

#### ERD Model

[ERD Sample](https://imgur.com/s0dq5LK.png)
<br>

***

## Post-MVP

- Sorting features that allow to order search results by different parameters.
- Add functionality to display other users and their portfolios
- Add news articles related to each coin 
- Display whats trending/biggest movers/biggest losers on homepage

***

## Code Showcase



## Code Issues & Resolutions

