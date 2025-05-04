import { Header, TripCard } from "../../../components";
import { type LoaderFunctionArgs, useSearchParams } from "react-router";
import { parseTripData } from "~/lib/utils";
import type { Route } from "./+types/trips";
import { useState } from "react";
import { PagerComponent } from "@syncfusion/ej2-react-grids";
import { allTrips } from "~/constants";

const AllTrips = () => {
  return (
    <main className="all-users wrapper">
      <Header
        title="Trips"
        description="View and edit AI-generated travel plans"
        ctaText="Create a Trip"
        ctaUrl="/trips/create"
      />

      <section>
        <h1 className="p-24-semibold text-dark-100 mb-4">
          Manage Created Trips
        </h1>

        <div className="trip-grid mb-4">
          {allTrips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id}
              name={trip.name}
              imageUrl={trip.imageUrls[0]}
              location={trip.itinerary?.[0]?.location ?? ""}
              tags={trip.tags!}
              price={trip.estimatedPrice}
            />
          ))}
        </div>

        <PagerComponent
          totalRecordsCount={allTrips.length}
          pageSize={8}
          currentPage={1}
          click={(args) => {
            console.log("first", args);
          }}
          cssClass="!mb-4"
        />
      </section>
    </main>
  );
};

export default AllTrips;
