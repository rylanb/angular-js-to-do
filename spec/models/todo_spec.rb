require 'spec_helper'

describe ToDo do
  it "has a valid factory" do
    FactoryGirl.create(:todo).should be_valid
  end

  it "should not be valid without a title" do
    FactoryGirl.build(:todo, title: nil).should_not be_valid
  end

  it "should mark new to-do as unfinished" do
    todo = FactoryGirl.build(:todo)
    todo.finished?.should eq(false)
  end

  it "should return done to-do as finished" do
    todo = FactoryGirl.build(:done)
    todo.finished?.should eq(true)
  end

end
