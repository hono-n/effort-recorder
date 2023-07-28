class Api::HistoriesController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @projects = @user.projects.find(params[:project_id])
    @histories = @projects.histories.order(id: :desc)

    target_month = @projects.histories.select(:target_month).group(:target_month).order(target_month: :desc)
    target_month_array = target_month.map do |t|
      t.target_month
    end

    render json: { status: :ok, month: target_month_array, projects: @histories }
  end

  # def create
  #   @user = User.find(params[:user_id])
  #   @project = @user.projects.new(project_params)

  #   if @project.save
  #     render json: { status: :created, project: @project }
  #   else
  #     render json: { status: 500, errors: @project.errors }
  #   end
  # end

  def project_params
    params.require(:project).permit(:name, :user_id)
  end
end
