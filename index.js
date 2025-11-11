import TelegramBot from "node-telegram-bot-api";
import fs from "fs";

const token = "8456124027:AAFYrj0_mLTRvpNZUI_ZyGsD38zXyl2S7BA";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const rasmferrari = "ferrari.webp";

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      `Assalomu alaykum, ${firstname}! Botga xush kelibsiz!`,
      {
        reply_markup: {
          keyboard: [
            [{ text: "Mashinalar🏎" }],
            [{ text: "Tel Nomerlar📞" }, { text: "Kompuyuterlar💻" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (text === "Mashinalar🏎") {
    await bot.sendMessage(chatId, "Mashinalar bo'limi tanlandi.", {
      reply_markup: {
        keyboard: [
          [{ text: "Sport Car" }, { text: "Classic Car" }],
          [{ text: "⬅️ Orqaga" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text === "⬅️ Orqaga") {
    await bot.sendMessage(chatId, "Bosh menyuga qaytdingiz!", {
      reply_markup: {
        keyboard: [
          [{ text: "Mashinalar🏎" }],
          [{ text: "Tel Nomerlar📞" }, { text: "Kompuyuterlar💻" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text === "Sport Car") {
    await bot.sendMessage(chatId, "Sport Car bo'limi tanlandi.", {
        reply_markup: {
            keyboard: [
                [{ text: "Ferrari"} , { text: "Lamborghini"}],
                [{ text: "BMW M3"}],
                [{ text: "⬅️ Orqaga"}],
            ],
        },
    });
  } else if (text === "Ferrari") {
    await bot.sendMessage(chatId, "Ferrari bo'limi tanlandi", {
        reply_markup: {
            keyboard: [
                [{ text: "Narx"} , { text: "Rasmlar"}],
            ]
        }
    });
  } else if (text === "Narx") {
    await bot.sendMessage(chatId, "Ferrari narxi: $200,000",{
        reply_markup: {
            inline_keyboard: [
                [{ text: "Sotib olish"}]
            ]
        } 
    });
  } else if (text === "Sotib olish") {
    await bot.sendMessage(chatId, "Siz sotib olish tugmasini bosdingiz. Tez orada siz bilan bog'lanamiz!");
  } else if (text === "Rasmlar") {
     
  }
});
