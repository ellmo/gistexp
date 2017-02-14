class HomeController < ApplicationController

  def index; end

  def auth_response
    cookies[:github_client_id] = params[:code]
    redirect_to root_path
  end

end
