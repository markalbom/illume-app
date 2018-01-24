Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/apiData', to: 'helper#index'

  namespace :api do
    resources :charities, except: [:index, :new, :update, :edit]
    get '/search/:query', to: 'charities#index'
  end

end
