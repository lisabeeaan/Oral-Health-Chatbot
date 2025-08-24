# Oral-Health-Chatbot
IFS362 Individual Project. Improving the WotNot chatbot of Semester 1.

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
---
### Setting up the AI Backend using Poe
**My AI Backend Chatbot using Poe is publically available: https://poe.com/SmileBot_2.0.1** 

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

---
### Setting up Firebase Functions
**Firebase isn't publically available, but you can view my proof of its existence under ()**

####




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
