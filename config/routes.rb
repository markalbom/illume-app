Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :charities, except: [:index, :new, :update, :edit]
    post '/search', to: 'charities#index'
  end

end
