const inlineKeyboardMarkup = {
    inline_keyboard: [
      [
        { text: 'Так', callback_data: 'Так' },
        { text: 'Назад', callback_data: 'Меню' },
                  ],
    ],
  };

 export  const activeButton = {
    reply_markup: inlineKeyboardMarkup,
  };