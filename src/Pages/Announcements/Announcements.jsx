import { HiSpeakerphone } from "react-icons/hi";
import UseAnnouncement from "../../Hook/useAnnouncement";
import UseAuth from "../../Hook/useAuth";

const Announcements = () => {
  const { user } = UseAuth();
  const [announcements, refetch] = UseAnnouncement();
  //   const { flatNumber, contact, announcement, date, buildingName } =
  announcements;
  return (
    <div>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-6 mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
              Building Owner Announcement
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {announcements.map((announcement) => (
                <div key={announcement._id}>
                  <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
                    <HiSpeakerphone size={36} className="" />
                  </div>

                  <div className=" font-semibold text-gray-700 dark:text-white">
                    <h1 className="text-xl font-tauri">{announcement.title}</h1>
                    <p className="text-lg font-abel text-green-500">
                      <span className="text-xl text-amber-500 font-tauri">
                        {" "}
                        Announcement Date
                      </span>
                      : {announcement.announcementDate}
                    </p>
                    <p>
                      <span className="text-xl text-amber-500 font-tauri">
                        Announcement for Flat
                      </span>{" "}
                      : {announcement.flatNumber}
                    </p>
                    <p className="mt-2 text-lg text-gray-500 font-abel dark:text-gray-300">
                      <span className="text-xl text-amber-500 font-tauri">
                        {" "}
                        Announcement
                      </span>{" "}
                      : {announcement.announcement}
                    </p>
                    <p className="mt-2 text-lg text-gray-500 font-abel dark:text-gray-300">
                      <span className="text-xl text-amber-500 font-tauri">
                        Contact
                      </span>
                      :
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Announcements;
