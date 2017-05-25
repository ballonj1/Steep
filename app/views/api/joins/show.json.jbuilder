json.set! @join.id do
  json.id @join.id
  json.user_id @join.user_id
  json.event_id @join.event_id
  json.event do
    json.id @join.event.id
    json.date @join.event.date
    json.time @join.event.time
    json.address @join.event.address
    json.description @join.event.description
    json.host_id @join.event.host_id
    json.city_id @join.event.city_id
    json.max_attend @join.event.max_attend
    json.current_attend @join.event.current_attend
    json.event_full @join.event.current_attend == @join.event.max_attend
    if logged_in?
      json.attending !!current_user.joins.find_by(event_id: @join.event.id)
    end
    if logged_in?
      json.hosting !!current_user.hosts.find_by(event_id: @join.event.id)
    end
    json.event_full @join.event.current_attend == @join.event.max_attend
  end
end
