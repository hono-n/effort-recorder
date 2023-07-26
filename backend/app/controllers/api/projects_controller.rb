class Api::ProjectsController < ApplicationController
  def index
    # ネストされたリソースにおける取得の仕方：params[:リソース名の単数系_id]
    @user = User.find(params[:user_id])
    @projects = @user.projects
    render json: { status: :ok, projects: @projects }
  end
end
