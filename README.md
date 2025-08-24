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
### Setting up the AI Backend using Poe
#### 1. Sign into https://poe.com
#### 2. Select your bot type - for this tutorial choose Prompt Bot
#### 3. Edit the bot name, description and base bot.
#### 4. Prompt bot as accurately as possible
(if you want to see my prompts for an Oral Health Chatbot - see ())
#### 5. Add knowledge base files. 
(These must regard what you want your chatbot to understand - like Oral Hygiene. See())
#### 6. After publishing the bot, select 
<img width="907" height="94" alt="image" src="https://github.com/user-attachments/assets/b2df47dd-9552-4ff6-a19f-a563e66bca59" />


```bash
git clone https://github.com/YOUR_USERNAME/SmileBot.git
cd SmileBot/functions
