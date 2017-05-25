class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    if @event.save
      current_user.hosts.create(event_id: @event.id, user_id: @event.host_id)
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

  def show
    @event = Event.find_by(id: params[:id])
    if @event
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    new_attend = params[:event][:current_attend].to_i
    @event = Event.find_by(id: params[:id])
    if (@event.current_attend < new_attend) && new_attend <= @event.max_attend
      if @event.update_attributes(event_params)
        current_user.joins.create(user_id: current_user.id, event_id: @event.id)
        @city = City.find(@event.city_id)
        render 'api/cities/show'
      else
        render json: @event.errors.full_messages
      end
    elsif @event.current_attend > new_attend
      if @event.update_attributes(event_params)
        @join = current_user.joins.find_by(event_id: params[:id])
        @join.destroy
        @city = City.find(@event.city_id)
        render 'api/cities/show'
      else
        render json: @event.errors.full_messages
      end
    end
  end

  def destroy
    @event = Event.find_by(id: params[:id])
    @event.destroy
    render :show
  end

  def event_params
    params.require(:event).permit(:date, :time, :address, :description, :host_id, :city_id, :max_attend, :current_attend)
  end
end
