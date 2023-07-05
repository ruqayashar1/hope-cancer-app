class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.string :user_name
      t.string :history

      t.timestamps
    end
  end
end
