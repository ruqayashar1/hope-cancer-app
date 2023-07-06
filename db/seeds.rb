Doctor.destroy_all
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
doctor1 = Doctor.create(name: "Japheth", password: "12345")
doctor2 = Doctor.create(name: "Rukia", password: "12345")
doctor3 = Doctor.create(name: "Charles", password: "12345")
doctor4 = Doctor.create(name: "Mercy", password: "12345")
doctor5 = Doctor.create(name: "Nyakundi", password: "12345")

progress_forms1= ProgressForm.create(patient_id: 3, name:"daniel" ,progress: "head scan done today and given some medication")
progress_forms2= ProgressForm.create(patient_id: 1, name:"yusuf" , progress: "leg scan done today and given some medication")

