import TelegramBot from "node-telegram-bot-api";
import fs from "fs";

const token = "8456124027:AAFYrj0_mLTRvpNZUI_ZyGsD38zXyl2S7BA";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;


  const rasmFerrari = "ferrari.webp";
  const rasmLamborghini = "rasmLamborghini.webp";
  const rasmBMW = "bmwm3.jpg"; 

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
  }


  else if (text === "Mashinalar🏎") {
    await bot.sendMessage(chatId, "Mashinalar bo'limi tanlandi.", {
      reply_markup: {
        keyboard: [
          [{ text: "Sport Car" }, { text: "Classic Car" }],
          [{ text: "⬅️ Orqaga" }],
        ],
        resize_keyboard: true,
      },
    });
  }


  else if (text === "⬅️ Orqaga") {
    await bot.sendMessage(chatId, "Bosh menyuga qaytdingiz!", {
      reply_markup: {
        keyboard: [
          [{ text: "Mashinalar🏎" }],
          [{ text: "Tel Nomerlar📞" }, { text: "Kompuyuterlar💻" }],
        ],
        resize_keyboard: true,
      },
    });
  }


  else if (text === "Sport Car") {
    await bot.sendMessage(chatId, "Sport Car bo'limi tanlandi.", {
      reply_markup: {
        keyboard: [
          [{ text: "Ferrari" }, { text: "Lamborghini" }],
          [{ text: "BMW M3" }],
          [{ text: "⬅️ Orqaga" }],
        ],
        resize_keyboard: true,
      },
    });
  }


  else if (text === "Ferrari") {
    await bot.sendMessage(chatId, "Ferrari bo'limi tanlandi", {
      reply_markup: {
        keyboard: [
          [{ text: "Narx" }, { text: "Rasmlar" }],
          [{ text: "⬅️ Orqaga" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text === "Narx") {
    await bot.sendMessage(chatId, "Ferrari narxi: $200,000", {
      reply_markup: {
        inline_keyboard: [[{ text: "Sotib olish", callback_data: "buy_ferrari" }]],
      },
    });
  } else if (text === "Rasmlar") {
    await bot.sendPhoto(chatId, rasmFerrari);
  }

  else if (text === "Lamborghini") {
    await bot.sendMessage(chatId, "Lamborghini bo'limi tanlandi", {
      reply_markup: {
        keyboard: [
          [{ text: "Narx" }, { text: "Rasmlar" }],
          [{ text: "⬅️ Orqaga" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text === "Narx") {
    await bot.sendMessage(chatId, "Lamborghini narxi: $250,000", {
      reply_markup: {
        inline_keyboard: [[{ text: "Sotib olish", callback_data: "buy_lamborghini" }]],
      },
    });
  } else if (text === "Rasmlar") {
    await bot.sendPhoto(chatId, rasmLamborghini);
  }

  else if (text === "BMW M3") {
    await bot.sendMessage(chatId, "BMW M3 bo'limi tanlandi", {
      reply_markup: {
        keyboard: [
          [{ text: "Narx" }, { text: "Rasmlar" }],
          [{ text: "⬅️ Orqaga" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text === "Narx") {
    await bot.sendMessage(chatId, "BMW M3 narxi: $150,000", {
      reply_markup: {
        inline_keyboard: [[{ text: "Sotib olish", callback_data: "buy_bmw" }]],
      },
    });
  } else if (text === "Rasmlar") {
    await bot.sendPhoto(chatId, rasmBMW);
  }
});


bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === "buy_ferrari") {
    await bot.sendMessage(
      chatId,
      "Siz Ferrari uchun 'Sotib olish' tugmasini bosdingiz. Tez orada siz bilan bog'lanamiz!"
    );
  } else if (data === "buy_lamborghini") {
    await bot.sendMessage(
      chatId,
      "Siz Lamborghini uchun 'Sotib olish' tugmasini bosdingiz. Tez orada siz bilan bog'lanamiz!"
    );
  } else if (data === "buy_bmw") {
    await bot.sendMessage(
      chatId,
      "Siz BMW M3 uchun 'Sotib olish' tugmasini bosdingiz. Tez orada siz bilan bog'lanamiz!"
    );
  }
});
