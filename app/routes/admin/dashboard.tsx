import { Header, StatsCard, TripCard } from "../../../components";
import type { Route } from "./+types/dashboard";
import { parseTripData } from "~/lib/utils";
import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
} from "@syncfusion/ej2-react-grids";
import {
  allTrips,
  dashboardStats,
  tripXAxis,
  tripyAxis,
  userXAxis,
  useryAxis,
} from "~/constants";
import { redirect } from "react-router";
import { getUser } from "~/appwrite/auth";

export const clientLoader = async () => {
  const [user] = await Promise.all([await getUser()]);

  //   const allTrips = trips.allTrips.map(({ $id, tripDetails, imageUrls }) => ({
  //     id: $id,
  //     ...parseTripData(tripDetails),
  //     imageUrls: imageUrls ?? [],
  //   }));

  //   const mappedUsers: UsersItineraryCount[] = allUsers.users.map((user) => ({
  //     imageUrl: user.imageUrl,
  //     name: user.name,
  //     count: user.itineraryCount ?? Math.floor(Math.random() * 10),
  //   }));

  return {
    user,
    dashboardStats,
    allTrips,
    // userGrowth,
    // tripsByTravelStyle,
    // allUsers: mappedUsers,
  };
};

const Dashboard = ({ loaderData }: Route.ComponentProps) => {
  const user = loaderData.user as User | null;

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome back, ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={dashboardStats.totalUsers}
            currentMonthCount={dashboardStats.usersJoined.currentMonth}
            lastMonthCount={dashboardStats.usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={dashboardStats.totalTrips}
            currentMonthCount={dashboardStats.tripsCreated.currentMonth}
            lastMonthCount={dashboardStats.tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users"
            total={dashboardStats.userRole.total}
            currentMonthCount={dashboardStats.userRole.currentMonth}
            lastMonthCount={dashboardStats.userRole.lastMonth}
          />
        </div>
      </section>

      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>

        <div className="trip-grid">
          {allTrips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id.toString()}
              name={trip.name!}
              imageUrl={trip.imageUrls[0]}
              location={trip.itinerary?.[0]?.location ?? ""}
              tags={trip.tags!}
              price={trip.estimatedPrice!}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
