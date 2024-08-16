# WEB103 Prework - Creatorverse

Submitted by: **👉🏿 Liao Zhu**

About this web app: **👉🏿 Creatorverse allows users to upload profiles of their favorite creators!**

Time spent: **👉🏿 3.5** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [X] **A logical component structure in React is used to create the frontend of the app**
- [X] **At least five content creators are displayed on the homepage of the app**
- [X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X] **API calls use the async/await design pattern via Axios or fetch()**
- [X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [X] **Each content creator has their own unique URL**
- [X] **The user can edit a content creator to change their name, url, or description**
- [X] **The user can delete a content creator**
- [X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements ***I used tailwind instead***
- [X] The content creator items are displayed in a creative format, like cards instead of a list
- [X] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [X] List anything else that you added to improve the site's functionality!
- Default random images given to each content creator if imageURL is not provided

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='https://imgur.com/a/7j8pE22' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  👉🏿 EzGif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- I feel like given the fact that this is a prework assignment aimed towards beginners, Pico is not very intuitive to set up with React (the framework recommended to use). This is why I decided to use Tailwind instead - plus it's more modern at least to me.
- ShowCreators page and the "/" route "App" page if you want to call it (the root) are synonymous? Or am I mistaken? What I've done is I've made the "/" route point to ShowCreators since it appears the root page is supposed to show all the creators. I'm not sure if this is correct or not since it appears we keep App.js throughout the whole project (which is normal; however, usually it'd be the home page that then links to other pages). Not sure if that makes sense. Essentially what I'm saying is, usually App.js is the home page of a website that points to other pages, but it seems the instructions want the home page to be ShowCreators. I'm not sure if this is correct or not.

## License

Copyright [👉🏿 2024] [👉🏿 Liao Zhu]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.