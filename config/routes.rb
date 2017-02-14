Rails.application.routes.draw do
  root "home#index"

  get "auth_response", to: "home#auth_response"
end
