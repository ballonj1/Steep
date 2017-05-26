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
    @join = Join.find_by(user_id: params[:join][:user_id], event_id: params[:join][:event_id])
    @join.destroy
    @event = Event.find_by(id: @join.event_id)
    @event.update_attribute(:current_attend, (@event.current_attend - 1))
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
