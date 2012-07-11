# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :todo do
    title "My Title"

    factory :done do
      done true
    end
  end
end
