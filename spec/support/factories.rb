require 'faker'

FactoryGirl.define do
  sequence :email do |n|
    "email#{n}@imacat.com"
  end

end
