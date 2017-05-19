class Api::CitiesController < ApplicationController
  def create
    @city = City.new(city_params)
    if @city.save
      render :show
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

  def index
    @cities = City.all
    render :index
  end

  def show
    @city = City.find_by(id: params[:id])
    if @city
      render :show
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

  private
  def city_params
    params.require(:city).permit(:name, :image_url)
  end
end
