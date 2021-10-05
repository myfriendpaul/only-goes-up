class CreateUsersCurrencies < ActiveRecord::Migration[6.1]
  def change
    create_table :users_currencies do |t|
      t.references :currency, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
