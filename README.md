# Create My Portfolio Site

Fork this project to easily create a portfolio site using [Create React App](https://github.com/facebook/create-react-app) and [Material UI](https://material-ui.com/). The goal of this project is to quickly build a portfolio site.

## Usage

This app uses the `useContext` hook to populate the app. Fill out your information in the `/context/myInfo.json` file in order to fill the site with your information.

## Preview
![preview](https://github.com/brian-trann/create-my-portfolio-site/blob/master/assets/create-my-portfolio-site.png?raw=true)

### Getting started

1. Fork or clone this project. 
2. Install dependencies using `npm install`
3. Fill out `/context/myInfo.json`
4. *Optional and recommended*
   * Change Title in `public/index.html`
   * Change `public/favicon.ico`, `public/logo192.png`, `public/logo512.png`
5. Build and deploy!
   *  [Create React App Docs](https://reactjs.org/docs/create-a-new-react-app.html)
   *  `npm run build`

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

```json
{
    "navigation": {
        "name": "John Doe",
        "menu": [
            {
                "text": "Home",
                "url": "/",
                "target":""
            },
            {
                "text": "About",
                "url": "/about",
                "target":""
            },
            {
                "text": "Github",
                "url": "https://github.com/",
                "target":"_blank"
            },
            {
                "text": "LinkedIn",
                "url": "https://www.linkedin.com//",
                "target":"_blank"
            }
        ]
    },
    "main": {
        "greeting": "Hi, I'm John, a Software Developer from California",
        "blurb":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien tortor, ornare nec leo nec, convallis pulvinar tortor. Ut lorem sem, tempus eu cursus eu, pulvinar sit amet neque.",
        "profileImage": { 
            "url":"",
            "altText":"profile image"
        },
        "image": {
            "url": "/",
            "altText": "temp"
        }
    },
    "work":{
        "categoryName":"Selected Work",
        "projects":[
            {
                "projectName": "project0",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien tortor, ornare nec leo nec, convallis pulvinar tortor. Ut lorem sem, tempus eu cursus eu, pulvinar sit amet neque.",
                "url":"https://github.com/",
                "image": {
                    "url": "https://github.githubassets.com/images/modules/site/home/repo-browser.png",
                    "altText": "project0 thumbnail"
                }
            },
            {
                "projectName": "project1",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien tortor, ornare nec leo nec, convallis pulvinar tortor. Ut lorem sem, tempus eu cursus eu, pulvinar sit amet neque.",
                "url":"https://github.com/",
                "image": {
                    "url": "https://github.githubassets.com/images/modules/site/home/repo-browser.png",
                    "altText": "project1 thumbnail"
                }
            },
            {
                "projectName": "project2",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien tortor, ornare nec leo nec, convallis pulvinar tortor. Ut lorem sem, tempus eu cursus eu, pulvinar sit amet neque.",
                "url":"https://github.com/",
                "image": {
                    "url": "https://github.githubassets.com/images/modules/site/home/repo-browser.png",
                    "altText": "project2 thumbnail"
                }
            }
        ],
        "buttonName":"Go"
    },
    "about": {
        "categoryName":"About",
        "statement": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien tortor, ornare nec leo nec, convallis pulvinar tortor. Ut lorem sem, tempus eu cursus eu, pulvinar sit amet neque.",
        "skills":{
            "categoryName":"Skills",
            "items":[
                {
                    "type":"Languages",
                    "items":["JavaScript", "HTML", "CSS","Python","SQL"]
                },
                {
                    "type":"Libraries and Frameworks",
                    "items":["React", "Redux", "Express","Flask"]
                },
                {
                    "type":"Other",
                    "items":["other0", "other1"]
                }
            ]
        },
        "workExperience": {
            "categoryName":"Work Experience",
            "work": [
                {
                    "company":"company0",
                    "position":"position0",
                    "date":"Date 2020 - Date 2021",
                    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien tortor, ornare nec leo nec, convallis pulvinar tortor. Ut lorem sem, tempus eu cursus eu, pulvinar sit amet neque."
                },
                {
                    "company":"company2",
                    "position":"position1",
                    "date":"Date 2019 - Date 2020",
                    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien tortor, ornare nec leo nec, convallis pulvinar tortor. Ut lorem sem, tempus eu cursus eu, pulvinar sit amet neque."
                }
            ]
        },
        "education":{
            "categoryName":"Education",
            "items": [
                {
                    "name":"education0",
                    "curriculum":"curriculum0",
                    "date":"Date 2020 - Date 2021",
                    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien tortor, ornare nec leo nec, convallis pulvinar tortor. Ut lorem sem, tempus eu cursus eu, pulvinar sit amet neque."
                }
            ]
        },
        "certifications":{
            "categoryName":"Certifications",
            "items":["certification0", "certification1"]
        }
    },
    "other":{
        "images":[
            {"image":{
                "url":"https://github.githubassets.com/images/modules/site/home/repo-browser.png",
                "altText":"",
                "description":""
                }
            }
        ]
    }
}
```
### Deploying
I used [Surge](https://surge.sh/), but there are many ways to deploy React apps. To name a few options: Vercel, AWS Amplify, Netlify, Firebase.

### Tests
I have only implemented basic smoke and snapshot tests in order to make sure the components render.
