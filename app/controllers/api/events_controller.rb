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
    @city = City.find_by(id: params[:city_id])
    if @city
      @events = @city.events
      if @events
        render :index
      else
        render json: @city.errors.full_messages, status: 422
      end
    end
  end

  def delete
    @event = Event.find_by(id: params[:id])
    @event.destroy
    render :show
  end

  def event_params
    params.require(:event).permit(:date, :time, :address, :description, :host_id, :user_id, :max_attend)
  end
end
