class Api::UsersController < ApplicationController
  # to be removed, just for testing
  def index
    @users = User.all
    render json: { status: 200, users: @users }
  end

  def show; end

  def create
    @user = User.new(user_params)

    if @user.save
      login!
      render json: { status: :created, user: @user }
    else
      render json: { status: 500, errors: ['failed to create user'] }
    end
  end

  def update; end

  def destroy; end

  private

  # ストロングパラメータ
  def user_params
    params.require(:user).permit(:user_name, :password, :password_confirmation)
  end
end
