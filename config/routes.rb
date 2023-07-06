Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/signedup', to: 'patients#create'
  post '/loggedin', to: 'sessions#create'
  post '/patients', to: 'doctors#all_appointments'
  post '/adminlogin', to: 'doctors#create'
  post '/appointment', to: 'appointments#create'
end
