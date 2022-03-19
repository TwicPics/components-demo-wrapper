# TwicPics Components Demo Wrapper Sample

This directory contains sample projects for all supported frameworks.

## Content

| subdirectory | content |
| - | - |
| `samples/gatsby` | [Gatsby.js](https://www.gatsbyjs.com/) sample project |
| `samples/next` | [Next.js](https://nextjs.org/) sample project |
| `samples/react` | [React](https://reactjs.org/) sample project |

## Usage

You must first install `@twicpics/components-demo-wrapper` using `yarn build` at the root of the repository.

Enter the corresponding directory, type `yarn serve` and point your browser towards `http://localhost:3000`.

## Development phase

For each sample project, in the package.json file, we inject the @twicpics/components-demo-wrapper dependency by pointing to the github repository for the specific main branch:

`"@twicpics/components-demo-wrapper": "git+https://github.com/TwicPics/components-demo-wrapper.git#main"`

To test the local modifications of the wrapper components, modify the line

`"@twicpics/components-demo-wrapper": "git+https://github.com/TwicPics/components-demo-wrapper.git#main"`

to 

`"@twicpics/components-demo-wrapper": "file:../.."`


