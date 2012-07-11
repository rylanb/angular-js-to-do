require 'spec_helper'

describe ToDo do
  it "is invalid without a title" do
    todo = Factory.create :todo
  end

  it { should validate_presence_of :title }
end
