json.set! @city.id do
  json.id @city.id
  json.name @city.name
  json.image_url @city.image_url
  json.events do
    @city.events.each do |event|
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
        if logged_in?
          json.attending !!current_user.joins.find_by(event_id: event.id)
        end
        if logged_in?
          json.hosting !!current_user.hosts.find_by(event_id: event.id)
        end
        json.event_full event.current_attend == event.max_attend
      end
    end
  end
end


# json.set! @host.id do
#   json.id @host.id
#   json.user_id @host.user_id
#   json.event_id @host.event_id
#   json.event do
#     json.id @host.event.id
#     json.date @host.event.date
#     json.time @host.event.time
#     json.address @host.event.address
#     json.description @host.event.description
#     json.host_id @host.event.host_id
#     json.city_id @host.event.city_id
#     json.max_attend @host.event.max_attend
#     json.current_attend @host.event.current_attend
#     json.event_full @host.event.current_attend == @host.event.max_attend
#   end
# end
