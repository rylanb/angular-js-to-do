class Todo < ActiveRecord::Base
  attr_accessible :title
  validates_presence_of :title

  def finished?
    return self.done == true
  end
end
