class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :cancer_type
      t.string :doc_name
      t.string :condition
      t.datetime :date
      t.string :hospital_branch

      t.timestamps
    end
  end
end
