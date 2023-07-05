class CreatePatientLogins < ActiveRecord::Migration[7.0]
  def change
    create_table :patient_logins do |t|
      t.string :user_
      t.string :name
      t.string :password
      t.string :password_digest

      t.timestamps
    end
  end
end
