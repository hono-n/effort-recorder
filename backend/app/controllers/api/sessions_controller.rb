class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(user_name: session_params[:user_name])
    if @user&.authenticate(session_params[:password])
      login!
      render json: { logged_in: true, user: @user }
    else
      render json: { status: 401, errors: ['【Rails】 authenticateメソッドの実行に失敗'] }
    end
  end

  def show
    if current_user
      render json: { logged_in: true, user: @current_user }
    else
      render json: { logged_in: false, message: '【Rails】ログインしていません' }
    end
  end

  def destroy
    session.delete(:user_id)
    render json: { status: 200, logged_out: true }
  end

  private

  def session_params
    params.require(:user).permit(:user_name, :password)
  end
end
