class HomeController < ApplicationController

  def index; end

  def auth_response
    second_step_params = {
      client_id: "1921e4072d1b9108c5a8",
      client_secret: "b6f0022ec7eb03e5505092e2ea0e4d14eb906d9e",
      code: params[:code],
    }
    github_response = Net::HTTP.post_form(
      URI.parse("https://github.com/login/oauth/access_token"),
      second_step_params
    )
    github_response = CGI::parse(github_response.body)
    cookies[:github_user_token] = github_response["access_token"].first
    redirect_to root_path
  end

end
