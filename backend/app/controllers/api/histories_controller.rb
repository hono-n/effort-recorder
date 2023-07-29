class Api::HistoriesController < ApplicationController
  def index
    @histories = histories
    total = @histories.first.total
    target_month = @projects.histories.select(:target_month).group(:target_month).order(target_month: :desc)

    @histories = target_month.map do |month|
      target_month = month.target_month
      { "#{target_month}": @projects.histories.where('target_month = ?', target_month).order(id: :desc) }
    end
    render json: { status: :ok, total:, histories: @histories }
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

  private

  def project_params
    params.require(:project).permit(:name, :user_id)
  end

  def histories
    @user = User.find(params[:user_id])
    @projects = @user.projects.find(params[:project_id])
    @projects.histories.order(id: :desc)
  end
end
