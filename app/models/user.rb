class User < ApplicationRecord
  has_secure_password
  has_many :users_currencies
  has_many :currencies, through: :users_currencies


  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }
end
