```
{
  currentUser: {
    id: 1,
    first_name: "Adam",
    email: "email1@gmail.com" 
  },
  events: {
    [ { id: 1,
    date: "January 20, 2020",
    time: "11:15 PM",
    address: "6001 W 3rd St, Los Angeles, CA 90036",
    description: "Be there.",
    host_id: 2,
    city_id: 3,
    max_attend: 5

  },... ],
  attending: {
      [ { id: 2,
      date: "January 21, 2020",
      time: "1:15 PM",
      address: "550 S Reseda Blvd, Los Angeles, CA 90036",
      description: "Be here."
      host_id: 5,
      city_id: 8,
      max_attend: 7
    },... ]
      }
    }
  },
  cities: [ {
    id: 4,
    name: "Portland",
    image_url: "This url"
     } ],
  hosts: [{
    id: 1,
    description: "I like to golf.",
    user_id: 4
  }]
}
```
