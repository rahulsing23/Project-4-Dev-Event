import Link from "next/link";
import Image from "next/image";
import BorderGlow from "./BorderGlow";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#060010"
      borderRadius={28}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
    >
      <div style={{ padding: "2em" }}>
        <Link href={`/events/${slug}`} id="event-card">
          <Image
            src={image}
            alt={title}
            width={410}
            height={300}
            className="poster"
          />

          <div className="flex flex-row gap-2">
            <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
            <p>{location}</p>
          </div>

          <p className="title">{title}</p>

          <div className="datetime">
            <div>
              <Image
                src="/icons/calendar.svg"
                alt="date"
                width={14}
                height={14}
              />
              <p>{date}</p>
            </div>
            <div>
              <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
              <p>{time}</p>
            </div>
          </div>
        </Link>
      </div>
    </BorderGlow>
  );
};

export default EventCard;
