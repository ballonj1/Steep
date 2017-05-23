@hosts.each do |host|
  json.set! host.id do
    json.id host.id
    json.user_id host.user_id
    json.event_id host.event_id
  end
end
