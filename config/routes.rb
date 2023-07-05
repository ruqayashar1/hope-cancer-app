Rails.application.routes.draw do
  resources :admin_logins, only: [:create]
  resources :appointments
  resources :user_profiles
  resources :patient_logins
  resources :patient_signups,only: [:create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
