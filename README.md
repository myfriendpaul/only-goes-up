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
      - [](#)
      - [](#-1)

<br>

## Overview

**Only Goes Up** 

_Only Goes Up is a cryptocurrency portfolio application that allows users to view how the crypto market is doing with real time updated pricing. Anyone with an account can create their portfolio, track coins by adding to their portfolio, and customize their list by adding or editing any crypto coins they may have with a quantity of each. Ready to start investing? Great! It Only Goes up from here!_

<br>

## MVP

<br>

### Goals

- _Create a user authentication back end that allows a person to register and sign in._
- _Have search functionality to have Nomic API match with rails backend to render real time information._
- _Allow user to add and update quanties of currencies in their portfolio._
- _7 Separate rendered components._
- _Use React for all DOM manipulation._

<br>

### Libraries and Dependencies

|     Library      | Description                                                                                             |
| :--------------: | :------------------------------------------------------------------------------------------------------ |
|      React       | _Open-source JavaScript library utilized to build user interfaces_                                      |
|   React Router   | _Collection on navigation components that compose declaratively with the app_                           |
| React Router Dom | _Enables dynamic routing in the app_                                                                    |
|      Axios       | _A promise-based HTTP Client for node.js and the browser_                                               |
|      BCRYPT      | _Password-hashing function_                                                                            |
|       JWT        | _Compact URL-safe means of representing claims to be transferred between two parties_                   |
|    Pry-rails     | _Causes the rails console to open pry_                                                                  |
|       Puma       | _Without arguments, puma will look for a rackup (.ru) file in working directory called config.ru ._     |
|    Rack-CORS     | _Handles Cross-Origin Resource Sharing (CORS), which makes cross-origin AJAX possible_                  |
|      Rails       | _Server-side web application framework written in Ruby_                                                 |
|      Spring      | _A Rails application preloader that speeds up development by keeping the app running in the background_ |
|      Iconify      | _Library of icons imported across different frameworks and libraries_ |


<br>

### Client (Front End)

#### Wireframes

![Landing page](https://imgur.com/ivBDElI.jpg)

- Desktop Landing

![Sign Up](https://imgur.com/nGCs0Oj.jpg)

- Sign up page

![Sign In](https://imgur.com/8Azj3yI.jpg)

- Sign in page

![Cryptocurrency Search](https://imgur.com/iTWQvKM.jpg)

- Cryptocurrency Search

![Add to Portfolio](https://imgur.com/4mxXBTX.png)

- Add currency amount to portfolio

![Portfolio Populated](https://imgur.com/4u9IZvF.jpg)

- Portfolio 

![Cryptocurrency Details](https://imgur.com/Go8bhBf.jpg)

- Cryptocurrency Details with chart

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree](https://imgur.com/FZHRD2t.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ components/
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
      |__ Calculate
          |__ Calculate.jsx 
          |__ Calculate.css 
      |__ Search
          |__ Search.jsx 
          |__ Search.css 
      |__ Coins
          |__ Coins.jsx 
          |__ Coins.css 
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ currencies.js

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|  Generate Models   |    H     |     1hrs      |     2hrs     |    3hrs    |
| Routes/Controllers |    H     |     2hrs      |     4hrs    |     4hrs    |
| Authentication     |    H     |     2hrs      |     2hrs    |     2hrs     |
| Routes and Auth Testing |    H     |     .5hrs      |     2hrs     |     2hrs     |
| Deploy back end to Heroku |    H     |     .5hrs      |     .5hrs     |     .5hrs     |
| Create React App |    H     |     1hrs      |     1hrs    |     1hrs     |
| Layout/Nav/Footer Component |    M     |     3hrs      |     3 hrs     |     3hrs    |
| Sign Up Screen |    H     |     3hrs      |     4hrs     |     4hrs     |
| Sign Out Screen |    H     |     3hrs      |     4hrs     |     4hrs     |
| Calculate Screen |    H     |     4hrs      |     3hrs     |     2hrs     |
| Portfolio View Screen |    H     |     4hrs      |     8hrs     |     4.5 hrs     |
| Search Component |    H     |     4hrs      |     5hrs     |     5hrs     |
| Coin View Component |    H     |     4hrs      |     4hrs     |     4hrs     |
| Front End CRUD testing |    H     |     1hrs      |     2hrs    |     2hrs    |
| Deploy to Netlify |    H     |     1hrs      |     .5hrs     |     .5hrs     |
| Testing |    H     |     1hrs      |     1hrs     |     1hrs     |

| TOTAL               |          |     35 hrs      |     46hrs    |     46hrs     |

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
- Populate with coin information on Calculat page i.e. Graph, volume, etc..

***

## Code Showcase

``` 
const getCoinSymbol = (symbol) => {
    return props.coinData.map((andy) => {
      if (andy.currency === symbol) {
        return <img className="coin-logo1" src={andy.logo_url} />;
      }
    });
  };
  const getCoinPrice = (symbol) => {
    return props.coinData.map((andy) => {
      if (andy.currency === symbol) {
        return <p>{`$${Number(andy.price).toFixed(2)}`}</p>;
      }
    });
  };
  ```
Code snippet shows how an the request to the Nomic API matches what the backend has in order to match both to get render the correct coin image logo and coin price.

## Code Issues & Resolutions

- Pushing currencies into the user table.
  ##### 
  -Corrected currencies_controller to match with corresponding coin ID into user table.
<br>
- handleChange for input on search field not passing state.
  #####
   -Resolved by passing the correct form data from the input to set state.
  <br>
- Search screen is redering on every page
  ##### 
  -Fixed error where Route was set "to="/search" vs "path="/search" 
<br>
- Nil JSON web token when accessing portfolio page
  ####
  -Updated users_controller 