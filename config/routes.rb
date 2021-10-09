Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources  :users 
  resources :currencies do
    resources :users_currency
    
  end
  root 'currencies#index'
  post 'search', to: 'currencies#search'
  post '/calculate/:id', to: 'currencies#calculate'
  put '/currencies/:id/add', to: 'currencies#add_currencies_to_users'
  get '/user-portfolio/:id', to: 'currencies#user_index'
end
