# Local development

1. cd into frontend folder and install dependencies
2. cd into functions folder and install dependencies
3. cd into functions folder and run `docker-compose up` to start a mongo instance in a docker container
4. cd into frontend folder  and run `netlify dev` to start the graphql server and dev server with HMR.


# Sould.se - Sould marketing agency web site

## Stack
Sould.se is a JAM-stack site. I's built with Gatsby.js, uses Dato \(headless CMS\) for storing content and the site is hosted on Netlify. The site uses Netlify functions to perform backend logic.

## Project folder structure
[Gatsby's hello-world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world) was used as a starting point to bootstrap this project but some changes have been made to the original structure.

### Project tree structure

    .
    ├── node_modules
    ├── src
      ├──components
      ├──gatsby-pages
        ├──Home
        ├──Contact
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-pages.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

During a gatsby build the gatsby-node.js script is using the gatsby-pages.js to pull in the pages and point them to a page template folder.

```javascript
const path = require('path')

// Page data used by gatsby createPages function to generate pages
module.exports = [
  {
    path: '/',
    component: path.resolve('./src/gatsby-pages/Home/index.js')
  },
  {
    path: '/kontakt',
    component: path.resolve('./src/gatsby-pages/Contact/index.js')
  }
]
```

## Prerequisits
You will need to have [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/) and [Netlify CLI](https://docs.netlify.com/cli/get-started/) installed on your local machine to run this project.

## Environment variables
Use a .env file to store environment variables in local development. The environment variables for production can be set either through the netlify.toml file or through the netlify admin area.

* DATO_API_TOKEN

## Scripts

```bash
gatsby develop
```
This command will start a devserver on port 8000.

  
```bash
npm run develop-mobile
```
This command will start a devserver on port 8000 that is accessible on external devices over the local network.


```bash
netlify dev
```
This command will start netlify's local dev environtment. A devserver will spin up on port 8000 which will watch for frontend changes. This command will also start a node server on port 34567. In development mode any request to /.netlify/functions/ will be proxied to the local node server. This makes it possible to develop and test the netlify funtions in a local environment.

## Branches
Should be up to date with production (master) branch. When developing a new feature pull down develop from remote.

* Master - production
* Develop - for local development
* Stage - for showcasing new features

## Continous deployment
Pushing changes to the branches above will trigger a build on netlify.
* Pushing to master will trigger a build avaliable under: sould.se
* Pushing to develop will trigger a build avaliable under: develop--sould.se
* Pushing to stage will trigger a build avaliable under: stage--sould.se