const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const axios = require("axios");

const whatsappAccessToken = defineSecret("WHATSAPP_ACCESS_TOKEN");
const whatsappPhoneNumberId = defineSecret("WHATSAPP_PHONE_NUMBER_ID");
const verifyToken = defineSecret("VERIFY_TOKEN");

exports.whatsappWebhook = onRequest(
  {
    secrets: [whatsappAccessToken, whatsappPhoneNumberId, verifyToken],
    region: "africa-south1",
    cors: true,
  },
  async (req, res) => {
    console.log("Incoming request:", JSON.stringify(req.body));

    // Meta webhook verification
    if (req.method === "GET") {
      const mode = req.query["hub.mode"];
      const token = req.query["hub.verify_token"];
      const challenge = req.query["hub.challenge"];

      if (mode === "subscribe" && token === verifyToken.value()) {
        return res.status(200).send(challenge);
      } else {
        return res.sendStatus(403);
      }
    }

    // Handle incoming messages
    if (req.method === "POST") {
      try {
        const entry = req.body.entry?.[0];
        const changes = entry?.changes?.[0];
        const message = changes?.value?.messages?.[0];

        if (message && message.type === "text") {
          const userText = message.text.body;
          const senderId = message.from;

          console.log("📱 Received from:", senderId, "Message:", userText);

          // SIMPLE RESPONSE FOR TESTING - NO API CALL
          const botReply = `Thanks for your message: "${userText}"! This is a t                                                        est reply from our chatbot prototype. 🚀`;

          console.log("🤖 Would send reply:", botReply);

          // For now - to test - just log what WOULD be sent
          console.log("📤 Would send to WhatsApp API with token:", whatsappAcce                                                        ssToken.value().substring(0, 10) + "...");

          await axios.post(
            `https://graph.facebook.com/v18.0/${whatsappPhoneNumberId.value()}/                                                        messages`,
            {
              messaging_product: "whatsapp",
              to: senderId,
              text: { body: botReply },
            },
            {
              headers: {
                "Authorization": `Bearer ${whatsappAccessToken.value()}`,
                "Content-Type": "application/json",
              },
            }
          );
          */
        }

        return res.status(200).json({ status: "success" });
      } catch (error) {
        console.error("❌ Error:", error.message);
        return res.status(500).json({
          status: "error",
          message: error.message
        });
      }
    }

    return res.status(404).send("Not found");
  }
);

