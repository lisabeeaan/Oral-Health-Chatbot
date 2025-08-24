# Oral-Health-Chatbot
IFS362 Individual Project. Improving the WotNot chatbot of Semester 1. For marking purposes please see `appendix/` and `training/`

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
- `functions/` → Firebase Cloud Functions (WhatsApp + Poe API integration)
- `docs/` → Architecture diagrams, EA justification, Agile sprint plan
- `appendix/` → Proof of deployment (Firebase logs, screenshots, WhatsApp test messages)
- `training/` → Resources for SmileBot model training on Poe

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

### Setting up node.js and Firebase on our local machine
I will be using the Ubuntu WSL (Windows Subsystem for Linux) as my terminal. Feel free to use whatever is at your disposal but I find using a linux terminal is much easier
##### 1. Ensure you have node.js and update it if necessary
```bash
sudo apt update             # Use dnf/yum for Fedora/CentOS/RHEL
sudo apt install nodejs npm

node -v                     # If version is v18.19.1; update
nvm install 22
nvm use 22                  # Makes v22.18.0 the default
```
##### 2. Initialise firebase - follow prompts of your choice (or follow mine)
```bash
firebase login
```
![WhatsApp Image 2025-08-25 at 00 58 32_6cee6d41](https://github.com/user-attachments/assets/1eedbd8c-2d63-4c96-971a-b501f351b7b5)
```bash
firebase init
```
<img width="778" height="1069" alt="image" src="https://github.com/user-attachments/assets/68b6f7bc-7e6e-448f-83e5-1632297bd0df" />


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


































```bash
git clone https://github.com/YOUR_USERNAME/SmileBot.git
cd SmileBot/functions
