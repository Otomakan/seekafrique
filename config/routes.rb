Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'users/create', to: 'users#create'
  post 'users/authenticate', to: 'auth#userauthenticate'
  post 'users/checktoken', to: 'auth#userchecktoken'
  post 'users.json', to: "users#create"
  get 'users/show', to: 'users#show'
  post 'userprofile/pinfo', to: 'user_profiles#createpinfo'
  post 'userprofile/createedu', to: 'user_profiles#createedu'
  post 'userprofile/createworkh', to: 'user_profiles#createworkh'
  get 'userprofile', to: 'user_profiles#show'	
   post 'companys/create', to: 'companys#create'
  post 'companys/authenticate', to: 'auth#companyauthenticate'
  post 'companys/checktoken', to: 'auth#companychecktoken'
  post 'companyprofile/binfo', to: 'companys_profiles#createcompanyprofile'
  get 'companyprofile', to: 'companys_profiles#show'
  post 'company/jobpost/create', to: 'job_posts#createpost'	
  get 'company/jobpost/getall', to: 'job_posts#showallownposts'
end
