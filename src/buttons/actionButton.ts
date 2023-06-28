const inlineKeyboardMarkup = {
  inline_keyboard: [
    [
      { text: 'Так', callback_data: 'Фото' },
      { text: 'Назад', callback_data: 'Меню' },
                ],
  ],
};

export  const actionButton = {
  reply_markup: inlineKeyboardMarkup,
};