class Api::HistoriesController < ApplicationController
  def index
    @project = project
    @histories = @project.histories
    if @histories.empty?
      render json: { status: :ok, total: 0, histories: @histories }
    else
      total = @histories.order(id: :desc).first.total
      target_month_array = @project.histories.select(:target_month).group(:target_month).order(target_month: :desc)

      histories_per_month = target_month_array.map do |month|
        target_month = month.target_month
        { "#{target_month}": @project.histories.where('target_month = ?', target_month).order(id: :desc) }
      end
      render json: { status: :ok, total:, histories: histories_per_month }
    end
  end

  def create
    @project = project
    @history = @project.histories.new(history_params)

    if @history.save
      render json: { status: :created, history: @history }
    else
      render json: { status: 500, errors: @history.errors }
    end
  end

  private

  def project
    @user = User.find(params[:user_id])
    @user.projects.find(params[:project_id])
  end

  def history_params
    params.require(:history).permit(
      :user_id, :project_id, :target_month, :target_date, :start_timestamp, :end_timestamp, :total, :memo
    )
  end
end
