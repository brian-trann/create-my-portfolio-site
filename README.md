# Create My Portfolio Site

Fork this project to easily create a portfolio site using [Create React App](https://github.com/facebook/create-react-app) and [Material UI](https://material-ui.com/). The goal of this project is to quickly build a portfolio site.

## Usage

This app uses the `useContext` hook to populate the app. Fill out your information in the `/context/myInfo.json` file in order to fill the site with your information.

### Getting started

1. Fork or clone this project. 
2. Install dependencies using `npm install`
3. Fill out `/context/myInfo.json`

### myInfo 
* `navigation`
  * `name`: Your name - This will populate different areas of the application, including NavBar and Footer component.
  * `menu`
    * This array of objects will populate the NavBar buttons.
    * `"target":"_blank"` this value will open a new tab when clicked.
* `main`
  * contents of this object will help populate the Main component.
  * `profileImage.url` : Static profile image url
* `work`
  * `categoryName` : This value will be used to show your works on the Main component
  * `projects` : This array of objects is where you can add projects, and the Main component will iterate on this array. **Note**: Keep the object shape consistent in order to keep rendering consistent.
* `about`
  * `categoryName` : This value will be used to show your works on the About component
  * `skills.items`, `workExperience.work`, `education.items` 
    * This array of objects is where you can add projects, and the About component will iterate on this array. **Note**: Keep the object shape consistent in order to keep rendering consistent.
  
* `other`
  * I added this other section to keep information that I might want to use in the app
### Deploying
There are many ways to deploy a React App. I used [Surge](https://surge.sh/)

### Tests
I have only implemented basic smoke and snapshot tests in order to make sure the components render.