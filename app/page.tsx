import ExploreBtn from "@/components/ExploreBtn";
import EventCart from '@/components/EventCard';
import events from "@/lib/constants";
import { IEvent } from "@/database";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {

   const response = await fetch(`${BASE_URL}/api/events`);
   const { events } = await  response.json();
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathon, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7" id="events">
        <h3>Featured Events</h3>
        <ul className="events">
          {events && events.length > 0 && events.map((event) => (
            <li key={event.title} className="list-none">
              <EventCart {...event}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
