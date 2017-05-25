@cities.each do |city|
  json.set! city.id do
    json.id city.id
    json.name city.name
    json.image_url city.image_url
    json.events do
      city.events.each do |event|
        json.set! event.id do
          json.id event.id
          json.date event.date
          json.time event.time
          json.address event.address
          json.description event.description
          json.host_id event.host_id
          json.city_id event.city_id
          json.max_attend event.max_attend
          json.current_attend event.current_attend
          json.event_full event.current_attend == event.max_attend
        end
      end
    end
  end
end
