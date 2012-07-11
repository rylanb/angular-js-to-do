require 'spec_helper'

describe TodosController do

  context "#index" do
    before do
      get :index
    end
    it { should respond_with(:success) }
    #it { should render_template(:index) }
    it { should assign_to(:todos) }
  end

  context "#create" do

  end

  context "#update" do

  end

end
