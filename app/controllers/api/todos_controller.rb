class Api::TodosController < ApplicationController

  def index 
    render json: Todo.all
  end

  # if needed
  # def show
  #   render json: Todo.find(params[:id])
  # end

  def create
    @todo =Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      return json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render Json: @todo
    else
      return json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Todo.find(params[:id]).destroy
    render json: { message: 'Todo Deleted'}
  end


  private 
  def todo_params
    params.require(:todo).permit(:title, :complete)
  end

end
