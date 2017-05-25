class Api::JoinsController < ApplicationController
  def create
    @join = Join.new(join_params)
    if @join.save
      render :show
    else
      render json: @join.errors.full_messages
    end
  end

  def destroy
    @join = Join.find_by(id: params[:id])
    @join.destroy
    render :show
  end

  def index
    @user = User.find_by(id: params[:user_id])
    @joins = @user.joins
    if @joins.length > 0
      render :index
    else
      render json: []
    end
  end

  private
  def join_params
    params.require(:join).permit(:user_id, :event_id)
  end
end
