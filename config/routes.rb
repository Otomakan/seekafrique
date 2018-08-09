Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'users/create', to: 'users#create'
  post 'authenticate', to: 'auth#authenticate'
  post 'checktoken', to: 'auth#checktoken'
  get 'users/show', to: 'users#show'
  post 'userprofile/pinfo', to: 'user_profiles#createpinfo'
end
