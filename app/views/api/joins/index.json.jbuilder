@joins.each do |join|
  json.set! join.id do
    json.id join.id
    json.user_id join.user_id
    json.event_id join.event_id
  end
end
