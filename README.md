# Oral-Health-Chatbot
IFS362 Individual Project. Improving the WotNot chatbot of Semester 1. 

For marking purposes please see [check out the appendix](appendix/) and [the training](training/)

SmileBot is an AI-powered oral health assistant designed to improve oral health awareness, education, and accessibility across South Africa.  

It integrates **Poe (custom-trained model), Firebase Functions, and WhatsApp Business API** to deliver conversational support to users in multiple languages.  

---

## Features
- Multilingual support (English, isiZulu, isiXhosa, Afrikaans and Setswana)
- AI-powered responses trained on oral health content
- WhatsApp integration for real-world accessibility
- Firebase Functions backend for scalability and deployment
- Ethical data handling – minimal storage, no sensitive data kept without consent

---

## Repo Structure
- [`functions/`](Oral-Health-Chatbot/functions/) → Firebase Cloud Functions (WhatsApp + Poe API integration)
- [`docs/`](Oral-Health-Chatbot/docs/) → Architecture diagrams, EA justification, Agile sprint plan
- [`appendix/`](Oral-Health-Chatbot/appendix/) → Proof of deployment (Firebase logs, screenshots, WhatsApp test messages)
- [`training/`](Oral-Health-Chatbot/training/) → Resources for SmileBot model training on Poe

---

## Setup & Deployment

### Setting up the AI Backend using Poe
**My AI Backend Chatbot using Poe is publically available: https://poe.com/SmileBot_2.0.1
and available under `appendix/`** 

##### 1. Sign into https://poe.com
##### 2. Select your bot type - for this tutorial choose Prompt Bot
<img width="1632" height="683" alt="image" src="https://github.com/user-attachments/assets/614b1e19-8a44-4b7d-8ae3-745fc26a999c" />

##### 3. Edit the bot name, description and base bot.
<img width="2273" height="1327" alt="image" src="https://github.com/user-attachments/assets/4561d04c-1f9a-4038-8339-569f142d0dfa" />

##### 4. Prompt bot as accurately as possible
(if you want to see my prompts for an Oral Health Chatbot - see ())
##### 5. Add knowledge base files. 
(These must regard what you want your chatbot to understand - like Oral Hygiene. See())
##### 6. After publishing the bot, select 
<img width="907" height="94" alt="image" src="https://github.com/user-attachments/assets/b2df47dd-9552-4ff6-a19f-a563e66bca59" />


### Setting up Firebase Functions
**Firebase isn't publically available, but you can view my proof of its existence under ()**

##### 1. Sign into Firebase via https://firebase.google.com/
##### 2. Create a new project and pick a name 
(Enable Google Analytics if you want)
<img width="2879" height="1616" alt="image" src="https://github.com/user-attachments/assets/7ce1ed1f-c949-4b35-ab58-a1178cfc22ea" />

##### 3. Wait patiently
<img width="839" height="546" alt="image" src="https://github.com/user-attachments/assets/179f8dc0-4b59-4d54-99b9-72f5c2ff32de" />

##### 4. Go to Build on the left side-bar and select Build > Functions
<img width="2879" height="1535" alt="image" src="https://github.com/user-attachments/assets/910efd43-c4eb-459e-877c-3b07a5b02085" />

##### 5. You will have to upgrade your billing plan from Spark to the Blaze plan.
It won't charge you immediately as its a pay-as-you-go plan. See billing plan documentation. https://firebase.google.com/pricing?authuser=0 
##### 6. After this you are presented with a Functions page with dashboard and usage tabs. We will come back here later

### Setting up WhatsApp API via Meta Developer
##### 1. Visit https://developers.facebook.com/ and select MyApps in the top right corner
<img width="2879" height="1633" alt="image" src="https://github.com/user-attachments/assets/5de85df2-9cc3-4721-b08f-d5c91caaaa11" />

##### 2. Select create an app > choose Other at the bottom of the page > pick Business app type
![WhatsApp Image 2025-08-24 at 22 56 45_949fa74c](https://github.com/user-attachments/assets/84c6cc08-f5a4-49bf-8863-a0eb52faba66)
![WhatsApp Image 2025-08-24 at 22 57 18_399a28b6](https://github.com/user-attachments/assets/61024754-371d-4676-a20c-76bb7c217141)
![WhatsApp Image 2025-08-24 at 22 57 37_4269e7f9](https://github.com/user-attachments/assets/110db629-1756-400e-b951-a17f0c350257)

##### 3. If you haven't done so already - it will prompt you to create a business portfolio. Proceed to do this.
##### 4. After creating the portfolio - add WhatsApp product to your app
![WhatsApp Image 2025-08-24 at 22 59 36_b3b07b13](https://github.com/user-attachments/assets/d172e7df-29aa-4f34-8e0e-4ba252b8fdbe)

##### 5. Under WhatsApp on the left go to API Setup > Generate access token. Also Generate a test phone number under 'From' and put your phone number (or phone number you will work with) under 'To'
![WhatsApp Image 2025-08-24 at 23 01 05_890cbce7](https://github.com/user-attachments/assets/3c1172bd-39af-4ae8-a86b-69afaeb0e388)

##### 6. Under WhatsApp on the left go to Configuration > under verify token create your own string token. We will get the Callback URL from the firebase function shortly. (GO TO Setting up node.js and Firebase on your local machine then come back)
##### 7. Once you receive your function url, place it into the callback url section then verify and save.
![WhatsApp Image 2025-08-24 at 23 04 55_006aea07](https://github.com/user-attachments/assets/4ea7fc13-1923-4e76-8b10-22af78f42539)

##### 8. Now go back to API Setup > Under Send messages with API > Send message.
This will prompt the test phone number to send your working phone number a message and in turn you can text it back.


### Setting up node.js and Firebase on your local machine
I will be using the Ubuntu WSL (Windows Subsystem for Linux) as my terminal. Feel free to use whatever is at your disposal but I find using a linux terminal is much easier
##### 1. Ensure you have node.js and update it if necessary. Installing dependencies.
```bash
sudo apt update             # Use dnf/yum for Fedora/CentOS/RHEL
sudo apt install nodejs npm

node -v                     # If version is v18.19.1; update
nvm install 22
nvm use 22                  # Makes v22.18.0 the default
npm install node-fetch      # 
```
##### 2. Initialise firebase - follow prompts of your choice (or follow mine)
```bash
firebase login
```
![WhatsApp Image 2025-08-25 at 00 58 32_6cee6d41](https://github.com/user-attachments/assets/1eedbd8c-2d63-4c96-971a-b501f351b7b5)

```bash
firebase init #Please select the default codebase named functions
```
<img width="745" height="1309" alt="image" src="https://github.com/user-attachments/assets/5b136a44-8960-48c3-b365-9e64f552188f" />

##### 3. Modify the index.js file 
```bash
cd functions/index.js
```
See `functions/index.js` for JavaScript code
##### 4. Create a secret manager file for your access tokens
```bash
cd ~
nano firebase-functions.sh
chmod +x firebase-functions.sh # This makes the file an executable
./firebase-functions.sh
```
See `firebase-functions.sh` 

##### 5. Deploy the Firebase function
```bash
firebase deploy --only functions
```
<img width="1059" height="823" alt="image" src="https://github.com/user-attachments/assets/c300210f-8897-433d-b578-17344ac38e24" />
Take note of the function URL
When deploying it will ask for your access tokens and phone number ID privately.
##### 6. Go to step 7 and 8 in Setting up WhatsApp API via Meta Developer 

# Congrats! You have now deployed your own WhatsApp Business chatbot API!






