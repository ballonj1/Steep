json.array! @events, :id, :date, :time, :address, :description, :host_id,
                      :city_id, :max_attend, :current_attend

# @events.each do |event|
#   json.set! event.id do
#     json.id event.id
#     json.date event.date
#     json.time event.time
#     json.address event.address
#     json.description event.description
#     json.host_id event.host_id
#     json.city_id event.city_id
#     json.max_attend event.max_attend
#     json.current_attend event.current_attend
#   end
# end
