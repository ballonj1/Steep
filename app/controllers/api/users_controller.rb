class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = user.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  def edit
    @user = user.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end
end
