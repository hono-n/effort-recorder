class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!
      render json: { status: :created, user: @user }
    else
      render json: { status: 500, errors: @user.errors }
    end
  end

  private

  # ストロングパラメータ
  def user_params
    params.require(:user).permit(:user_name, :password, :password_confirmation)
  end
end
