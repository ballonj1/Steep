## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - NavBar
 - Footer

**CitiesContainer**
 - CitiesIndex
  + CitiesDetail

**CityContainer**
 - CityEventIndex
  + CityEventDetail

**DashboardContainer**
 - DashboardIndex
  + JoinedContainer
    + JoinedDetail
  + HostedContainer
    + HostedDetail
    
**HostingContainer**
 - HostingIndex
   + HostingDetail
 

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/cities" | "CitiesContainer" |
| "/city/:cityId" | "CityContainer" |
| "/dashboard" | "DashboardContainer" |
| "/hosting" | "HostingContainer" |
