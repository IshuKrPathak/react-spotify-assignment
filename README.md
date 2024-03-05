<a name="readme-top"></a>
<div align="center">


  <br/>
  <h3><b> Spotify Assignmnet ( F-DEV ) </b></h3>
</div>

#📸 Snaps




Spotify is a music player used by millions of users worldwide. Spotify’s Developer API has been made free to use and experiment by the company.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

The Tech stack for this project include Next.JS , Material UI , Spotify Api , Redux-Toolkit.


### Key Features <a name="key-features"></a>
1. Searching all the tracks from API and display them in Grid View.
2. Popularity - None, Low, Medium, High(You can decide the threshold)
3. Search bar - To search a track by artist name.
4. Show both Grid and List view and give the option to choose between the two.
5. Add client-side pagination

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>



- [Live Demo Link](https://react-spotify-assignment.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>



To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need to install node in your system :
If it is already installed in your system then run this command in your CMD .

 command: 

```sh
node --version

```
### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/IshuKrPathak/react-spotify-assignment.git
```


### Install

Install this project with:


```sh
  npm install
  cd my-project
```

### Usage

To run the project, execute the following command:

```sh
 npm run dev
```

If any error arises regarding node versions while running the development server by running command - "npm run dev" . So firstly run one more command 
```sh
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```
then run again

```sh
npm run dev
```
The server runs successfully.


Setting up Spotify Web API -> To get access to the Spotify Web API so that we can get a lot of details from the API, we must create an API credential at Spotify Developers Website.
Here’s the full URL👇
https://developer.spotify.com/dashboard/

Then you have to press login and login using your Spotify account, although, you can use Google, Facebook or Apple for third party agents as logging into Spotify. You must be redirected to the Dashboard of spotify developer.

If you are here, great! Just press the “Create an App” button so that we can generate our Spotify API credentials.

Give you app a name, in this case I will use “spotify-clone-medium” and give it a description. Make sure you agree Spotify’s Terms of Service before pressing “Create”.

Here, copy the Client ID and save it somewhere, we will need it in the app. We would not require the Client Secret but you need to keep it a secret and should not be shared in any circumstances

Now, click on the Edit Settings buttonin the Redirect URIs field, enter our development server address which is http://localhost:3000/ (do not forget the slash in the end). After you enter click on the Add button besides it and finally, hit Save.

Work on Spotify Configuration File -> Spotify.js

Here’s the logic behind the Spotify configuration file:

The "authEndpoint" is the URL where we need to authenticate using Spotify. All Spotify Authentication requests must be passed through this URL.

The "redirectUri" is the one which we gave in the Spotify Web API settings, this states where to take back the user if the Spotify login was successful.

The "clientId" is the Client ID provided to you by the Spotify Web API and you need to mention it here.

"scopes" are basically permissions which you need to ask Spotify for. More such permissions are available on Spotify API Documentation.

The loginUrl is the final URL which needs to be called in order to authorize an user for our Spotify Clone app. This URL contains the Client ID and all the permissions so that Spotify knows about our app and allows user authentication.

Now, if you try to click on Login with Spotify on your app in the browser, you will see you are redirected to Spotify asking to login and then requesting authorization. Once you authorize, you find yourself back in the Spotify Clone, but this time, you see an access token in the URL bar. We need that Access Token in order to authenticate users. To do that, we need to take it out of URL bar.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>


👤 **Author**

- GitHub: [@githubhandle](https://github.com/Ishukumarpathak)
- Twitter: [@twitterhandle](https://twitter.com/ishu__pathak)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/ishu-pathak/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



🔴 Note :- If there is any problem in deployed link i.e. not working . Then run the project locally. It works fine. 🔴









