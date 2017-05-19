class Api::CitiesController < ApplicationController
  def create

  end

  def index
    @cities = Cities.all
  end

  def show

  end
end
