class ApplicationController < ActionController::API
  # skip_before_action :verify_authenticity_token

  include AbstractController::Helpers
  helper_method :login!, :current_user

  private

  def login!
    session[:user_id] = @user.id
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end
end
