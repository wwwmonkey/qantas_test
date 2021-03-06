# Qantas FED Test

## Architecture &amp; Design decisions

Most recently I have been working with Salesforce's [LWC UI framework](https://lwc.dev/), but as React continues to be the most popular UI framework I've decided to refresh my skills and utilise it for this test.  As such, it's also likely to be easier to review the code.

I enjoy using CSS utility classes when the site's theme has been setup and most recently used Salesforce's [Lightning design language](https://www.lightningdesignsystem.com/).  Bootstrap 5 has gone native JS, which is interesting, but I've wanted to look at [Tailwind](https://tailwindcss.com/) for a while so let's include that.  In an optimisation phase the utility classes could be extracted with [@apply](https://v1.tailwindcss.com/course/composing-utilities-with-apply)

So, there is a tradeoff between revisting and learning new skills versus speed/optimisation.  I'd like to utilise this test as motivation to research and learn, so let's checkout something 'new'.

Noticed part-way through the build that my tooling is configured for LWC so ESLint, Prettier, Accessibility linting etc doesn't seem to working correctly in VSCode...

I investigated .module.scss files for the Ratings component. I had an unresolved local configuration issue so have fallen back to BEM SCSS.

## Assumptions taken in build

The screenshot shows the Sort selected as Price high-low, but the data doesn't appear to be sorted as such.  I'm assuming it should be sorted Desc by default.

The Offer name is shown as a hyperlink.  Seems a confusing UX, but as there is no spec I would assume the whole list element is clickable. But I have seen requirements previously were there was requirements for popups from child elements etc that don't follow the parent's link.

## Testing

I quite like the TDD model, but I found it challenging to pre-write tests in the absence of Gherkin specifications.
I've currently only written one tests and would prioritise this if spending more time.

## Conclusion

This code is far from production ready, but whilst working sporadically over the weekend I've enjoyed reconnecting with React and investigating Tailwind. The Tailwind documentation was quite good.

The component is somewhat responsive and follows the idea of the design.  With more time available I would:

* Write more functional and e2e tests
* Optimise the code for maintenance and performance
* Perform browser and other testing
* Make sure the code follows corporate style, accessibility and other guidelines
* peer review etc

## Breakdown of installers used

[CRA - Create React App](https://create-react-app.dev/docs/getting-started/)

[React Testing Library](https://create-react-app.dev/docs/running-tests#react-testing-library)

[Tailwind](https://tailwindcss.com/docs/guides/create-react-app)

## Default CRA README follows

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
