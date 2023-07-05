Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/signedup', to: 'patients#create'
  post '/loggedin', to: 'sessions#create'
  get '/patients', to: 'sessions#index'
  post '/adminlogin', to: 'doctors#create'
end
