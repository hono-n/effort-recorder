Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    resources :users, only: %i[create] do
      resources :projects, only: %i[index create] do
        resources :histories, only: %i[index create]
      end
    end
    resource :session, only: %i[show create destroy]
  end
end
