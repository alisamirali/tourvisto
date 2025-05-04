declare type BaseUser = {
  id: string;
  name: string;
  email: string;
  dateJoined: string;
  imageUrl: string;
};

declare interface UserData extends BaseUser {
  itineraryCreated: number | string;
  status: "user" | "admin";
}

declare type User = BaseUser;

declare type Country = {
  name: string;
  coordinates: [number, number];
  value: string;
  openStreetMap?: string;
};

declare type DropdownItem = {
  name: string;
};

declare type SelectProps = {
  data: Country[] | DropdownItem[];
  onValueChange: (value: string) => void;
  id: string;
  label: string;
  placeholder: string;
};

declare type PillProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
};

declare type Activity = {
  time: string;
  description: string;
};

declare type DayPlan = {
  day: number;
  location: string;
  activities: Activity[];
};

declare type Location = {
  city: string;
  coordinates: [number, number];
  openStreetMap: string;
};

declare type Trip = {
  id: string;
  name: string;
  description: string;
  estimatedPrice: string;
  duration: number;
  budget: string;
  travelStyle: string;
  interests: string;
  groupType: string;
  country: string;
  imageUrls: string[];
  itinerary: DayPlan[];
  bestTimeToVisit: string[];
  weatherInfo: string[];
  location: Location;
  payment_link: string;
  tags: string[];
};

declare type TripCardProps = {
  id: number | string;
  name: string;
  location: string;
  imageUrl: string;
  tags: string[];
  price: string;
};

declare type StatsCard = {
  headerTitle: string;
  total: number;
  lastMonthCount: number;
  currentMonthCount: number;
};

declare type TrendResult = {
  trend: "increment" | "decrement" | "no change";
  percentage: number;
};

declare type DashboardStats = {
  totalUsers: number;
  usersJoined: {
    currentMonth: number;
    lastMonth: number;
  };
  userRole: {
    total: number;
    currentMonth: number;
    lastMonth: number;
  };
  totalTrips: number;
  tripsCreated: {
    currentMonth: number;
    lastMonth: number;
  };
};

declare type CreateTripResponse = {
  id?: string;
};

declare type DestinationProps = {
  containerClass?: string;
  bigCard?: boolean;
  activityCount: number;
  rating: number;
  bgImage: string;
  title: string;
};

type GetAllTripsResponse = {
  allTrips: Models.Document[];
  total: number;
};

declare type UsersItineraryCount = {
  imageUrl: string;
  name: string;
  count: number;
};

declare type TripsInterest = {
  imageUrl: string;
  name: string;
  interest: string;
};

declare type InfoPillProps = {
  text: string;
  image: string;
};

declare type TripFormData = {
  country: string;
  travelStyle: string;
  interest: string;
  budget: string;
  duration: number;
  groupType: string;
};
