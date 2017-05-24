class Api::HostsController < ApplicationController
  def create
    @host = Host.new(host_params)
    if @host.save
      render :show
    else
      render json: @host.errors.full_messages, status: 422
    end
  end

  def index
    @user = User.find_by(id: params[:user_id])
    @hosts = @user.hosts
    render :index
  end

  def destroy
    @host = Host.find_by(id: params[:id])
    @host.destroy
    render :show
  end

  def update
    @host = Host.find_by(id: params[:id])
    if @host.update_attributes(host_params)
      render :show
    else
      render json: @host.errors.full_messages, status: 422
    end
  end

  def host_params
    params.require(:host).permit(:user_id, :event_id)
  end
end
