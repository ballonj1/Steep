class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      signIn(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      debugger
      render :show
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :image_url, :city_id)
  end
end
