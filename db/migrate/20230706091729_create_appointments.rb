class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.references :doctor, null: false, foreign_key: true
      t.references :patient, null: false, foreign_key: true
      t.string :cancer
      t.string :severity
      t.string :appointment_date
      t.string :appointment_time
      t.string :hospital

      t.timestamps
    end
  end
end
