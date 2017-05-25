@hosts.each do |host|
  json.set! host.id do
    json.id host.id
    json.user_id host.user_id
    json.event_id host.event_id
    json.event do
      json.id host.event.id
      json.date host.event.date
      json.time host.event.time
      json.address host.event.address
      json.description host.event.description
      json.host_id host.event.host_id
      json.city_id host.event.city_id
      json.max_attend host.event.max_attend
      json.current_attend host.event.current_attend
      json.event_full host.event.current_attend == host.event.max_attend
    end
  end
end
