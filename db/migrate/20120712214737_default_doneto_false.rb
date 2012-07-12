class DefaultDonetoFalse < ActiveRecord::Migration
  def up
    change_column_default(:todos, :done, false)
  end

  def down
    change_column_default(:todos, :done, nil)
  end
end
