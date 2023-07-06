class CreateProgressForms < ActiveRecord::Migration[7.0]
  def change
    create_table :progress_forms do |t|
      t.references :patient, null: false, foreign_key: true
      t.string :name
      t.string :progress

      t.timestamps
    end
  end
end
