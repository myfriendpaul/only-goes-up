class Currency < ApplicationRecord
  has_many :users, through: :users_currencies


  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end

  def current_price
    url = 'https://api.nomics.com/v1/currencies/ticker?key=8d71abdf6b951f83daab569d5bf0f3fa7f0a9b78&ids='
    request = HTTParty.get(url + self.currency_symbol)
    response = JSON.parse(request.body)[0]["price"]
  end
end
