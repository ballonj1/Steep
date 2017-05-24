json.set! @event.id do
  json.id @event.id
  json.date @event.date
  json.time @event.time
  json.address @event.address
  json.description @event.description
  json.host_id @event.host_id
  json.city_id @event.city_id
  json.max_attend @event.max_attend
  json.current_attend @event.current_attend
  if logged_in?
    json.attending !!current_user.joins.find_by(event_id: @event.id)
  end
  if logged_in?
    json.hosting !!current_user.hosts.find_by(event_id: @event.id)
  end
  json.event_full @event.max_attend == @event.current_attend
end
