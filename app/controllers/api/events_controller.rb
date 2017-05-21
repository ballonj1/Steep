class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    @events = Event.all
  end

  def delete
    @event = Event.find_by(id: params[:id])
    @event.destroy
    render :show
  end

  def event_params
    params.require(:event).permit(:date, :time, :address, :description, :max_attend, :host_id, :user_id)
  end
end
