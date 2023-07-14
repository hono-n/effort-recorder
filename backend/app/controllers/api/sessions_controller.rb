class Api::SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by(user_name: params[:user_name])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
    else
      flash.alert = 'ユーザー名とパスワードが一致しません'
    end
    redirect_to :root
  end

  def destroy
    session.delete(:user_id)
    flash.notice = 'ログアウトしました'
    redirect_to :root
  end
end
