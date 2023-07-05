class CreatePatientSignups < ActiveRecord::Migration[7.0]
  def change
    create_table :patient_signups do |t|
      t.string :user_name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
