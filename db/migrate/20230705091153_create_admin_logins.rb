class CreateAdminLogins < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_logins do |t|
      t.string :doc_name
      t.string :password

      t.timestamps
    end
  end
end
