# example-submission-repository

You may submit all the exercises of this course into the same repository, or use multiple repositories. If you submit exercises of different parts into the same repository, please
use a sensible naming scheme for the directories.

One very functional file structure for the submission repository is as follows:

<pre>
part0
part1
  courseinfo
  unicafe
  anecdotes
part2
  phonebook
  countries
</pre>

Put the whole react repository of the project to each folder except the folder <i>node_modules</i>

## Get started

- Clone this repo and update the remote for your own github's repo via command line using `git remote set-url origin <my-full-stack-course-github-repo-url>`.

## Installing yarn

- Install `yarn` via `npm i -g yarn`, as yarn doesn't come bundled with node.

## Using yarn (in a disk space friendly way)

- Install a cloned node project from github via command `yarn` instead of `npm install`.
- To create a react app, use `yarn create react-app my-app` inside respective part folders.
- To add production dependency, use `yarn add dep1 dep2` instead of `npm i dep1 dep2`.
- To add development dependency, use `yarn add -D dep1 dep2` instead of `npm i -D dep1 dep2`.

**Note:** You must use `yarn` instead of `npm` to utilise the dependency sharing between your projects in any nested folder. In case you accidentaly used `npm i` or `npm i dep1` or
`npm i -D dep2`, simply run rm -rf node_modules and use `yarn` or `yarn add dep1` or `yarn add -D dep2` respectively.
