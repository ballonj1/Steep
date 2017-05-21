Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :create, :destroy]
    resources :cities, only: [:index, :show, :create]
    resources :hosts, only: [:index, :create, :update, :destroy]
    resources :joins, only: [:create, :destroy, :index, :show]
  end
end
