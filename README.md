<a name="readme-top"></a>
<div align="center">


  <br/>
  <h3><b> Spotify Assignmnet ( F-DEV ) </b></h3>
</div>

#📸 
![Screenshot 2024-03-02 133020](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/925d396f-9aeb-4977-b12d-2e9a1c86af79)

#📸 Snaps


![Screenshot 2024-03-06 110034](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/cc17c6a7-6b00-4de8-bcba-d165063fa38c)

![Screenshot 2024-03-06 110053](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/ba993726-df84-4888-a1fb-ab65cc0441a8)

![Screenshot 2024-03-06 110109](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/8fd8c130-585b-4a10-a846-16c8875a7027)

![Screenshot 2024-03-06 110127](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/d0f12d6e-f4af-44c4-9934-c1fb87d8e5bb)

![Screenshot 2024-03-06 110138](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/86f6f272-e450-450e-aef2-b1b6c22cd278)

![Screenshot 2024-03-06 110148](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/468fedde-8b7c-4b97-9469-9062b01158d1)


![Screenshot 2024-03-06 110203](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/2db05a62-9e4a-4d72-a68b-7d73d5b30ee1)

![Screenshot 2024-03-06 110221](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/a304b72f-486a-497a-8ab6-c9a430ee5cdc)

![Screenshot 2024-03-06 110239](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/a3b6e486-1edb-41e5-8560-f51261af78b4)

![Screenshot 2024-03-06 110300](https://github.com/IshuKrPathak/react-spotify-assignment/assets/77011944/f734f63c-eb39-450b-8a4e-05e49b8e9437)

Spotify is a music player used by millions of users worldwide. Spotify’s Developer API has been made free to use and experiment by the company.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

The Tech stack for this project include Next.JS , Material UI , Spotify Api , Redux-Toolkit.


### Key Features <a name="key-features"></a>
1. Searching all the tracks from API and display them in Grid View.
2. Popularity - None, Low, Medium, High(You can decide the threshold)
3. Search bar - To search a track by artist name.
4. Show both Grid and List view and give the option to choose between the two.
5. Client-side pagination

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live video Link](https://youtu.be/Fz7cFLwk_Yo?si=vbfw41p3B4FX-Grd)

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









