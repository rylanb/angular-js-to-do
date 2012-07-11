class TodosController < ApplicationController

  def index
    @todos = Todo.all
    render :json => @todos.to_json, :status => :ok
  end

  def show
  end

  def create
    todo = Todo.new(:title => params[:title])
    if todo.save
      todo = Todo.find(todo.id)
      render :json => todo.to_json, :status => :ok
    else
      render :json => params[:title], :status => :unprocessable_entity
    end
  end

  def update
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render :json => "OK", :status => :ok
  end

end
