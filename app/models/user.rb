class User < ApplicationRecord
  attr_accessor :quantity
  has_secure_password
  has_and_belongs_to_many :currencies #,through: :users_currency


  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }
end
