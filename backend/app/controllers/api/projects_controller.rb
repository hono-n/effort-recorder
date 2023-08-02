class Api::ProjectsController < ApplicationController
  def index
    # ネストされたリソースにおける取得の仕方：params[:リソース名の単数系_id]
    @user = User.find(params[:user_id])
    @projects = @user.projects
    if @projects.empty?
      render json: { status: :ok, projects: 'none' }
    else
      render json: { status: :ok, projects: @projects }
    end
  end

  def create
    @user = User.find(params[:user_id])
    @project = @user.projects.new(project_params)

    if @project.save
      render json: { status: :created, project: @project }
    else
      render json: { status: 500, errors: @project.errors }
    end
  end

  def project_params
    params.require(:project).permit(:name, :user_id)
  end
end
